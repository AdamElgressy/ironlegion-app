import React from 'react';
import useMover from '../../mover/useMover';
import MissionMarker from './MissionMarker';
import AvatarMarkers from './AvatarMarkers';
import AvatarMissionMakers from './AvatarMissionMarkers';


const refreshRate = 30; // ms
const speed = 1000; // km/s


const Markers = () => {
  useMover(speed, refreshRate);
  return (
    <>
      <AvatarMarkers />
      <MissionMarker />
      <AvatarMissionMakers />
    </>
  );
};


export default Markers;
