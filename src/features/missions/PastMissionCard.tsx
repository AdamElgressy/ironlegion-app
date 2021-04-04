import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { PastMission } from '../avatars/types';
import { useAppDispatch } from '../../store/hooks';
import { selectMission, unSelectMission } from '../controls/controlsSlice';

const PastMissionCard = ({ mission }: {mission: PastMission}) => {
  const dispatch = useAppDispatch();

  return (
    <Card 
      style={{margin: '10px' }}
      onMouseOver={() => dispatch(selectMission({ uuid: mission.uuid }))}
      onMouseOut={() => dispatch(unSelectMission())}
    >
      <Typography>
        Start position: 
        <br/>
        Latitude: {mission.startPosition.lat}
        <br/>
        Longitude: {mission.startPosition.lng}
        <br/>
        <br/>
        End Position:
        <br/>
        Latitude: {mission.endPosition.lat}
        <br/>
        Longitude: {mission.endPosition.lng}
      </Typography>
      <br/>
      <Typography>
        Distance: {mission.distance/1000} km
      </Typography>
    </Card>
  );
};


export default PastMissionCard;
