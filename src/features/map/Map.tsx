import React from 'react';
import { MapContainer, useMapEvents, TileLayer } from 'react-leaflet';
import locations from '../../utils/locations';
import { useAppDispatch } from '../../store/hooks';
import { closePanels } from '../controls/controlsSlice';
import Markers from './markers/Markers';

const MapEvents = () => {
  const dispatch = useAppDispatch();

  useMapEvents({
    click: (e) => dispatch(closePanels()),
  });

  return null;
};

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
      <MapEvents />
      <Markers />
    </MapContainer>
  );
};

export default Map;
