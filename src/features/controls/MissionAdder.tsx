import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addMissionThunk } from '../missions/missionsSlicer';
import { v4 as uuidv4 } from 'uuid';


const MissionAdder = () => {
  const dispatch = useAppDispatch();
  const selectedAvatarUuid = useAppSelector(state => state.controls.selectedAvatar);
  const newMissionPosition = useAppSelector(state => state.controls.newMissionPosition);

  const handleClick = () => {
    dispatch(addMissionThunk({
      uuid: uuidv4(),
      name: 'some mission name',
      endPosition: newMissionPosition,
    }, selectedAvatarUuid!));
  }

  return (
    <>
      <button onClick={handleClick}>Add Mission</button>
      <div>
        lat: {newMissionPosition.lat.toFixed(2)}
        <br/>
        lng: {newMissionPosition.lng.toFixed(2)}
      </div>
    </>
  );
};

export default MissionAdder;
