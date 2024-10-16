import { DateUtils } from '../util/date-utils';

import { Availability, TimeSlot } from './types';

export const mockAvailabilityData = (
  startDate: Date,
  showForDays: number,
): Availability => {
  const bookingWindows: TimeSlot[] = [];

  for (let i = 0; i < showForDays; i += 1) {
    const date = DateUtils.addDays(startDate, i);
    const dateString = DateUtils.formatDate(date);

    const timeSlots = [
      {
        start_time: DateUtils.parseDate(`${dateString} 09:00 AM`).toISOString(),
        end_time: DateUtils.parseDate(`${dateString} 10:00 AM`).toISOString(),
      },
      {
        start_time: DateUtils.parseDate(`${dateString} 11:00 AM`).toISOString(),
        end_time: DateUtils.parseDate(`${dateString} 12:00 PM`).toISOString(),
      },
      {
        start_time: DateUtils.parseDate(`${dateString} 02:00 PM`).toISOString(),
        end_time: DateUtils.parseDate(`${dateString} 03:00 PM`).toISOString(),
      },
    ];

    bookingWindows.push(...timeSlots);
  }

  return {
    booking_windows: bookingWindows,
  };
};
