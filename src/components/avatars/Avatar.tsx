import { Icon, LatLngTuple } from "leaflet";
interface mission {}

interface Avatar {
  name: string;
  img: string;
  icon: Icon;
  position: LatLngTuple;
  missions: mission[];
}

export default Avatar;
