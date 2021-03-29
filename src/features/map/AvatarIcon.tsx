import { Icon } from 'leaflet';
import IronManImg from '../../assets/iron_man.png';
import ThorImg from '../../assets/thor.png';
import UnknownImg from '../../assets/adam.png';

const avatarImages: { [key: string]: string } = {
  IRON_MAN: IronManImg,
  THOR: ThorImg,
};

const getImage = (type: string): string => avatarImages[type] ?? UnknownImg;

const AvatarIcon = (type: string) => new Icon({
  iconUrl: getImage(type),
  iconSize: [50, 50],
  iconAnchor: [0,25],
});

export default AvatarIcon;
