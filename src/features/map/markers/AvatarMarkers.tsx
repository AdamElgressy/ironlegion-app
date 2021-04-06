import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Marker, Tooltip } from 'react-leaflet';
import { Icon, Point } from 'leaflet';
import { Avatar } from '../../avatars/types';
import { selectAvatarAndCloseBottomPanel } from '../../controls/controlsSlice';
import { getClickedImage, getImage } from '../../avatars/avatarImages';


const avatarIcon = (type: string, clicked: boolean) => {
  const iconUrl = clicked ? getClickedImage(type) : getImage(type);
  return new Icon({
    iconUrl: iconUrl,
    iconSize: [50, 50],
    iconAnchor: [25,25],
  });
}


const avatarEventHandler = (avatar: Avatar, dispatch: ReturnType<typeof useAppDispatch>) => ({
  click: () => dispatch(selectAvatarAndCloseBottomPanel({ uuid: avatar.uuid })),
});


const AvatarMarkers = () => {
  const dispatch = useAppDispatch();
  const avatars = useAppSelector(state => state.avatars);
  const selectedAvatar = useAppSelector(state => state.controls.selectedAvatar);

  const tooltipOffset = new Point(0,-25);

  const createMarker = (avatar: Avatar, clicked: boolean) => {
    // TODO: Deal. Memo to avoid refetching, but hook, can't be called several times in same render.
    return <Marker
      position={avatar.currentPosition}
      icon={avatarIcon(avatar.type, clicked)}
      draggable={false}
      eventHandlers={avatarEventHandler(avatar, dispatch)}
      key={avatar.uuid}
    >
      <Tooltip offset={tooltipOffset} direction='top'>{avatar.name}</Tooltip>
    </Marker>
  };

  return (
    <>
      {Object.keys(avatars).map(uuid => {
        const clicked = selectedAvatar === uuid;
        return createMarker(avatars[uuid], clicked)
      })}
    </>
  );
}


export default AvatarMarkers;
