import { readFileSync } from 'fs';
import { join as joinPaths } from 'path';

const airports: string[] = readFileSync(
  joinPaths(import.meta.dir, 'airports.txt'),
  'utf8'
)
  .toLowerCase()
  .split('\n');

export const getAirportCode = (cityName: string) => {
  const entry = airports.find(airport =>
    airport.includes(cityName.toLowerCase())
  );

  if (entry) {
    /// find the code from inside the paranthesis
    const code = entry.match(/\(([^)]+)\)/)?.[1];

    return code?.toUpperCase() ?? null;
  }

  return null;
};
