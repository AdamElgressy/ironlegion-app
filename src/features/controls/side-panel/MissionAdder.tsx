import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addMissionThunk } from '../../missions/missionsSlicer';
import { v4 as uuidv4 } from 'uuid';
import FreeMarkerPosition from '../FreeMarkerPosition';


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
      <FreeMarkerPosition />
      <button onClick={handleClick}>Add Mission</button>
    </>
  );
};

export default MissionAdder;
