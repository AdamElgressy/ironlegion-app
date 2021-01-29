import { LatLngTuple, Icon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import locations from "../utils/locations";

const Map = (props: { avatars: { position: LatLngTuple; icon: Icon }[] }) => {
  const { avatars } = props;

  const markers = avatars.map(
    (avatar: { position: LatLngTuple; icon: Icon }) => (
      <Marker position={avatar.position} icon={avatar.icon} draggable>
        <Popup>
          Run, <br /> Adam!
        </Popup>
      </Marker>
    )
  );

  return (
    <MapContainer
      center={locations.azrieli}
      zoom={3}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: "100%", width: "100%" }}
    >
      <ZoomControl position="bottomright"></ZoomControl>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers}
    </MapContainer>
  );
};

export default Map;
