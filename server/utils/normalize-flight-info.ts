import { FlightInfo } from '../models';
import { getAirportCode } from './airports';

export const normalizeFlightInfo = (flightInfo: FlightInfo): FlightInfo => {
  return Object.assign({}, flightInfo, {
    fromAirportCode: getAirportCode(flightInfo.from),
    toAirportCode: getAirportCode(flightInfo.to),
    agencyName: (flightInfo.agencyName || 'KLM').toUpperCase().split(' ')[0]
  });
};
