import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from './rootReducer'
import type { AppDispatch } from './index';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>