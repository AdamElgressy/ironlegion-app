import React, { useMemo } from 'react';
import { useAppSelector } from "../../store/hooks";
import { Marker } from 'react-leaflet';
import { Avatar } from '../avatars/types';
import AvatarIcon from './AvatarIcon';


const avatarEventHandler = (avatar: Avatar) => ({
  click: () => console.log(`Hi, I'm ${avatar.name}`),
});

const CreateMarker = (avatar: Avatar) => {
  const { position, type, uuid } = avatar;
  const icon = useMemo(() => AvatarIcon(type), [type]);
  return <Marker
    position={position}
    icon={icon}
    draggable={false}
    eventHandlers={avatarEventHandler(avatar)}
    key={uuid}
  />
};

const AvatarMarkers = () => {
  const avatars = useAppSelector(state => state.avatars);
  return (
    <>
      {Object.keys(avatars).map(uuid => CreateMarker(avatars[uuid]))}
    </>
  );
}


export default AvatarMarkers;
