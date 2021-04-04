import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { LeafletEvent, Icon, LatLng } from 'leaflet';
import { Marker } from 'react-leaflet';
import markerImg from '../../../assets/marker.png';
import { Position } from '../../../utils/geo/types';
import { setFreeMarkerPosition } from '../../controls/controlsSlice';


const MarkerIcon = () =>  new Icon({
  iconUrl: markerImg,
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});


const eventHandlers = (position: Position, dispatch: ReturnType<typeof useAppDispatch>) => ({
  click: () => console.log(position),

  drag: (event: LeafletEvent) => {
    const { lat, lng }: LatLng = event.target.getLatLng();
    dispatch(setFreeMarkerPosition({ position: {lat, lng} }));
  }
});


const MissionMarker = () => {
  const icon = useMemo(() => MarkerIcon(), []);
  const dispatch = useAppDispatch();
  const freeMarkerPosition = useAppSelector(state => state.controls.freeMarkerPosition);
  const isBottomPanelOpen = useAppSelector(state => state.controls.isBottomPanelOpen);
  const isMissionAdderOpen = useAppSelector(state => state.controls.isMissionAdderOpen);

  if (!isBottomPanelOpen && !isMissionAdderOpen) return <></>;

  return (
    <Marker
      icon={icon}
      position={freeMarkerPosition}
      draggable
      eventHandlers={eventHandlers(freeMarkerPosition, dispatch)}
    />
  );
};

export default MissionMarker;
