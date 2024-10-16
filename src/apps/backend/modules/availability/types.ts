interface GetAvailabilityRequestParams {
  showForDays: number;
  startDate: Date;
}

interface ToolCall {
  id: string;
  function: {
    arguments: GetAvailabilityRequestParams;
    name: string;
  };
}

export interface AvailabilityCustomRequestBody {
  message: {
    toolCalls: ToolCall[];
  };
}

export interface TimeSlot {
  start_time: string;
  end_time: string;
}

export interface Availability {
  booking_windows: TimeSlot[];
}

export interface AvailabilityParams {
  startDate?: Date;
  showForDays?: number;
}
