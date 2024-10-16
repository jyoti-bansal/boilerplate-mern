export interface AvailableBookingSlot {
  endTime: Date;
  startTime: Date;
}

export interface AvailableBookingSlotParams {
  showForDays?: number;
  startDate?: Date;
}
