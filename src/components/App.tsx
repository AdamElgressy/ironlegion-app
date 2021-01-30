import styled from "@emotion/styled";
import { useState } from "react";
import HeroAdder from "./controls/HeroAdder";
import Map from "./Map";
import Avatar from "./avatars/Avatar";

import BottomPanel from "./controls/BottomPanel";

const App = () => {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [selectedAvatarName, setSelectedAvatarName] = useState<string>("");
  const [bottomPanelOpen, setBottomPanelOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <MapContainer>
        <Map
          avatars={avatars}
          selectAvatar={(name: string) => {
            setSelectedAvatarName(name);
            setBottomPanelOpen(true);
          }}
        />
      </MapContainer>

      <HeroAdderContainer>
        <HeroAdder addHero={(hero: Avatar) => setAvatars([...avatars, hero])} />
      </HeroAdderContainer>

      <BottomPanelContainer>
        <BottomPanel
          avatars={avatars}
          open={bottomPanelOpen}
          name={selectedAvatarName}
          close={() => setBottomPanelOpen(false)}
        />
      </BottomPanelContainer>
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

const BottomPanelContainer = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
`;

export default App;
