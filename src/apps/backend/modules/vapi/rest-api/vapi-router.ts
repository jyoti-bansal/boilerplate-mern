import { ApplicationRouter } from '../../application';

import { VapiController } from './vapi-controller';

export default class VapiRouter extends ApplicationRouter {
  configure(): void {
    const { router } = this;
    const ctrl = new VapiController();

    // Vapi's server URL functionality is designed to use POST requests for communication between Vapi and server.
    router.post('/booking-available-slots', ctrl.getAvailableBookingSlots);

    router.post('/bookings', ctrl.createBooking);
  }
}
