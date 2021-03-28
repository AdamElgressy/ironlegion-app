import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { Position } from '../../utils/geo/types';
import { calculateNewPosition } from '../../utils/geo/calculator';
import { moveTunk } from './avatarsSlice';
import { Avatar } from './types';
import { MissionStatus } from './common';

const jumpSize = 5000;

const Mover = (refreshRate: number) => {
  const dispatch = useAppDispatch();
  const avatars = useAppSelector((state) => state.avatars);
  const missions = useAppSelector(state => state.missions);


  const getNewPositions = (avatars: {[key: string]: Avatar}) => {
    const newPositions: {[key: string]: Position} = {};
  
    Object.keys(avatars).forEach((uuid) => {
      const avatar = avatars[uuid];
      const currentMissionUuid = avatar.currentMission?.uuid;
      if (!currentMissionUuid) return;
      if (avatar.currentMission?.status === MissionStatus.PAUSED) return;

      const currentMission = missions[currentMissionUuid];
      const endPosition = currentMission.endPosition;
      const newPosition = calculateNewPosition(avatar.position, endPosition, jumpSize);
      if (newPosition === avatar.position) return;
      newPositions[uuid] = newPosition;
    });
    return newPositions;
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions = getNewPositions(avatars);
      if (Object.keys(newPositions).length === 0) return;
      dispatch(moveTunk(newPositions));
    }, refreshRate);
    return () => clearInterval(interval);
  });
}

export default Mover;
