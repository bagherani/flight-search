import { FlightInfo, IAgency } from '../models';

export class AirFranceAgency implements IAgency {
  getUrl(flightInfo: FlightInfo) {
    return `https://wwws.airfrance.com/search/offers?activeConnection=0&bookingFlow=LEISURE&cabinClass=${
      flightInfo.economy ? 'ECONOMY' : 'BUSINESS'
    }&pax=${flightInfo.adults}:0:0:0:0:0:0:0&connections=${
      flightInfo.fromAirportCode
    }:A:${flightInfo.date}%3E${flightInfo.toAirportCode}:C`;
  }
}
