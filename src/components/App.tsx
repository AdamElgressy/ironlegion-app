import { useState } from "react";
import SidePanel from "./controls/SidePanel";
import Map from "./Map";
import { LatLngTuple } from "leaflet";

const App = () => {
  const [avatars, setAvatars] = useState(Array);

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
        <Map mapStart={[32.07, 34.79]} avatars={avatars} />
      </div>
      <div
        style={{
          zIndex: 2,
          margin: "10px",
          position: "absolute",
        }}
      >
        <SidePanel addHero={(hero: any) => setAvatars([...avatars, hero])} />
      </div>
    </div>
  );
};

export default App;
