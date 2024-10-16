import { DateUtils } from '../../util/date-utils';
import { AvailableBookingSlot } from '../types';

export const mockBookingAvailabilityData = (
  showForDays: number,
  startDate: Date,
): AvailableBookingSlot[] => {
  const bookingWindows: AvailableBookingSlot[] = [];

  for (let i = 0; i < showForDays; i += 1) {
    const date = DateUtils.addDays(startDate, i);
    const dateString = DateUtils.formatDate(date);

    const timeSlots = [
      {
        startTime: DateUtils.parseDate(`${dateString} 09:00 AM`),
        endTime: DateUtils.parseDate(`${dateString} 10:00 AM`),
      },
      {
        startTime: DateUtils.parseDate(`${dateString} 11:00 AM`),
        endTime: DateUtils.parseDate(`${dateString} 12:00 PM`),
      },
      {
        startTime: DateUtils.parseDate(`${dateString} 02:00 PM`),
        endTime: DateUtils.parseDate(`${dateString} 03:00 PM`),
      },
    ];

    bookingWindows.push(...timeSlots);
  }

  return bookingWindows;
};
