import { extractFlightQuery } from "./ai";
import { has as hasEntry, get as getEntry, set as setEntry } from "./store";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const requestBody = await req.text();

    if (hasEntry(requestBody)) {
      return Response.json(getEntry(requestBody));
    }

    const res = extractFlightQuery(requestBody);
    setEntry(requestBody, res);
    return Response.json(res);
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
