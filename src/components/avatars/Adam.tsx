import L from "leaflet";
import AdamImg from "../../img/adam.png";
import locations from "../../utils/locations";

const icon = new L.Icon({
  iconUrl: AdamImg,
  iconSize: new L.Point(50, 50),
});

const AdamAvatar = {
  name: "Adam",
  img: AdamImg,
  avatar: {
    icon,
    position: locations.abbottabad,
  },
};

export default AdamAvatar;
