import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addMissionThunk } from '../../missions/missionsSlicer';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@material-ui/core';


const MissionAdder = () => {
  const dispatch = useAppDispatch();
  const selectedAvatarUuid = useAppSelector(state => state.controls.selectedAvatar);
  const freeMarkerPosition = useAppSelector(state => state.controls.freeMarkerPosition);

  const handleClick = () => {
    dispatch(addMissionThunk({
      uuid: uuidv4(),
      name: 'some mission name',
      endPosition: freeMarkerPosition,
    }, selectedAvatarUuid!));
  }

  return (
    <>
      {/* <FreeMarkerPosition /> */}
      <Button onClick={handleClick}>Add Mission</Button>
    </>
  );
};

export default MissionAdder;
