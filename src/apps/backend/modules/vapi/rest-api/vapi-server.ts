import { ApplicationServer } from '../../application';

import VapiRouter from './vapi-router';

export default class VapiServer extends ApplicationServer {
  configure(): void {
    const { server } = this;
    const router = new VapiRouter();

    server.use('/vapi', router.router);
  }
}
