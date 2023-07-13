import { environment } from '../environments/environment';

export class AiApi {
  async send(command: string) {
    return await (
      await fetch(`${environment.apiEndpoint}/flight`, {
        method: 'post',
        body: command
      })
    ).json();
  }
}
