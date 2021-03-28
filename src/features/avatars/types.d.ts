import { Mission, Position } from '../missions/types';
import { MissionResolution, MissionStatus } from './common';

export interface PastMission {
  uuid: string,
  resolution: MissionResolution, 
};

export interface CurrentMission {
  uuid: string,
  status: MissionStatus,
}

export interface Avatar {
  uuid: string;
  type: string;
  name: string;
  position: Position;
  futureMissions: string[];
  pastMissions: PastMission[];
  currentMission: CurrentMission | null;
}
