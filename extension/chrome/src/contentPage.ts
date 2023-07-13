import {
  generateFlightURL,
  getAgencyNameFromHostAddress
} from './utils/url-utils';
import { AiApi } from './services/ai-api';
import { FlightInfo } from './models';

chrome.runtime.onMessage.addListener(async message => {
  const response = await new AiApi().send(message);

  window.location.replace(generateFlightURL(response));
});

const buildUi = () => {
  const formContainer = document.createElement('form');
  formContainer.classList.add('flight-search-box');

  const input = document.createElement('input');
  input.classList.add('flight-search-box__input');
  input.placeholder =
    'Example: Flight from Amsterdam to Rome for tomorrow one adults one way by KLM';

  const toggleSearchFormButton = document.createElement('button');
  toggleSearchFormButton.type = 'button';
  toggleSearchFormButton.classList.add('flight-search-box__toggle');
  toggleSearchFormButton.addEventListener('click', () => {
    formContainer.classList.toggle('flight-search-box--active');
    toggleSearchFormButton.classList.toggle(
      'flight-search-box__toggle--active'
    );
    input.classList.toggle('flight-search-box__input--active');

    if (input.classList.contains('flight-search-box__input--active')) {
      input.focus();
    }
  });

  toggleSearchFormButton.innerHTML = `<img src="https://img.icons8.com/ios-filled/32/ffffff/keyboard.png" alt="type a command"/>
    <img src="https://img.icons8.com/ios-filled/32/ffffff/delete-sign.png" alt="close typing command"/>`;

  formContainer.append(toggleSearchFormButton);
  formContainer.append(input);

  document.body.append(formContainer);

  formContainer.addEventListener('submit', async (event: SubmitEvent) => {
    event.preventDefault();

    const userCommand = input.value;
    const response: FlightInfo = await new AiApi().send(userCommand);

    const flightInfo = {
      ...response,
      agencyName: getAgencyNameFromHostAddress(window.location.href)
    };

    window.location.replace(generateFlightURL(flightInfo));
  });
};

buildUi();
