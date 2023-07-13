import { Component, Inject } from '@angular/core';

import { TAB_ID } from '../../../../providers/tab-id.provider';

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
}
