import { combineReducers } from '@reduxjs/toolkit';
import avatarsReducer from '../features/avatars/avatarsSlice';
import missionsReducer from '../features/missions/missionsSlicer';

const rootReducer = combineReducers({
  avatars: avatarsReducer,
  missions: missionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
