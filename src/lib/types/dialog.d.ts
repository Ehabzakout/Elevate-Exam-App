import { Dispatch, SetStateAction } from "react";

export type TAlertDialog = {
  action: () => void;
  children: React.ReactNode;
  accept: string;
  title: string;
  description: string;
  error?: string | null;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export type TExamDialog = Omit<TAlertDialog, "description" | "action"> & {
  description: string[];
  id: string;
  duration: number;
};
