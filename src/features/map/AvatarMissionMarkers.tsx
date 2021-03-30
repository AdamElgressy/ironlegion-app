import React from 'react';
import { useAppSelector } from "../../store/hooks";
import { Icon } from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';
import markerImg from '../../assets/shield.png';


const MarkerIcon = () =>  new Icon({
  iconUrl: markerImg,
  iconSize: [25, 25],
  iconAnchor: [13, 13]
});


const AvatarMissionMakers = () => {
  const avatars = useAppSelector(state => state.avatars);
  const missions = useAppSelector(state => state.missions);
  const selectedAvatarUuid = useAppSelector(state => state.controls.selectedAvatar);

  if (!selectedAvatarUuid) return <></>;
  if (!avatars[selectedAvatarUuid]) return <></>;
  const selectedAvatar = avatars[selectedAvatarUuid];
  
  return (
    <>
      {selectedAvatar.pastMissions.map((mission, index) => <Marker 
            position={missions[mission.uuid].endPosition}
            icon={MarkerIcon()}
            draggable={false}
            key={mission.uuid}
            
        >
          <Tooltip direction={'top'}>{index + 1}</Tooltip>
        </Marker>
      )}
    </>
  );
};


export default AvatarMissionMakers;
