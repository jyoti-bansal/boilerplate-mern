import { ToolCall } from '../common-types/common';

export class PhoneNumber {
  countryCode: string;
  phoneNumber: string;

  constructor(countryCode: string, phoneNumber: string) {
    this.countryCode = countryCode;
    this.phoneNumber = phoneNumber;
  }
}

export interface CreateBookingRequestParams {
  address: Address;
  firstName: string;
  lastName?: string;
  phoneNumber: PhoneNumber;
  schedule: ScheduleTime;
}

export interface BookingCustomRequestBody {
  message: {
    toolCalls: ToolCall<CreateBookingRequestParams>[];
  };
}

export class Address {
  city: string;
  country: string;
  state: string;
  street: string;
  zip: string;
}

export class ScheduleTime {
  endTime: string;
  startTime: string;
}
