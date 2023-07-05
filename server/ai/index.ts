import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const COMMAND_FOR_TRAINING = `Try to convert this text to a json object with these properties:\n\n
Example:flight from Amsterdam to Rome for Jun 1st One-Way for 2 adults.\n\n
Output:\n\n
{from: "Amsterdam", to: "Rome", date: "01-06-2023", twoWay: false, adults: 2}\n\n`;

export async function extractFlightQuery(userCommand: string) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${COMMAND_FOR_TRAINING}${userCommand}`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.2,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  return response;
}
