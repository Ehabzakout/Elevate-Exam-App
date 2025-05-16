type SuccessfullResponse<T> = {
  message: "success";
} & T;

type ErrorResponse<T> = {
  message: string;
} & T;

export type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse<T>;
