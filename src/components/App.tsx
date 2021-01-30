import styled from "@emotion/styled";
import { LatLngTuple, Icon } from "leaflet";
import { useState } from "react";
import HeroAdder from "./controls/HeroAdder";
import Map from "./Map";

const App = () => {
  const [avatars, setAvatars] = useState<
    { position: LatLngTuple; icon: Icon }[]
  >([]);

  return (
    <Wrapper>
      <MapContainer>
        <Map avatars={avatars} />
      </MapContainer>
      <HeroAdderContainer>
        <HeroAdder
          addHero={(hero: { position: LatLngTuple; icon: Icon }) =>
            setAvatars([...avatars, hero])
          }
        />
      </HeroAdderContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
`;

const HeroAdderContainer = styled.div`
  z-index: 2;
  margin: 10px;
  position: absolute;
`;

export default App;
