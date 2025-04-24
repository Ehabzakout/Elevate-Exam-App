export type TSubmitAction = {
  [key: string]: { apiUrl: string; method: string; action: () => void };
};
