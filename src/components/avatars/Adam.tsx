import Avatar from "./Avatar";
import L from "leaflet";
import AdamImg from "../../images/adam.png";
import locations from "../../utils/locations";

const icon = new L.Icon({
  iconUrl: AdamImg,
  iconSize: new L.Point(50, 50),
});

const AdamAvatar: Avatar = {
  name: "Adam",
  img: AdamImg,
  icon,
  position: locations.abbottabad,
  missions: [],
};

export default AdamAvatar;
