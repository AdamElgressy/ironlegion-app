import React from 'react';
import { useAppSelector } from "../../../store/hooks";
import { Icon } from 'leaflet';
import { Marker } from 'react-leaflet';
import pastMissionMarkerImg from '../../../assets/red_dot.png';


const MissionMarkerIcon = () =>  new Icon({
  iconUrl: pastMissionMarkerImg,
  iconSize: [8, 8],
  iconAnchor: [4, 4]
});



const AvatarMissionMakers = () => {
  const selectedMissionUuid = useAppSelector(state => state.controls.selectedMission);
  const missions = useAppSelector(state => state.missions);
  if (!selectedMissionUuid) return <></>;
  const mission = missions[selectedMissionUuid];

  return (
    <Marker 
      position={mission.endPosition}
      icon={MissionMarkerIcon()}
      draggable={false}
      key={mission.uuid}   
    />
  );
};


export default AvatarMissionMakers;
