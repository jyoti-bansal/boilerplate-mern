import { DateUtils } from '../util/date-utils';

import { mockAvailabilityData } from './mockdata';
import { Availability, AvailabilityParams } from './types';

export default class AvailabilityService {
  static async getAvailability(
    params: AvailabilityParams,
  ): Promise<Availability> {
    const startMoment = DateUtils.parseDate(params.startDate);
    const days = params.showForDays || 7;
    return Promise.resolve(mockAvailabilityData(startMoment, days));
  }
}
