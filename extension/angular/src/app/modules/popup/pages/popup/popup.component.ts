import { Component, Inject } from "@angular/core";
import { TAB_ID } from "../../../../providers/tab-id.provider";
import { AiApi } from "src/app/services/ai-api";

@Component({
  selector: "app-popup",
  templateUrl: "popup.component.html",
  styleUrls: ["popup.component.scss"],
})
export class PopupComponent {
  userCommand: string = "";

  constructor(@Inject(TAB_ID) readonly tabId: number, private aiApi: AiApi) {}

  async handleSubmit() {
    const response = await this.aiApi.send(this.userCommand);
    chrome.tabs.sendMessage(this.tabId, response);
  }
}
