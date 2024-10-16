import { DateUtils } from '../util/date-utils';

import { mockBookingAvailabilityData } from './booking-availability-mockdata';
import { AvailableBookingSlot, AvailableBookingSlotParams } from './types';

export default class BookingAvailabilityService {
  static async getAvailableBookingSlots(
    params: AvailableBookingSlotParams,
  ): Promise<AvailableBookingSlot[]> {
    const startMoment = DateUtils.parseDate(params.startDate);
    const days = params.showForDays || 7;
    return Promise.resolve(mockBookingAvailabilityData(startMoment, days));
  }
}
