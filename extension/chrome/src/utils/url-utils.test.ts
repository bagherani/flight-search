import {
  getAgencyNameFromHostAddress,
  isInSupportedAgencies
} from './url-utils';

test('getAgencyNameFromHostAddress', () => {
  let response = getAgencyNameFromHostAddress('https://www.google.com');

  expect(response).toBe('KLM'); // default

  response = getAgencyNameFromHostAddress('');
  expect(response).toBe('KLM'); // default

  response = getAgencyNameFromHostAddress('https://www.klm.nl/somepage');
  expect(response).toBe('KLM');

  response = getAgencyNameFromHostAddress('https://www.klm.com/en/somepage');
  expect(response).toBe('KLM');

  response = getAgencyNameFromHostAddress('https://www.qatarairways.com/');
  expect(response).toBe('QATAR');

  response = getAgencyNameFromHostAddress('http://qatarairways.com/');
  expect(response).toBe('QATAR');

  response = getAgencyNameFromHostAddress('http://qatarairways.nl/');
  expect(response).toBe('QATAR');

  response = getAgencyNameFromHostAddress('http://airfrance.nl/');
  expect(response).toBe('AIRFRANCE');
});

test('isInSupportedAgencies', () => {
  let response = isInSupportedAgencies('https://www.google.com');

  expect(response).toBe(false);

  response = isInSupportedAgencies('');
  expect(response).toBe(false);

  response = isInSupportedAgencies('https://www.klm.nl/somepage');
  expect(response).toBe(true);

  response = isInSupportedAgencies('https://www.klm.com/en/somepage');
  expect(response).toBe(true);

  response = isInSupportedAgencies('https://www.qatarairways.com/');
  expect(response).toBe(true);

  response = isInSupportedAgencies('http://qatarairways.com/');
  expect(response).toBe(true);

  response = isInSupportedAgencies('http://qatarairways.nl/');
  expect(response).toBe(true);

  response = isInSupportedAgencies('http://airfrance.nl/');
  expect(response).toBe(true);
});
