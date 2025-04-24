import { TAnswer } from "./question";

export type TExamResults = {
  message: string;
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
    answers: TAnswer[] | Record<string, string>;
  }[];
  correctQuestions: {
    QID: string;
    Question: string;
    correctAnswer: string;
    answers: TAnswer[] | Record<string, string>;
  }[];
};
