import { Component, Inject } from '@angular/core';
import { AiApi } from 'src/app/services/ai-api';

import { TAB_ID } from '../../../../providers/tab-id.provider';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss']
})
export class PopupComponent {
  userCommand = '';

  constructor(@Inject(TAB_ID) readonly tabId: number, private aiApi: AiApi) {}

  async handleSubmit() {
    const response = await this.aiApi.send(this.userCommand);
    chrome.tabs.sendMessage(this.tabId, response);
  }
}
