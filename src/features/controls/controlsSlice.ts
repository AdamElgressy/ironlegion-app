import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from '../../utils/geo/types';

export interface ControlsState {
  selectedAvatar: string | null,
  newMissionPosition: Position,
  isMissionAdderOpen: boolean,
}

const initialState: ControlsState = {
  selectedAvatar: null,
  newMissionPosition: { lat: 10, lng: 50},
  isMissionAdderOpen: true,
}

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,

  reducers: {
    selectAvatar: (state, action: PayloadAction<{ uuid: string}>) => {
      state.selectedAvatar = action.payload.uuid;
    },

    setNewMissionPosition: (state, action: PayloadAction<Position>) => { // TODO: Change payload to obj.
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

export const {
  selectAvatar,
  setNewMissionPosition,
  openMissionAdder,
  closeMissionAdder
} = controlsSlice.actions;

export default controlsSlice.reducer;
