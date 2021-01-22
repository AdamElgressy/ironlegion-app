import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Avatar from "./Avatar";

const Map = (props: { pos: LatLngTuple }) => {
  const { pos } = props;

  return (
    <MapContainer
      center={pos}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={pos} icon={Avatar}>
        <Popup>
          Run, <br /> Adam!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
