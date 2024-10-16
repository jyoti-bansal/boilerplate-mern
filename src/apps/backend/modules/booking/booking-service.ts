import crypto from 'crypto';

import { Booking, CreateBookingRequestParams } from './types';

export default class BookingService {
  static async createBooking({
    firstName,
    phoneNumber,
    address,
    schedule,
  }: CreateBookingRequestParams): Promise<Booking> {
    if (!firstName || !phoneNumber || !address) {
      throw new Error(
        'Booking failed: Please provide your name, phone number, and address.',
      );
    }

    const bookingNumber = crypto.randomBytes(8).toString('hex');

    // Mock booking logic, which can later be replaced with actual logic
    const bookingDetails = {
      schedule,
      bookingNumber,
    };

    return Promise.resolve(bookingDetails);
  }
}
