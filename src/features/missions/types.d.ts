import { Position } from "../../utils/geo/types";

export interface Mission {
  uuid: string;
  name: string;
  endPosition: Position;
}
