import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import LayersIcon from '@material-ui/icons/Layers';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import { toggleShowMissions } from './controlsSlice';

const ShowMissionsButton = () => {
  const showMissions = useAppSelector(state => state.controls.showMissions);
  const dispatch = useAppDispatch();

  if (showMissions) {
    return <LayersIcon onClick={() => dispatch(toggleShowMissions())} />;
  } else {
    return <LayersClearIcon onClick={() => dispatch(toggleShowMissions())} />;
  }
}

export default ShowMissionsButton;
