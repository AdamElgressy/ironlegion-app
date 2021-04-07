import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { PastMission } from '../avatars/types';
import { useAppDispatch } from '../../store/hooks';
import { selectMission, unSelectMission } from '../controls/controlsSlice';

const PastMissionCard = ({ mission }: {mission: PastMission}) => {
  const dispatch = useAppDispatch();

  return (
    <Card 
      style={{margin: '10px', backgroundColor: '#D0D0D0' }}
      onMouseOver={() => dispatch(selectMission({ uuid: mission.uuid }))}
      onMouseOut={() => dispatch(unSelectMission())}
    >
      <Typography>
        Latitude: {mission.endPosition.lat.toFixed(2)}
        <br/>
        Longitude: {mission.endPosition.lng.toFixed(2)}
      </Typography>
      <br/>
      <Typography>
        Distance: {(mission.distance/1000).toFixed(2)} km
      </Typography>
    </Card>
  );
};


export default PastMissionCard;
