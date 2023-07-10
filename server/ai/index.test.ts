import { expect, test } from 'bun:test';

import { extractFlightQuery } from './index';
import { FlightInfo } from '../models';

test('should give a valid json for flights', async () => {
  const result = await extractFlightQuery(
    'flight from Tehran to Paris for September 8th for 1 adult and one way'
  );

  const flightInfo: FlightInfo = JSON.parse(result.data.object);
  expect(flightInfo.from).toBe('Tehran');
  expect(flightInfo.to).toBe('Paris');
  expect(flightInfo.date).toBe('2023-09-08');
  expect(flightInfo.adults).toBe(1);
  expect(flightInfo.twoWay).toBe(false);
});
