import { Configuration, OpenAIApi } from 'openai';
import { resolve } from 'path';
import { readFileSync } from 'fs';

import { isDev } from '../utils/environment';
import { mockAiResponse } from '../mocks/mock-ai-response';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const COMMAND_FOR_TRAINING = readFileSync(
  resolve(import.meta.dir, 'training-model.txt'),
  'utf8'
);

/**
 *
 * @throws
 */
export async function extractFlightQuery(userCommand: string) {
  if (isDev) {
    return Promise.resolve({
      data: { object: JSON.stringify(mockAiResponse) }
    });
  }

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${COMMAND_FOR_TRAINING}${userCommand}`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.2,
    presence_penalty: 0.0,
    stop: ['\n']
  });

  return response;
}
