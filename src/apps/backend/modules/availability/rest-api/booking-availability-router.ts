import { ApplicationRouter } from '../../application';

import { BookingAvailabilityController } from './booking-availability-controller';

export default class BookingAvailabilityRouter extends ApplicationRouter {
  configure(): void {
    const { router } = this;
    const ctrl = new BookingAvailabilityController();

    // Vapi's server URL functionality is designed to use POST requests for communication between Vapi and server.
    router.post('/', ctrl.getAvailableBookingSlots);
  }
}
