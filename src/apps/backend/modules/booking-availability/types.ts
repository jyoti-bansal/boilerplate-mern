import { ToolCall } from '../common-types/common';

export interface AvailableBookingSlotParams {
  showForDays?: number;
  startDate?: Date;
}

export interface BookingAvailabilityCustomRequestBody {
  message: {
    toolCalls: ToolCall<AvailableBookingSlotParams>[];
  };
}

export interface AvailableBookingSlot {
  end_time: string;
  start_time: string;
}
