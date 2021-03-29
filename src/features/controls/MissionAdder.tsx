import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addMissionThunk } from '../missions/missionsSlicer';
//import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';


// interface Inputs {
//   name: string,
//   lat: number,
//   lng: number,
// };

const MissionAdder = () => {
  const dispatch = useAppDispatch();
  const newMissionPosition = useAppSelector(state => state.controls.newMissionPosition);
  //const { register, handleSubmit } = useForm<Inputs>();

  const handleClick = () => {
    dispatch(addMissionThunk({
      uuid: uuidv4(),
      name: 'some mission name',
      endPosition: newMissionPosition,
    }, '101'));
  }


  return (
    <button onClick={handleClick}>Add Mission</button>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   Name:
    //   <input name={'name'} ref={register({ required: true })} />
    //   Goal:
    //   <input name='lat' ref={register({ required: true })} />
    //   <input name='lng' ref={register({ required: true })} />

    //   <input type='submit' name='Add Mision'/>
    // </form>
  );
};

export default MissionAdder;
