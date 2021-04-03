import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/hooks';
import { Position } from '../../utils/geo/types';
import { move, resolveCurrentMissionThunk } from '../avatars/avatarsSlice';
import { MissionResolution } from '../avatars/common';

interface MoverState {
  timeStamp: number;
}

const initialState: MoverState = {
  timeStamp: Date.now(),
};

export const moverSlice = createSlice({
  name: 'mover',
  initialState,

  reducers: {
    setTimeStamp: (state, action: PayloadAction<{time: number}>) => {
      state.timeStamp = action.payload.time;
    },

  },
});


export const { setTimeStamp } = moverSlice.actions;

export default moverSlice.reducer;


export const moveThunk = (avatarNewPositions :{[key: string]: Position}): AppThunk => (dispatch, getState) => {
  dispatch(setTimeStamp({ time: Date.now() }));
  if (Object.keys(avatarNewPositions).length === 0) return;

  dispatch(move(avatarNewPositions));

  const avatars = getState().avatars;
  const missions = getState().missions;
  const movedAvatarUuids = Object.keys(avatarNewPositions);

  movedAvatarUuids.forEach(uuid => {
    const currentMissionUuid = avatars[uuid].currentMission?.uuid;
    if (!currentMissionUuid) return;
    if (missions[currentMissionUuid].endPosition !== avatars[uuid].currentPosition) return;
    dispatch(resolveCurrentMissionThunk(uuid, MissionResolution.COMPLETED));
  });
}
