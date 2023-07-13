export type FlightInfo = {
  from: string;
  fromAirportCode?: string;
  to: string;
  toAirportCode?: string;
  date: string;
  adults: number;
  twoWay: boolean;
  agencyName: string;
  economy: boolean;
};

export interface IAgency {
  getUrl: (flightInfo: FlightInfo) => string;
}
