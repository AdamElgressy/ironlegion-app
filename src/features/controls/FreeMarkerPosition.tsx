import React from 'react';
import { useAppSelector } from '../../store/hooks';

const FreeMarkerPosition = () => {
  const freeMarkerPosition = useAppSelector(state => state.controls.freeMarkerPosition);

  return (
    <div>
    lat: {freeMarkerPosition.lat.toFixed(2)}
    <br/>
    lng: {freeMarkerPosition.lng.toFixed(2)}
    </div>
  );
}


export default FreeMarkerPosition;
