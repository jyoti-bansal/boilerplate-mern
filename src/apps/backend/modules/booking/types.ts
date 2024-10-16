export class PhoneNumber {
  countryCode: string;
  phoneNumber: string;

  constructor(countryCode: string, phoneNumber: string) {
    this.countryCode = countryCode;
    this.phoneNumber = phoneNumber;
  }
}
interface CreateBookingRequestParams {
  address: Address;
  schedule: ScheduleTime;
  firstName: string;
  lastName: string;
  phoneNumber: PhoneNumber;
}

interface ToolCall {
  id: string;
  function: {
    arguments: CreateBookingRequestParams;
    name: string;
  };
}

export interface BookingCustomRequestBody {
  message: {
    toolCalls: ToolCall[];
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

export class Booking {
  address: Address;
  firstName: string;
  lastName?: string;
  phoneNumber: PhoneNumber;
  schedule: ScheduleTime;
}
