import React from 'react';
import styled from '@emotion/styled';
import Map from './features/map/Map';
import BottomPanel from './features/controls/bottom-panel/BottomPanel';
import SidePanel from './features/controls/side-panel/SidePanel';

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

const BottomPanelContainer = styled.div`
  z-index: 2;
  margin: 10px;
  position: absolute;
`;


const App = () => {
  return ( 
    <Wrapper>
      <BottomPanelContainer>
        <BottomPanel />
      </BottomPanelContainer>
      
      <SidePanel />

      <MapContainer>
        <Map />
      </MapContainer>
    </Wrapper>
)};

export default App;
