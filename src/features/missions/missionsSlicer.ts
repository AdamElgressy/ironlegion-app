import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/hooks';
import { Mission } from './types';
import { addMission as addMissionToAvatar } from '../avatars/avatarsSlice';

interface MissionsState {
  [key: string]: Mission;
}

const initialState: MissionsState = {};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,

  reducers: {
    addMission: (state, action: PayloadAction<Mission>) => {
      const { uuid, name, endPosition} = action.payload;
      state[action.payload.uuid] = { uuid, name, endPosition };
    },
  },
});


export const { addMission } = missionsSlice.actions;

export default missionsSlice.reducer;

export const addMissionThunk = ( mission: Mission, avatarUuid: string ): AppThunk  => dispatch => {
  dispatch(addMission(mission));
  dispatch(addMissionToAvatar({ avatarUuid, missionUuid: mission.uuid }));
}