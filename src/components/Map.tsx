import { LatLngTuple, Icon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";

const Map = (props: { mapStart: any; avatars: any }) => {
  const { mapStart, avatars } = props;

  const markers = avatars.map((avatar: any) => (
    <Marker position={avatar.position} icon={avatar.icon} draggable>
      <Popup>
        Run, <br /> Adam!
      </Popup>
    </Marker>
  ));

  return (
    <MapContainer
      center={mapStart}
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
