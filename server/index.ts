import { extractFlightQuery } from './ai';
import { has as hasEntry, get as getEntry, set as setEntry } from './store';

Bun.serve({
  port: process.env.PORT || 3010,
  async fetch(req) {
    const requestBody = await req.text();

    if (hasEntry(requestBody)) {
      return Response.json(getEntry(requestBody));
    }

    const res = extractFlightQuery(requestBody);
    setEntry(requestBody, res);

    return Response.json(res);
  }
});
