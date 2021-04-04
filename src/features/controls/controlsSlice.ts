import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/hooks';
import { Position } from '../../utils/geo/types';

export interface ControlsState {
  selectedMission: string | null,
  selectedAvatar: string | null,
  showMissions: boolean,
  freeMarkerPosition: Position,
  isMissionAdderOpen: boolean,
  isBottomPanelOpen: boolean,
}

const initialState: ControlsState = {
  selectedMission: null,
  selectedAvatar: null,
  showMissions: true,
  freeMarkerPosition: { lat: 47, lng: 10},
  isMissionAdderOpen: false,
  isBottomPanelOpen: false,
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

    selectMission: (state, action: PayloadAction<{ uuid: string }>) => {
      state.selectedMission = action.payload.uuid;
    },

    unSelectMission: (state, action: PayloadAction<void>) => {
      state.selectedMission = null;
    },

    setFreeMarkerPosition: (state, action: PayloadAction<{ position: Position }>) => {
      state.freeMarkerPosition = action.payload.position;
    },

    openMissionAdder: (state, action: PayloadAction<void>) => {
      state.isMissionAdderOpen = true;
    },

    closeMissionAdder: (state, action: PayloadAction<void>) => {
      state.isMissionAdderOpen = false;
    },

    openBottomPanel: (state, action: PayloadAction<void>) => {
      state.isBottomPanelOpen = true;
    },

    closeBottomPanel: (state, action: PayloadAction<void>) => {
      state.isBottomPanelOpen = false;
    },
  }
});

export const {
  selectAvatar,
  unSelectAvatar,

  selectMission,
  unSelectMission,

  openMissionAdder,
  closeMissionAdder,

  openBottomPanel,
  closeBottomPanel,

  setFreeMarkerPosition,
} = controlsSlice.actions;

export default controlsSlice.reducer;


export const closeSidePanelThunk = (): AppThunk => dispatch => {
  dispatch(closeMissionAdder());
  dispatch(unSelectAvatar());
}

export const closePanels = (): AppThunk => dispatch => {
  dispatch(closeBottomPanel());
  dispatch(closeSidePanelThunk());
}

export const selectAvatarAndCloseBottomPanel = ({ uuid }: { uuid: string }): AppThunk => dispatch => {
  dispatch(closeBottomPanel());
  dispatch(selectAvatar({ uuid }));
}

