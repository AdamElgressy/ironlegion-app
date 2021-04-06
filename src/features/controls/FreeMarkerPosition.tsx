import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { Typography } from '@material-ui/core';

const FreeMarkerPosition = () => {
  const freeMarkerPosition = useAppSelector(state => state.controls.freeMarkerPosition);

  return (
    <Typography>
    Lat: {freeMarkerPosition.lat.toFixed(2)}
    <br/>
    Lng: {freeMarkerPosition.lng.toFixed(2)}
    </Typography>
  );
}


export default FreeMarkerPosition;
