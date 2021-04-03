import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from '../../utils/geo/types';
import { MissionResolution, MissionStatus } from './common';
import { AppThunk } from '../../store/hooks';
import { Avatar } from './types';
import { calculateDistance } from '../../utils/geo/calculator';

interface AvatarsState {
  [key: string]: Avatar;
}

const initialState: AvatarsState = {
  101: {
    uuid: '101',
    name: 'Thor',
    type: 'THOR',
    currentPosition: { lat: 32.07, lng: 34.79, },
    futureMissions: [],
    pastMissions: [],
    currentMission: null,
  },
};


export const avatarsSlice = createSlice({
  name: 'avatars',
  initialState,

  reducers: {
    addAvatar: (state, action : PayloadAction<{
      uuid: string,
      name: string,
      type: string,
      position: Position,
    }>) => {
      const { uuid, name, type, position } = action.payload;
      state[action.payload.uuid] = {
        uuid,
        name,
        type,
        currentPosition: position,
        futureMissions: [],
        pastMissions: [],
        currentMission: null,
      };
    },


    removeAvatar: (state, action: PayloadAction<{uuid: string}>) => {
      delete state[action.payload.uuid];
    },


    move: (state, action: PayloadAction<{[key: string]: Position}>) => {
      const uuids = Object.keys(action.payload);
      uuids.forEach(uuid => state[uuid].currentPosition = action.payload[uuid]);
    },


    addMission: (state, action: PayloadAction<{ avatarUuid: string, missionUuid: string }>) => {
      const { avatarUuid, missionUuid } = action.payload;
      if (!state[avatarUuid]) return;
      if (state[avatarUuid].currentMission) {
        state[avatarUuid].futureMissions.push(missionUuid);
        return;
      }

      state[avatarUuid].currentMission = {
        uuid: missionUuid,
        startPosition: state[avatarUuid].currentPosition,
        status: MissionStatus.IN_PROGESS
      }
    },


    startNextMission: (state, action: PayloadAction<{ avatarUuid: string }>) => {
      const { avatarUuid } = action.payload;
      if (!state[avatarUuid]) return;

      const nextMissionUuid = state[avatarUuid].futureMissions.shift();
      if (!nextMissionUuid){
        state[avatarUuid].currentMission = null;
        return;
      }

      state[avatarUuid].currentMission = {
        uuid: nextMissionUuid,
        startPosition: state[avatarUuid].currentPosition,
        status: MissionStatus.IN_PROGESS,
      };
    },


    pauseCurrentMission: (state, action: PayloadAction<{ avatarUuid: string }>) => setMissionState(
      state, action, MissionStatus.PAUSED
    ),


    resumeCurrentMission: (state, action: PayloadAction<{ avatarUuid: string }>) => setMissionState(
      state, action, MissionStatus.IN_PROGESS
    ),


    resolveCurrentMission: (state, action: PayloadAction<{ avatarUuid: string, resolution: MissionResolution}>) => {
      const { avatarUuid, resolution } = action.payload;
      const avatar = state[avatarUuid];
      if (!avatar) return;
      if (!avatar.currentMission) return;

      state[avatarUuid].pastMissions.push({
        uuid: avatar.currentMission!.uuid,
        startPosition: avatar.currentMission.startPosition,
        endPosition: avatar.currentPosition,
        distance: getDistanceTraveledInCurrentMission(avatar),
        resolution,
      });
    },

  },
});


const setMissionState = (state: AvatarsState, action: PayloadAction<{ avatarUuid: string }>, status: MissionStatus) => {
  const { avatarUuid } = action.payload;
  if (!state[avatarUuid]) return;

  if (!state[avatarUuid].currentMission) return;
  state[avatarUuid].currentMission!.status = status;
};


const getDistanceTraveledInCurrentMission = (avatar: Avatar): number => {
  if (!avatar.currentMission) return 0;
  const [ previousMission ] = avatar.pastMissions.slice(-1);
  if (!previousMission) {
    return calculateDistance(avatar.currentMission.startPosition, avatar.currentPosition);
  }
  return calculateDistance(previousMission.endPosition, avatar.currentPosition);
}


export const {
  addAvatar,
  removeAvatar,
  move,
  addMission,
  startNextMission,
  pauseCurrentMission,
  resumeCurrentMission,
  resolveCurrentMission
} = avatarsSlice.actions;

export default avatarsSlice.reducer;

export const resolveCurrentMissionThunk = (avatarUuid: string, resolution: MissionResolution): AppThunk => dispatch => {
  dispatch(resolveCurrentMission({ avatarUuid, resolution }));
  dispatch(startNextMission({ avatarUuid }));
};
