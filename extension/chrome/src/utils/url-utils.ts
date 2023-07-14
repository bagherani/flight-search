import { agencies } from '../agencies';
import { FlightInfo } from '../models';

const AIRWAYS = {
  'klm\\.(com|nl)': 'KLM',
  'qatarairways\\.(com|nl)': 'QATAR',
  'airfrance\\.(com|nl)': 'AIRFRANCE'
};

export const generateFlightURL = (flightInfo: FlightInfo) => {
  const agency =
    agencies[
      flightInfo.agencyName in agencies ? flightInfo.agencyName : 'default'
    ];

  return agency.getUrl(flightInfo);
};

export const isInSupportedAgencies = (url: string): boolean => {
  if (!url) {
    return false;
  }

  const hostAddress = new URL(url).hostname.toLowerCase();

  for (const key in AIRWAYS) {
    const regex = new RegExp(key, 'gmi');

    if (regex.test(hostAddress)) {
      return true;
    }
  }

  return false;
};

export const getAgencyNameFromHostAddress = (url: string): string => {
  if (!url) {
    return 'KLM'; // default
  }

  const hostAddress = new URL(url).hostname.toLowerCase();

  for (const [key, value] of Object.entries(AIRWAYS)) {
    const regex = new RegExp(key, 'gmi');

    if (regex.test(hostAddress)) {
      return value;
    }
  }

  return 'KLM'; // default
};
