import Avatar from "./avatars/Avatar";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import locations from "../utils/locations";

const Map = (props: { avatars: Avatar[]; selectAvatar: Function }) => {
  const { avatars, selectAvatar } = props;

  const avatarEventHandler = (name: string) => ({
    click: () => selectAvatar(name),
  });

  const markers = avatars.map((avatar: Avatar) => (
    <Marker
      position={avatar.position}
      icon={avatar.icon}
      draggable
      autoPan
      eventHandlers={avatarEventHandler(avatar.name)}
    ></Marker>
  ));

  return (
    <MapContainer
      center={locations.azrieli}
      zoom={3}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: "100%", width: "100%" }} // Required to work.
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers}
    </MapContainer>
  );
};

export default Map;
