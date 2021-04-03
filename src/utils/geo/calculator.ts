import {
  getDistance,
  getRhumbLineBearing,
  computeDestinationPoint
} from  'geolib';
import { GeolibInputCoordinates } from 'geolib/es/types';
import { Position } from "./types"


const getGeoLibCoordinates = (position: Position): GeolibInputCoordinates => {
  return { latitude: position.lat, longitude: position.lng };
}


/** Get's the new position after moving the desired distance in the direction of the end position. 
 * 
 * @param distance in meters
*/
export const calculateNewPosition = (current: Position, end: Position, distance: number): Position => {
  const currentGeoLibCoordinates = getGeoLibCoordinates(current);
  const endGeoLibCoordinates = getGeoLibCoordinates(end);

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


export const calculateDistance = (current: Position, end: Position): number => {
  const currentGeoLibCoordinates = getGeoLibCoordinates(current);
  const endGeoLibCoordinates = getGeoLibCoordinates(end);
  return getDistance(currentGeoLibCoordinates, endGeoLibCoordinates);
};
