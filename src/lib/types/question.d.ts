export type TAnswer = {
  answer: string;
  key: string;
};

export type TSubject = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};

export type TExam = {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
};

export type TExamQuestion = {
  answers: TAnswer[];
  type: "single_choice";
  _id: string;
  question: string;
  correct: string;
  subject: TSubject;
  exam: TExam;
  createdAt: string;
};
