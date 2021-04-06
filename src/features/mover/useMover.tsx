import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { Position } from '../../utils/geo/types';
import { calculateNewPosition } from '../../utils/geo/calculator';
import { moveThunk } from './moverSlicer';
import { Avatar } from '../avatars/types';
import { MissionStatus } from '../avatars/common';


const useMover = (speed: number, refreshRate: number) => {
  const dispatch = useAppDispatch();
  const avatars = useAppSelector(state => state.avatars);
  const missions = useAppSelector(state => state.missions);
  const timeStamp = useAppSelector(state => state.mover.timeStamp);


  const getNewPositions = (avatars: {[key: string]: Avatar}) => {
    const newPositions: {[key: string]: Position} = {};
    const distance = (Date.now() - timeStamp)*speed;
  
    Object.keys(avatars).forEach((uuid) => {
      const avatar = avatars[uuid];
      const currentMissionUuid = avatar.currentMission?.uuid;
      if (!currentMissionUuid) return;
      if (avatar.currentMission?.status === MissionStatus.PAUSED) return;

      const currentMission = missions[currentMissionUuid];
      const endPosition = currentMission.endPosition;
      const newPosition = calculateNewPosition(avatar.currentPosition, endPosition, distance);
    
      if (newPosition === avatar.currentPosition) return;
      newPositions[uuid] = newPosition;
    });
    return newPositions;
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions = getNewPositions(avatars);
      dispatch(moveThunk(newPositions));
    }, refreshRate);
    return () => clearInterval(interval);
  });
}

export default useMover;
