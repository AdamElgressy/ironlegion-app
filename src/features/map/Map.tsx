import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import locations from '../../utils/locations';
import MissionMarker from './MissionMarker';
import AvatarMarkers from './AvatarMarkers';
import AvatarMissionMakers from './AvatarMissionMarkers';

const Map = () => {
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

      <MissionMarker />
      <AvatarMarkers />
      <AvatarMissionMakers />

    </MapContainer>
  );
};

export default Map;
