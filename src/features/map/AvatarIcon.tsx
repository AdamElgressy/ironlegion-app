import { Icon } from 'leaflet';
import { getImage } from '../avatars/avatarImages';

const AvatarIcon = (type: string) => new Icon({
  iconUrl: getImage(type),
  iconSize: [50, 50],
  iconAnchor: [25,25],
});

export default AvatarIcon;
