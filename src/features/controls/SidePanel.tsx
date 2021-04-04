import React from 'react';
import styled from '@emotion/styled';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Drawer } from '@material-ui/core';
import { closeMissionAdder, openMissionAdder } from './controlsSlice';
import MissionAdder from './MissionAdder';
import { Avatar, PastMission } from '../avatars/types';
import PastMissions from '../missions/PastMissions';


const Container = styled.div`
  height: 100vh;
  width: 20vw;
`;


const getDistanceTraveled = (avatar: Avatar): number => 
  avatar.pastMissions.reduce((totalDistance: number, pastMission: PastMission): number =>  
    totalDistance + pastMission.distance, 0
  );


const SidePanel = () => {
  const dispatch = useAppDispatch();
  const selectedAvatarUuid = useAppSelector(state => state.controls.selectedAvatar);
  const avatars = useAppSelector(state => state.avatars);
  const avatar = selectedAvatarUuid ? avatars[selectedAvatarUuid] : null;
  const open = selectedAvatarUuid ? true: false;

  const distance = avatar ? getDistanceTraveled(avatar) : 0;
  const name = avatar ? avatar.name : 'No avatar selected';
  const pastMissions = () => {
    if (!avatar) {
      return;
    }
    return <PastMissions avatar={avatar} />;
  };

  return (
    <Drawer open={open} variant={'persistent'} anchor={'left'}>
      <Container>
        <div>{name}</div>
        <div>Distance traveled: {distance/1000} km </div>
        <button onClick={() => dispatch(openMissionAdder())}>Show Mission Adder</button>
        <br/>
        <button onClick={() => dispatch(closeMissionAdder())}>Close Mission Adder</button>
        <br/>
        <br/>
        <br/>
        <MissionAdder />
        <br/>
        <br/>
        <br/>
        {pastMissions()}
      </Container>
    </Drawer>
  );
};

export default SidePanel;
