import React from 'react';
import { useAppSelector } from "../../store/hooks";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import locations from '../../utils/locations';
import { Avatar } from '../avatars/types';
import AvatarIcon from './AvatarIcon';

const avatarEventHandler = (avatar: Avatar) => ({
  click: () => console.log(`Hi, I'm ${avatar.name}`),
});

const createMarker = (avatar: Avatar) => (
  <Marker
    position={avatar.position}
    icon={AvatarIcon(avatar.type)}
    draggable={false}
    eventHandlers={avatarEventHandler(avatar)}
    key={avatar.uuid}
  />
);

const Map = () => {
  const avatars = useAppSelector((state) => state.avatars);

  const markers = Object.keys(avatars).map((uuid) => createMarker(avatars[uuid]));

  return (
    <MapContainer
      center={locations.azrieli}
      zoom={3}
      scrollWheelZoom={'center'}
      zoomControl={false}
      style={{ height: '100%', width: '100%' }} // Required to work.
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers}
    </MapContainer>
  );
};

export default Map;
