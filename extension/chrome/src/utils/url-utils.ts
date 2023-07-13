import { agencies } from '../agencies';
import { FlightInfo } from '../models';

export const generateFlightURL = (flightInfo: FlightInfo) => {
  const agency =
    agencies[
      flightInfo.agencyName in agencies ? flightInfo.agencyName : 'default'
    ];

  return agency.getUrl(flightInfo);
};

export const getAgencyNameFromHostAddress = (url: string): string => {
  if (!url) {
    return 'KLM'; // default
  }

  const hostAddress = new URL(url).hostname.toLowerCase();

  const airways = {
    'klm\\.(com|nl)': 'KLM',
    'qatarairways\\.(com|nl)': 'QATAR',
    'airfrance\\.(com|nl)': 'AIRFRANCE'
  };

  for (const [key, value] of Object.entries(airways)) {
    const regex = new RegExp(key, 'gmi');

    if (regex.test(hostAddress)) {
      return value;
    }
  }

  return 'KLM'; // default
};
