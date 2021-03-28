import {
  getDistance,
  getRhumbLineBearing,
  computeDestinationPoint
} from  'geolib';
import { Position } from "./types"


/** Get's the new position after moving the desired distance in the direction of the end position. 
 * 
 * @param distance in meters
*/
export const calculateNewPosition = (current: Position, end: Position, distance: number): Position => {
  const currentGeoLibCoordinates = { latitude: current.lat, longitude: current.lng };
  const endGeoLibCoordinates = { latitude: end.lat, longitude: end.lng };

  if (getDistance(currentGeoLibCoordinates, endGeoLibCoordinates) <= distance) {
    return end;
  }
  
  const bearing = getRhumbLineBearing(currentGeoLibCoordinates, endGeoLibCoordinates);
  const newPosition = computeDestinationPoint(currentGeoLibCoordinates, distance, bearing);
  return {
    lat: newPosition.latitude,
    lng: newPosition.longitude,
  };
};
  