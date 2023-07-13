import { FlightInfo, IAgency } from '../models';

export class QatarAgency implements IAgency {
  getUrl(flightInfo: FlightInfo) {
    return `https://www.qatarairways.com/app/booking/flight-selection?widget=QR&searchType=F&addTaxToFare=Y&minPurTime=0&upsellCallId=&allowRedemption=Y&flexibleDate=off&bookingClass=${
      flightInfo.economy ? 'E' : 'B'
    }&tripType=${flightInfo.twoWay ? 'T' : 'O'}&selLang=en&fromStation=${
      flightInfo.fromAirportCode
    }&from=${flightInfo.from}&toStation=${flightInfo.toAirportCode}&to${
      flightInfo.to
    }&departingHidden=15%20Jul%202023&departing=${flightInfo.date}&adults=${
      flightInfo.adults
    }&children=0&infants=0&teenager=0&ofw=0&promoCode=`;
  }
}
