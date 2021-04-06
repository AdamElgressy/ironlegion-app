import ironManImg from '../../assets/iron_man.png';
import thorImg from '../../assets/thor.png';
import grootImg from '../../assets/groot.png';
import captainAmericaImg from '../../assets/captain_america.png'
import spidermanImg from '../../assets/spiderman.png';
import hulkImg from '../../assets/hulk.png';
import unknownImg from '../../assets/thanos.png';
import thorClickedImg from '../../assets/thor_clicked.png';
import captainAmericaClickedImg from '../../assets/captain_america_clicked.png';
import ironManClickedImg from '../../assets/iron_man_clicked.png';
import spidermanClickedImg from '../../assets/spiderman_clicked.png';
import hulkClickedImg from '../../assets/hulk_clicked.png';
import grootClickedImg from '../../assets/groot_clicked.png';

export const avatarImages: { [key: string]: string } = {
  IRON_MAN: ironManImg,
  THOR: thorImg,
  GROOT: grootImg,
  CPATAIN_AMERICA: captainAmericaImg,
  HULK: hulkImg,
  SPIDERMAN: spidermanImg,
};

export const clickedAvatarImages: { [key: string]: string } = {
  IRON_MAN: ironManClickedImg,
  THOR: thorClickedImg,
  GROOT: grootClickedImg,
  CPATAIN_AMERICA: captainAmericaClickedImg,
  HULK: hulkClickedImg,
  SPIDERMAN: spidermanClickedImg,
}

export const getImage = (type: string): string => avatarImages[type] ?? unknownImg;

export const getClickedImage = (type: string): string => clickedAvatarImages[type] ?? unknownImg;

