import { combineReducers } from '@reduxjs/toolkit';
import avatarsReducer from '../features/avatars/avatarsSlice';
import missionsReducer from '../features/missions/missionsSlicer';
import controlsReducer from '../features/controls/controlsSlice';

const rootReducer = combineReducers({
  avatars: avatarsReducer,
  missions: missionsReducer,
  controls: controlsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
