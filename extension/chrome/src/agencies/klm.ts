import { FlightInfo, IAgency } from '../models';

export class KLMAgency implements IAgency {
  getUrl(flightInfo: FlightInfo) {
    return `https://www.klm.nl/en/search/offers?activeConnection=0&bookingFlow=LEISURE&cabinClass=${
      flightInfo.economy ? 'ECONOMY' : 'BUSINESS'
    }&pax=${flightInfo.adults || 1}:0:0:0:0:0:0:0&connections=${
      flightInfo.fromAirportCode
    }:A:${flightInfo.date}%3E${flightInfo.toAirportCode}:A`;
  }
}
