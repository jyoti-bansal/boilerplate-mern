import { mockBookingAvailabilityData } from './internal/booking-availability-mockdata';
import { AvailableBookingSlot, AvailableBookingSlotParams } from './types';

export default class BookingAvailabilityService {
  static async getAvailableBookingSlots(
    params: AvailableBookingSlotParams,
  ): Promise<AvailableBookingSlot[]> {
    const days = params.showForDays || 7;
    return Promise.resolve(mockBookingAvailabilityData(days, params.startDate));
  }
}
