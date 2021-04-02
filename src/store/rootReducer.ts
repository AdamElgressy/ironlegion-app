import { combineReducers } from '@reduxjs/toolkit';
import moverReducer from '../features/mover/moverSlicer';
import avatarsReducer from '../features/avatars/avatarsSlice';
import missionsReducer from '../features/missions/missionsSlicer';
import controlsReducer from '../features/controls/controlsSlice';

const rootReducer = combineReducers({
  mover: moverReducer,
  avatars: avatarsReducer,
  missions: missionsReducer,
  controls: controlsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
