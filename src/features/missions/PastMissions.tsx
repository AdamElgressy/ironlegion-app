import React from 'react';
import { Avatar } from '../avatars/types';
import PastMissionCard from './PastMissionCard';

const PastMissions = ( { avatar }: { avatar:  Avatar} ) => {
  const pastMissions = avatar.pastMissions;
  return (
    <>
      {pastMissions.map((mission) => <PastMissionCard mission={mission} key={mission.uuid}/> )}
    </>
  );
};


export default PastMissions;
