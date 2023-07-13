import { IAgency } from '../models';
import { KLMAgency } from './klm';
import { QatarAgency } from './qatar';
import { AirFranceAgency } from './airfrance';

export type Agencies = { [key: string | 'default']: IAgency };

export const agencies: Agencies = {
  default: new KLMAgency(),
  KLM: new KLMAgency(),
  QATAR: new QatarAgency(),
  AIRFRANCE: new AirFranceAgency()
};
