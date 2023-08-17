# AI Powered Flight Searching Tool
This extension adds a UI to the supported air carriers(right now only: KLM, AirFrance and QatarAirway) so you can type the flight you desire instead of filling a form.

![demo](https://raw.githubusercontent.com/bagherani/flight-search/main/assets/demo.gif)

# Technologies and Languages
- OpenAi API
- Browser Speech API
- Bun
- Angular
- Typescript
- Webpack

## How to Run the Server
- Make sure you have [Bun](https://bun.sh/) installed for running the server
- Clone the repository
- In the `server` directory make a `.env` file using the given `.env.example`
- Generate a `openai` api key [using this link](https://platform.openai.com/account/api-keys) and put it in the `.env` >  `OPENAI_API_KEY`
- Install the packages using `yarn install` or `npm install`
- Run the server using `yarn start` or `npm run start`

## How to Install the Extension in Google Chrome
Since this extension is not deployed on the google play, the only method to add it to the chrome browser is by adding it manually

- Open the `extension` directory in your terminal
- Install the packages using `yarn install` or `npm install`
- Run `yarn build` or `npm run build` to generate a `dist` folder
- Open `chrome://extensions` in your browser
- Press `Load unpacked` button
- Select the `dist` folder in the dialog

## Upcoming Updates
- More air carriers
