import React from 'react';
import styled from '@emotion/styled';
import Map from './features/map/Map';
import AvatarAdder from './features/controls/AvatarAdder';
// import ShowMissionButton from './features/controls/ShowMissionsButton';
import BottomPanel from './features/controls/BottomPanel';
import useMover from './features/mover/useMover';

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

const AvatarAdderContainer = styled.div`
  z-index: 2;
  margin: 10px;
  position: absolute;
`;

// const ShowMissionContainer = styled.div`
//   z-index: 2;
//   margin: 10px;
//   position: relative;
// `;


const refreshRate = 30; // ms
const speed = 1000; // km/s


const App = () => {
  useMover(speed, refreshRate);

  return ( 
    <Wrapper>
      <AvatarAdderContainer>
        <AvatarAdder />
      </AvatarAdderContainer>
      
      {/* <ShowMissionContainer>
        <ShowMissionButton />
      </ShowMissionContainer> */}

      <BottomPanel />

      <MapContainer>
        <Map />
      </MapContainer>
    </Wrapper>
)};

export default App;
