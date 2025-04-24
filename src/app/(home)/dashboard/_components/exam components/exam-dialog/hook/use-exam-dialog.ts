import { TExamQuestion } from "@/lib/types/question";
import { useState } from "react";

export default function useExamDialog(id: string) {
  // States to start the exam

  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState<TExamQuestion[] | null>(null);

  // Function to get exam questions

  async function getExam() {
    try {
      // Request to route handler

      const response = await fetch(`/api/get-exam?id=${id}`);
      const { questions }: { message: string; questions: TExamQuestion[] } =
        await response.json();

      // after get the questions start exam

      setStartQuiz(!startQuiz);
      setQuestions(questions);
    } catch {
      window.alert("Some thing went wrong can't get the exam");
    }
    return questions;
  }
  return { getExam, startQuiz, questions, setStartQuiz };
}
