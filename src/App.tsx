import React from 'react';
import styled from '@emotion/styled';
import Map from './features/map/Map';
import MissionAdder from './features/controls/MissionAdder';
import AvatarAdder from './features/controls/AvatarAdder';
import useMover from './features/avatars/useMover';

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

const App = () => {
  useMover(Number(process.env.REACT_APP_MOVER_REFRESH_RATE));
  return ( 
    <>
      <MissionAdder />
      <AvatarAdder />
      <Wrapper>
        <MapContainer>
          <Map />
        </MapContainer>
      </Wrapper>
    </>
)};

export default App;
