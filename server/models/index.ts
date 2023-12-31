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
