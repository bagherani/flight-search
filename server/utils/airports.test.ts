import { describe, expect, it } from 'bun:test';

import { getAirportCode } from './airports';

describe('getAirportCode', () => {
  it('should return the airport code for a city', () => {
    expect(getAirportCode('New York')).toBe('NYC');

    // lower case
    expect(getAirportCode('rome')).toBe('ROM');

    // upper case
    expect(getAirportCode('AMSTERDAM')).toBe('AMS');

    expect(getAirportCode('nowhere')).toBe(null);
  });
});
