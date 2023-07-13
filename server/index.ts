import { extractFlightQuery } from './ai';
import { FlightInfo } from './models';
import {
  has as cacheHasEntry,
  get as cacheGetEntry,
  set as cacheSetEntry
} from './store';
import { normalizeFlightInfo } from './utils/normalize-flight-info';

const defaultHeaders = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

Bun.serve({
  port: process.env.PORT || 3010,
  async fetch(req) {
    if (req.url.endsWith('/flight') && req.method === 'POST') {
      const requestBody = await req.text();

      if (requestBody && cacheHasEntry(requestBody)) {
        return Response.json(cacheGetEntry(requestBody), defaultHeaders);
      }

      try {
        const extractedFlightQuery = await extractFlightQuery(requestBody);
        const flightInfo: FlightInfo = JSON.parse(
          extractedFlightQuery.data.object
        );

        const normalizedFlightInfo = normalizeFlightInfo(flightInfo);

        cacheSetEntry(requestBody, normalizedFlightInfo);

        return Response.json(normalizedFlightInfo, defaultHeaders);
      } catch (error) {
        return Response.error();
      }
    }

    return new Response('OK', defaultHeaders);
  }
});
