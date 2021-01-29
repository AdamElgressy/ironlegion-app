import Avatar from "./Avatar";
import L from "leaflet";
import ThorImg from "../../img/thor.png";
import locations from "../../utils/locations";

const icon = new L.Icon({
  iconUrl: ThorImg,
  iconSize: new L.Point(60, 60),
});

const ThorAvatar: Avatar = {
  name: "Thor",
  img: ThorImg,
  avatar: {
    icon,
    position: locations.oslo,
  },
};

export default ThorAvatar;
