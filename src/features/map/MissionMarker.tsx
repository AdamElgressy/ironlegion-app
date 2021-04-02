import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { LeafletEvent, Icon, LatLng } from 'leaflet';
import { Marker } from 'react-leaflet';
import markerImg from '../../assets/marker.png';
import { Position } from '../../utils/geo/types';
import { setNewMissionPosition } from '../controls/controlsSlice';


const MarkerIcon = () =>  new Icon({
  iconUrl: markerImg,
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});


const eventHandlers = (position: Position, dispatch: ReturnType<typeof useAppDispatch>) => ({
  click: () => console.log(position),

  drag: (event: LeafletEvent) => {
    const { lat, lng }: LatLng = event.target.getLatLng();
    dispatch(setNewMissionPosition({ lat, lng }))
  }
});


const MissionMarker = () => {
  const icon = useMemo(() => MarkerIcon(), []);
  const dispatch = useAppDispatch();
  const newMissionPosition = useAppSelector(state => state.controls.newMissionPosition);
  const selectedAvatar = useAppSelector(state => state.controls.selectedAvatar);
  if (!selectedAvatar) return <></>;

  return (
    <Marker
      icon={icon}
      position={newMissionPosition}
      draggable
      eventHandlers={eventHandlers(newMissionPosition, dispatch)}
    />
  );
};

export default MissionMarker;
