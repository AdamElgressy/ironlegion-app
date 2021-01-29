import { Icon, LatLngTuple } from "leaflet";

interface some {
  icon: Icon;
  position: LatLngTuple;
}

interface Avatar {
  name: string;
  img: string;
  avatar: some;
}

export default Avatar;
