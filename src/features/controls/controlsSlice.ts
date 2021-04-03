import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from '../../utils/geo/types';

export interface ControlsState {
  showMissions: boolean,
  selectedAvatar: string | null,
  newMissionPosition: Position,
  isMissionAdderOpen: boolean,
}

const initialState: ControlsState = {
  showMissions: true,
  selectedAvatar: null,
  newMissionPosition: { lat: 47, lng: 10},
  isMissionAdderOpen: false,
}

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,

  reducers: {
    selectAvatar: (state, action: PayloadAction<{ uuid: string}>) => {
      state.selectedAvatar = action.payload.uuid;
    },

    unSelectAvatar: (state, action: PayloadAction<void>) => {
      state.selectedAvatar = null;
    },

    setNewMissionPosition: (state, action: PayloadAction<Position>) => { // TODO: Change payload to obj.
      state.newMissionPosition = action.payload;
    },

    openMissionAdder: (state, action: PayloadAction<void>) => {
      state.isMissionAdderOpen = true;
    },

    closeMissionAdder: (state, action: PayloadAction<void>) => {
      state.isMissionAdderOpen = false;
    },

    toggleShowMissions: (state, action: PayloadAction<void>) => {
      state.showMissions = !state.showMissions;
    },
  }
});

export const {
  selectAvatar,
  unSelectAvatar,
  setNewMissionPosition,
  openMissionAdder,
  closeMissionAdder,
  toggleShowMissions,
} = controlsSlice.actions;

export default controlsSlice.reducer;
