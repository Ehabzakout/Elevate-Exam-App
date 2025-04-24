type successfullResponse<T> = {
  message: "success";
} & T;

type errorResponse<T> = {
  message: string;
} & T;

export type APIResponse<T> = successfullResponse<T> | errorResponse<T>;
