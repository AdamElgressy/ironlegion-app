import Avatar from "./Avatar";
import L from "leaflet";
import IronManImg from "../../images/iron_man.png";
import locations from "../../utils/locations";

const icon = new L.Icon({
  iconUrl: IronManImg,
  iconSize: new L.Point(30, 50),
});

const IronManAvatar: Avatar = {
  name: "Iron Man",
  img: IronManImg,
  icon,
  position: locations.avengers,
  missions: [],
};

export default IronManAvatar;
