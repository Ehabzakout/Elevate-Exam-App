import { TExamQuestion } from "@/lib/types/question";
import { TExamResults } from "@/lib/types/exam-results";
import questionsSchema from "@/lib/schema/questions-schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useStartTimer from "./use-start-timer";
import submitExam from "../action/submitExam.action";

//Hook for exam form logic

export default function useExamQuestionForm(questions: TExamQuestion[]) {
  // Hook to Start timer for submit api not for UI
  const { startTimer, time } = useStartTimer();

  // State to disable submit button
  const [disabledSubmit, setDisabledSubmit] = useState(false);

  // State to show exam results
  const [examResults, setExamResults] = useState<TExamResults | null>(null);

  // Create a set for question Id's
  const questionIds = new Set(questions.map((question) => question._id));

  // Exam schema
  const { schema } = questionsSchema(questions);

  // Type form inputs
  type TAnswers = z.infer<typeof schema>;

  // Use React-hook-form
  const form = useForm<TAnswers>({ resolver: zodResolver(schema) });

  // Submit function

  const onSubmit: SubmitHandler<TAnswers> = async (values) => {
    // Turn off submit button and stop timer
    setDisabledSubmit(true);
    clearInterval(startTimer.current as NodeJS.Timeout);

    // Update form values by adding "questionId" and "correct" keys
    const answers = Object.entries(values).map((answer) => {
      return { questionId: answer[0], correct: answer[1] as string };
    });

    // Object answers and time
    const checkAnswers = {
      answers,
      time: Math.round(time.current / 1000 / 60),
    };

    // Server action to submit the exam

    await submitExam(checkAnswers)
      .then((res: TExamResults) => {
        // Api doesn't provide answers for questions so will get the answers and update response

        const response = {
          ...res,
          WrongQuestions: res.WrongQuestions.map((ques) => {
            // Check if the wrong question is one of the exam question

            if (questionIds.has(ques.QID)) {
              // Add answers for the wrong question

              return {
                ...ques,
                answers: questions
                  .map((el) => {
                    if (el._id === ques.QID) return el.answers;
                    return;
                  })
                  .filter((el) => el !== undefined)[0],
              };
            }

            // If question doesn't exist inside question Id's return question
            return ques;
          }),
        };

        // Show the exam results
        setExamResults(response);
      })
      .catch(() => window.alert("Sorry your exam dosn't submitted"))
      .finally(() => setDisabledSubmit(false));
  };

  return { form, onSubmit, disabledSubmit, examResults };
}
