export interface PhoneNumber {
  countryCode: string;
  phoneNumber: string;
}

export interface CreateBookingRequestParams {
  address: Address;
  firstName: string;
  lastName?: string;
  phoneNumber: PhoneNumber;
  schedule: ScheduleTime;
}

export interface Address {
  city: string;
  country: string;
  state: string;
  street: string;
  zip: string;
}

export interface ScheduleTime {
  endTime: string;
  startTime: string;
}

export interface Booking {
  bookingNumber: string;
  schedule: ScheduleTime;
}

export interface AvailableBookingSlot {
  endTime: Date;
  startTime: Date;
}

export interface AvailableBookingSlotParams {
  showForDays?: number;
  startDate?: Date;
}
