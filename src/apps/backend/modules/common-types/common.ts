export interface ToolCall<T> {
  id: string;
  function: {
    arguments: T;
    name: string;
  };
}
