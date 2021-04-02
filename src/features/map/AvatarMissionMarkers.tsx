import React from 'react';
import { useAppSelector } from "../../store/hooks";
import { Icon } from 'leaflet';
import { Marker } from 'react-leaflet';
import pastMissionMarkerImg from '../../assets/red_dot.png';
import futureMissionMarkerImg from '../../assets/gray_dot.png';


const PastMissionMarkerIcon = () =>  new Icon({
  iconUrl: pastMissionMarkerImg,
  iconSize: [8, 8],
  iconAnchor: [4, 4]
});

const FutureMissionMarkerIcon = () =>  new Icon({
  iconUrl: futureMissionMarkerImg,
  iconSize: [8, 8],
  iconAnchor: [4, 4]
});



const AvatarMissionMakers = () => {
  const avatars = useAppSelector(state => state.avatars);
  const missions = useAppSelector(state => state.missions);
  const selectedAvatarUuid = useAppSelector(state => state.controls.selectedAvatar);
  const showMissions = useAppSelector(state => state.controls.showMissions);

  if (!showMissions) return <></>;
  if (!selectedAvatarUuid) return <></>;
  if (!avatars[selectedAvatarUuid]) return <></>;
  const selectedAvatar = avatars[selectedAvatarUuid];
  
  return (
    <>
      {selectedAvatar.pastMissions.map((mission) => <Marker 
            position={missions[mission.uuid].endPosition}
            icon={PastMissionMarkerIcon()}
            draggable={false}
            key={mission.uuid}   
        />)
      }

      {selectedAvatar.futureMissions.map((missionUuid) => <Marker 
            position={missions[missionUuid].endPosition}
            icon={FutureMissionMarkerIcon()}
            draggable={false}
            key={missionUuid}   
        />)
      }
    </>
  );
};


export default AvatarMissionMakers;
