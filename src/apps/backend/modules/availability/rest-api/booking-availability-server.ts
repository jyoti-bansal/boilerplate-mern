import { ApplicationServer } from '../../application';

import BookingAvailabilityRouter from './booking-availability-router';

export default class BookingAvailabilityServer extends ApplicationServer {
  configure(): void {
    const { server } = this;
    const router = new BookingAvailabilityRouter();

    server.use('/availabilities', router.router);
  }
}
