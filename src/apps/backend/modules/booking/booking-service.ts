import { Booking, CreateBookingRequestParams } from './types';

export default class BookingService {
  static async createBooking({
    firstName,
    phoneNumber,
    address,
    schedule,
  }: CreateBookingRequestParams): Promise<Booking> {
    if (!firstName || !phoneNumber || !address) {
      throw new Error('Customer details are required');
    }

    // Mock booking logic, which can later be replaced with actual logic
    const bookingDetails = {
      schedule,
    };

    return Promise.resolve(bookingDetails);
  }
}
