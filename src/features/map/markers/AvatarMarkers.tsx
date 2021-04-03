import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Marker } from 'react-leaflet';
import { Avatar } from '../../avatars/types';
import avatarIcon from './avatarIcon';
import { selectAvatar } from '../../controls/controlsSlice';


const avatarEventHandler = (avatar: Avatar, dispatch: ReturnType<typeof useAppDispatch>) => ({
  click: () => dispatch(selectAvatar({ uuid: avatar.uuid})),
});

const CreateMarker = (avatar: Avatar, dispatch: ReturnType<typeof useAppDispatch>) => {
  // TODO: Deal. Memo to avoid refetching, but hook, can't be called several times in same render.
  //const icon = useMemo(() => AvatarIcon(type), [type]);
  return <Marker
    position={avatar.position}
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
