import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from '../../utils/geo/types';
import { MissionResolution, MissionStatus } from './common';
import { AppThunk } from '../../store/hooks';
import { Avatar } from './types';

interface State {
  [key: string]: Avatar;
}

const initialState: State = {
  101: {
    uuid: '101',
    name: 'Thor',
    type: 'THOR',
    position: { lat: 32.07, lng: 34.79, },
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
        position,
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
      uuids.forEach(uuid => state[uuid].position = action.payload[uuid]);
    },

    addMission: (state, action: PayloadAction<{ avatarUuid: string, missionUuid: string }>) => {
      const { avatarUuid, missionUuid } = action.payload;
      if (!state[avatarUuid]) return;
      if (!state[avatarUuid].currentMission) {
        state[avatarUuid].currentMission = { uuid: missionUuid, status: MissionStatus.IN_PROGESS}
      } else {
        state[avatarUuid].futureMissions.push(missionUuid);
      }
    },

    startNextMission: (state, action: PayloadAction<{ avatarUuid: string }>) => {
      const { avatarUuid } = action.payload;
      if (!state[avatarUuid]) return;

      const nextMissionUuid = state[avatarUuid].futureMissions.shift();

      if (!nextMissionUuid){
        state[avatarUuid].currentMission = null;
      } else {
        state[avatarUuid].currentMission = {
          uuid: nextMissionUuid,
          status: MissionStatus.IN_PROGESS,
        };
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
      if (!state[avatarUuid]) return;
      if (!state[avatarUuid].currentMission) return;

      state[avatarUuid].pastMissions.push({
        uuid: state[avatarUuid].currentMission!.uuid,
        resolution
      });
    },

  },
});


const setMissionState = (state: State, action: PayloadAction<{ avatarUuid: string }>, status: MissionStatus) => {
  const { avatarUuid } = action.payload;
  if (!state[avatarUuid]) return;

  if (!state[avatarUuid].currentMission) return;
  state[avatarUuid].currentMission!.status = status;
};


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

export const moveTunk = (avatarNewPositions :{[key: string]: Position}): AppThunk => (dispatch, getState) => {
  dispatch(move(avatarNewPositions));
  const avatars = getState().avatars;
  const missions = getState().missions;
  const movedAvatarUuids = Object.keys(avatarNewPositions);

  movedAvatarUuids.forEach(uuid => {
    const currentMissionUuid = avatars[uuid].currentMission?.uuid;
    if (!currentMissionUuid) return;
    if (missions[currentMissionUuid].endPosition !== avatars[uuid].position) return;
    dispatch(resolveCurrentMissionThunk(uuid, MissionResolution.COMPLETED));
  });
}
