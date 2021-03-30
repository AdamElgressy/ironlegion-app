import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Marker } from 'react-leaflet';
import { Avatar } from '../avatars/types';
import AvatarIcon from './AvatarIcon';
import { selectAvatar } from '../controls/controlsSlice';


const avatarEventHandler = (avatar: Avatar, dispatch: ReturnType<typeof useAppDispatch>) => ({
  click: () => dispatch(selectAvatar({ uuid: avatar.uuid})),
});

const CreateMarker = (avatar: Avatar, dispatch: ReturnType<typeof useAppDispatch>) => {
  const { position, type, uuid } = avatar;
  // TODO: Deal. Memo to avoid refetching, but hook, can't be called several times in same render.
  //const icon = useMemo(() => AvatarIcon(type), [type]);
  const icon =  AvatarIcon(type);
  return <Marker
    position={position}
    icon={icon}
    draggable={false}
    eventHandlers={avatarEventHandler(avatar, dispatch)}
    key={uuid}
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
