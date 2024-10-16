import { CreateBookingRequestParams } from './types';

export default class BookingService {
  static async createBooking({
    firstName,
    phoneNumber,
    address,
    schedule,
  }: CreateBookingRequestParams) {
    if (!firstName || !phoneNumber || !address) {
      throw new Error('Customer details are required');
    }

    // Mock booking logic, which can later be replaced with actual logic
    const bookingDetails = {
      confirmationMessage: `Your booking has been confirmed for the time slot from ${schedule.startTime} to ${schedule.endTime}`,
    };

    return Promise.resolve(bookingDetails);
  }
}
