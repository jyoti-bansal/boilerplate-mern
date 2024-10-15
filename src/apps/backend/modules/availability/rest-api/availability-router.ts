import { ApplicationRouter } from '../../application';

import { AvailabilityController } from './availability-controller';

export default class AvailabilityRouter extends ApplicationRouter {
  configure(): void {
    const { router } = this;
    const ctrl = new AvailabilityController();

    // Vapi's server URL functionality is designed to use POST requests for communication between Vapi and server.
    router.post('/', ctrl.getAvailability);
  }
}
