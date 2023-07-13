import { describe, it, expect } from 'bun:test';

import { FlightInfo } from '../models';
import { normalizeFlightInfo } from './normalize-flight-info';

describe('normalizeFlightInfo', () => {
  it('should return the normalized flight info', () => {
    const flightInfo: FlightInfo = {
      from: 'New York',
      to: 'Rome',
      date: '2017-01-01',
      adults: 2,
      twoWay: true,
      agencyName: 'KLM',
      economy: true
    };

    const normalizedFlightInfo = normalizeFlightInfo(flightInfo);
    expect(normalizedFlightInfo.fromAirportCode).toBe('NYC');
    expect(normalizedFlightInfo.toAirportCode).toBe('ROM');
  });
});
