import { TAnswer } from "./question";

export type Exams = {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}[];

export type TExams = {
  message: string;
  metadata: { currentPage: number; numberOfPages: number; limit: number };
  exams: Exams;
};

export type TAddExamInputs = {
  name: "duration" | "title" | "numberOfQuestions";
  label: string;
  className?: string;
}[];

export type TSubmittedExam = {
  id: string;
  title: string;
  numberOfQuestions: number;
  duration: number;
  WrongQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
    answers: TAnswer[] | Record<string, string>;
  }[];
};
