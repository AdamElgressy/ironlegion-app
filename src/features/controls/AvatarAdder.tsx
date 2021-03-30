import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { v4 as uuidv4 } from 'uuid';
import { addAvatar } from '../avatars/avatarsSlice';


const AvatarAdder = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addAvatar({
      uuid: uuidv4(),
      name: 'New Avatar',
      type: "THOR",
      position: { lat: 50, lng: 50}
    }));
  };

  return (
    <>
      <button onClick={handleClick}>Add Avatar</button>
    </>
  );
};


export default AvatarAdder;
