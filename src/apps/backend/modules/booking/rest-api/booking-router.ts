import { ApplicationRouter } from '../../application';

import { BookingController } from './booking-controller';

export default class BookingRouter extends ApplicationRouter {
  configure(): void {
    const { router } = this;
    const ctrl = new BookingController();
    router.post('/', ctrl.createBooking);
  }
}
