import { LatLngTuple } from "leaflet";
import IronMan from "./avatars/IronMan";
import IronManImg from "../img/iron_man.png";
import Thor from "./avatars/Thor";
import ThorImg from "../img/thor.png";

const positions = {
  azrieli: [32.07, 34.79],
  oslo: [59.91, 10.75],
};

const Welcome = (props: any) => {
  const { setReady, setAvatar } = props;
  return (
    <div style={{ textAlign: "center", font: "30px Impact, sans-serif" }}>
      <h1>Choose your hero</h1>
      <img
        alt={"Iron Man"}
        src={IronManImg}
        style={{ width: "60px", height: "100px", cursor: "pointer" }}
        onClick={() => {
          setAvatar(IronMan);
          setReady();
        }}
      />
      <img
        alt={"Thor"}
        src={ThorImg}
        style={{ width: "100px", height: "100px", cursor: "pointer" }}
        onClick={() => {
          setAvatar(Thor);
          setReady();
        }}
      />
    </div>
  );
};

export default Welcome;
