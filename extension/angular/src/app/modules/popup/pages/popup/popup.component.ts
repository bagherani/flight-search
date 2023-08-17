import { Component, Inject } from '@angular/core';

import { TAB_ID } from '../../../../providers/tab-id.provider';

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss']
})
export class PopupComponent {
  userCommand = '';

  constructor(@Inject(TAB_ID) readonly tabId: number) {}

  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    chrome.tabs.sendMessage(this.tabId, this.userCommand);
  }

  handleVoiceCommand() {
    chrome.permissions.request(
      {
        permissions: ['audioCapture']
      },
      (granted: boolean) => {
        if (granted) {
          recognition.start(); // Start speech recognition
          console.log('Microphone permission granted');
          // Call the code that starts using the microphone here
        } else {
          console.log('Microphone permission denied');
        }
      }
    );
  }
}

const recognition = new SpeechRecognition();
recognition.continuous = true; // Set to true for continuous speech recognition
recognition.lang = 'en-US'; // Set the language for speech recognition

recognition.onresult = (event: any) => {
  const transcript = event.results[event.results.length - 1][0].transcript;
  console.log(`You said: ${transcript}`);
};

recognition.onerror = (event: any) => {
  console.error(`Speech recognition error: ${event.error}`);
};

recognition.onend = () => {
  console.log('Speech recognition ended');
};
