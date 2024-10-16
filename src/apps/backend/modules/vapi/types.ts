import { Address, PhoneNumber, ScheduleTime } from '../booking/types';

export interface BookingAvailabilityCustomRequestBody {
  message: {
    toolCalls: ToolCall<VapiBookingSlotParams>[];
  };
}

export interface ToolCall<T> {
  id: string;
  function: {
    arguments: T;
    name: string;
  };
}

export interface VapiBookingSlotParams {
  showForDays?: number;
  startDate?: Date;
}

export interface VapiBookingRequestParams {
  address: Address;
  firstName: string;
  lastName?: string;
  phoneNumber: PhoneNumber;
  schedule: ScheduleTime;
}

export interface VapiBookingCustomRequestBody {
  message: {
    toolCalls: ToolCall<VapiBookingRequestParams>[];
  };
}
