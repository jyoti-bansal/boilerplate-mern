export class ToolCallFunctionArguments {
  showForDays: string;
  startDate: string;
}

export class ToolCall {
  id: string;
  function: {
    arguments: ToolCallFunctionArguments;
    name: string;
  };
}

export class AvailabilityCustomRequestBody {
  message: {
    toolCalls: ToolCall[];
  };
}
