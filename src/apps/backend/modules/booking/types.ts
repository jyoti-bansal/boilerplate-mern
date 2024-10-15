export class ToolCallFunctionArguments {
  address: string;
  availability: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export class ToolCall {
  id: string;
  function: {
    arguments: ToolCallFunctionArguments;
    name: string;
  };
}

export class BookingCustomRequestBody {
  message: {
    toolCalls: ToolCall[];
  };
}

export class Booking {
  address: string;
  availability: string;
  firstName: string;
  phoneNumber: string;
}
