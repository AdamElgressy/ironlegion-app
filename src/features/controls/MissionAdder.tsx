import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addMissionThunk } from '../missions/missionsSlicer';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';


interface Inputs {
  name: string,
  lat: number,
  lng: number,
};

const MissionAdder = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    dispatch(addMissionThunk({
      uuid: uuidv4(),
      name: data.name,
      endPosition: { lat: data.lat, lng: data.lng }
    }, '101'));
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Name:
      <input name={'name'} ref={register({ required: true })} />
      Goal:
      <input name='lat' ref={register({ required: true })} />
      <input name='lng' ref={register({ required: true })} />

      <input type='submit' name='Add Mision'/>
    </form>
  );
};

export default MissionAdder;
