import React from 'react';
import styled from '@emotion/styled';
import { useAppSelector } from '../../../store/hooks';
import { Drawer, Typography } from '@material-ui/core';
import MissionAdder from './MissionAdder';
import { Avatar, PastMission } from '../../avatars/types';
import PastMissions from '../../missions/PastMissions';
import AvatarImage from './AvatarImage';
import '../../../scrollbar.css'


const Container = styled.div`
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const AvatarContainer = styled.div`
  height: 20vw;
`;

const PastMissionsContainer = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

const getDistanceTraveled = (avatar: Avatar): number => 
  avatar.pastMissions.reduce((totalDistance: number, pastMission: PastMission): number =>  
    totalDistance + pastMission.distance, 0
  );


const SidePanel = () => {
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
  const type = avatar ? avatar.type : null;

  return (
    <Drawer open={open} variant={'persistent'} anchor={'left'}>
      <Container>
        <AvatarContainer>
            <AvatarImage type={type} />
        </AvatarContainer>
        <br/>
        <Typography>
          <strong>Name:</strong> {name}
        </Typography>
        <Typography>
          <strong>Distance traveled:</strong> {distance/1000} km
        </Typography>

        <MissionAdder />

        <hr style={{width: '100%'}}/> 
        <Typography>
          <strong>Past missions</strong>
        </Typography>
        <PastMissionsContainer id="scrollbar">
          {pastMissions()}
        </PastMissionsContainer>


      </Container>
    </Drawer>
  );
};

export default SidePanel;
