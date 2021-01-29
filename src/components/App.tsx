import { LatLngTuple, Icon } from "leaflet";
import { useState } from "react";
import SidePanel from "./controls/SidePanel";
import Map from "./Map";

const App = () => {
  const [avatars, setAvatars] = useState<
    { position: LatLngTuple; icon: Icon }[]
  >([]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Map avatars={avatars} />
      </div>
      <div
        style={{
          zIndex: 2,
          margin: "10px",
          position: "absolute",
        }}
      >
        <SidePanel
          addHero={(hero: { position: LatLngTuple; icon: Icon }) =>
            setAvatars([...avatars, hero])
          }
        />
      </div>
    </div>
  );
};

export default App;
