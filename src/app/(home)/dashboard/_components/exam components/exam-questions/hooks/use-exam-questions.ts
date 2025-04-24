import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useExamQuestionForm from "./use-exam-form";
import { TExamQuestion } from "@/lib/types/question";

// Hook to display currant question

export default function useCurrantQuestion(
  questions: TExamQuestion[],
  setStartQuiz: Dispatch<SetStateAction<boolean>>,
) {
  // Hook to provied exam form logic

  const { form, disabledSubmit, examResults, onSubmit } =
    useExamQuestionForm(questions);

  // States for render currant question and finish exam when time is over

  const [currantQuestion, setCurrantQuestion] = useState(0);
  const [selectAnswer, setSelectAnswer] = useState<number | null>(null);
  const [timeOver, setTimeOver] = useState(false);

  // Declare variables

  const numberOfQuestions = questions.length;
  const question = questions[currantQuestion];

  // Destruct "form" object

  const {
    trigger,
    formState: { errors },
  } = form;

  // Next question function

  async function nextQuestion() {
    // Check for last question

    if (currantQuestion === numberOfQuestions - 1) return;

    // check if user select answer

    const next = await trigger(question._id);
    if (next) {
      setCurrantQuestion((prev) => ++prev);
      setSelectAnswer(null);
    }
  }

  // Previous question function

  function previousQuestion() {
    if (currantQuestion === 0) return;
    setCurrantQuestion((prev) => --prev);
  }

  // Hook to submit exam when time is over

  useEffect(() => {
    if (timeOver) {
      // Trigger validation for all fields first

      form.trigger().then((isValid) => {
        if (isValid) {
          form.handleSubmit(onSubmit)();
        } else {
          window.alert("You didn't finish the exam try again");
          setStartQuiz(false);
        }
      });
    }
  }, [timeOver]);

  return {
    currantQuestion,
    selectAnswer,
    setSelectAnswer,
    nextQuestion,
    previousQuestion,
    errors,
    setTimeOver,
    numberOfQuestions,
    disabledSubmit,
    examResults,
    form,
    onSubmit,
  };
}
