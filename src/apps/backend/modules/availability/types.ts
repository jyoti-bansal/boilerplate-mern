interface GetBookingAvailabilityRequestParams {
  showForDays: number;
  startDate: Date;
}

interface ToolCall {
  id: string;
  function: {
    arguments: GetBookingAvailabilityRequestParams;
    name: string;
  };
}

export interface BookingAvailabilityCustomRequestBody {
  message: {
    toolCalls: ToolCall[];
  };
}

export interface AvailableBookingSlot {
  start_time: string;
  end_time: string;
}

export interface AvailableBookingSlotParams {
  startDate?: Date;
  showForDays?: number;
}
