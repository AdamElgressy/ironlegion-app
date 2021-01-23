import { useState } from "react";
import Welcome from "./Welcome";
import SidePanel from "./SidePanel";
import Map from "./Map";
import { LatLngTuple } from "leaflet";
import { Icon } from "leaflet";

const positions = {
  azrieli: [32.07, 34.79],
  oslo: [59.91, 10.75],
};

const App = () => {
  const [ready, setReady] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<Icon>();

  if (!ready) {
    return (
      <Welcome
        setReady={() => setReady(true)}
        setAvatar={(Avatar: Icon) => setAvatar(Avatar)}
      />
    );
  }
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <div style={{ width: "20px" }}>
        <SidePanel />
      </div>
      <Map pos={positions.azrieli} avatar={avatar} />
    </div>
  );
};

export default App;
