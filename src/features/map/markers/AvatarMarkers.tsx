import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Avatar } from '../../avatars/types';
import { selectAvatar } from '../../controls/controlsSlice';
import { getImage } from '../../avatars/avatarImages';


const avatarIcon = (type: string) => new Icon({
  iconUrl: getImage(type),
  iconSize: [50, 50],
  iconAnchor: [25,25],
});


const avatarEventHandler = (avatar: Avatar, dispatch: ReturnType<typeof useAppDispatch>) => ({
  click: () => dispatch(selectAvatar({ uuid: avatar.uuid })),
});


const CreateMarker = (avatar: Avatar, dispatch: ReturnType<typeof useAppDispatch>) => {
  // TODO: Deal. Memo to avoid refetching, but hook, can't be called several times in same render.
  return <Marker
    position={avatar.currentPosition}
    icon={avatarIcon(avatar.type)}
    draggable={false}
    eventHandlers={avatarEventHandler(avatar, dispatch)}
    key={avatar.uuid}
  />
};


const AvatarMarkers = () => {
  const dispatch = useAppDispatch();
  const avatars = useAppSelector(state => state.avatars);
  return (
    <>
      {Object.keys(avatars).map(uuid => CreateMarker(avatars[uuid], dispatch))}
    </>
  );
}


export default AvatarMarkers;
