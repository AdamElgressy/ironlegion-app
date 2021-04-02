import IronManImg from '../../assets/iron_man.png';
import ThorImg from '../../assets/thor.png';
import UnknownImg from '../../assets/adam.png';

export const avatarImages: { [key: string]: string } = {
  IRON_MAN: IronManImg,
  THOR: ThorImg,
};

export const getImage = (type: string): string => avatarImages[type] ?? UnknownImg;
