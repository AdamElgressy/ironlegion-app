import { Position } from '../../utils/geo/types';
import { MissionResolution, MissionStatus } from './common';

export interface PastMission {
  uuid: string,
  startPosition: Position,
  endPosition: Position,
  distance: number,
  resolution: MissionResolution, 
};

export interface CurrentMission {
  uuid: string,
  startPosition: Position,
  status: MissionStatus,
}

export interface Avatar {
  uuid: string;
  type: string;
  name: string;
  currentPosition: Position;
  futureMissions: string[];
  pastMissions: PastMission[];
  currentMission: CurrentMission | null;
}
