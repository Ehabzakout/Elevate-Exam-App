import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { TAddExam } from "../schema/add-exam-schema";
import { TExamQuestion } from "./question";

export type TExamQuestionProps = {
  questions: TExamQuestion[];
  duration: number;
  setStartQuiz: Dispatch<SetStateAction<boolean>>;
};

export type TTimer = {
  duration: number;
  setTimeOver: (value: boolean) => void;
};

export type TAddQuestionProps = {
  examId: string;
  subjectId: string;
};

export type TGetAllExams = {
  searchParam: string;
  admin?: boolean;
};

export type TSearchParams = {
  searchParams: { "search-exam": string };
};
export type TAddDiplomaDialog = {
  children: ReactNode;
  title: string;
  open: boolean;
  error?: string | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
  action: () => JSX.Element;
};

export type TAddExamFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
  onSubmit: SubmitHandler<TAddExam>;
  form: UseFormReturn<TAddExam>;
};

export type TAddQuestionForm = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
  addAnotherQuestion: () => void;
  onSubmit: SubmitHandler<TAddQuestion>;
  form: UseFormReturn<TAddQuestion>;
};

export type TSubjectParams = { params: { subject: string[] } };
