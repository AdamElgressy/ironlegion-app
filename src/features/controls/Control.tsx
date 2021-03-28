import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addAvatar } from "../avatars/avatarsSlice";


const Controls = () => {
  const dispatch = useAppDispatch();
  const addAvatarOnClick: any = () => {
    dispatch(addAvatar(
      {
        uuid: '102',
        name: 'Second',
        type: 'THOR',
        position: {
          lat: 40.00,
          lng: 15.00,
        }
      })
    )
  };

  return (
    <button onClick={() => addAvatarOnClick()}>Add Avatar</button>
  );
}

export default Controls;
