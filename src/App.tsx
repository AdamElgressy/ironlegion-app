import React from 'react';
import styled from '@emotion/styled';
import Map from './features/map/Map';
import AvatarAdder from './features/controls/AvatarAdder';
// import ShowMissionButton from './features/controls/ShowMissionsButton';
import SidePanel from './features/controls/SidePanel';

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


const App = () => {
  return ( 
    <Wrapper>
      <AvatarAdderContainer>
        <AvatarAdder />
      </AvatarAdderContainer>
      
      {/* <ShowMissionContainer>
        <ShowMissionButton />
      </ShowMissionContainer> */}

      <SidePanel />

      <MapContainer>
        <Map />
      </MapContainer>
    </Wrapper>
)};

export default App;
