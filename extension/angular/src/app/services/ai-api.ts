import { environment } from "src/environments/environment";

export class AiApi {
  async send(command: string) {
    return await (await fetch(`${environment.apiEndpoint}`)).json();
  }
}
