import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from '../../utils/geo/types';

export interface ControlsState {
  newMissionPosition: Position,
  isMissionAdderOpen: boolean,
}

const initialState: ControlsState = {
  newMissionPosition: { lat: 10, lng: 50},
  isMissionAdderOpen: true,
}

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,

  reducers: {
    setNewMissionPosition: (state, action: PayloadAction<Position>) => {
      state.newMissionPosition = action.payload;
    },

    openMissionAdder: (state, action) => {
      state.isMissionAdderOpen = true;
    },

    closeMissionAdder: (state, action) => {
      state.isMissionAdderOpen = false;
    }
  }
});

export const { setNewMissionPosition } = controlsSlice.actions;

export default controlsSlice.reducer;
