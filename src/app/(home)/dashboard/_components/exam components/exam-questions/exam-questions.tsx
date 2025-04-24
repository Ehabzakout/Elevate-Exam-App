import React from "react";
import ExamResults from "../results/exam-results";
import ExamNavbar from "../exam-navbar/exam-navbar";
import useCurrantQuestion from "./hooks/use-exam-questions";
import { TExamQuestionProps } from "@/lib/types/components-props";

export default function ExamQuestions({
  questions,
  duration,
  setStartQuiz,
}: TExamQuestionProps) {
  // Hook provide exam logic and change questions in exam dialog

  const {
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
  } = useCurrantQuestion(questions, setStartQuiz);

  // Props for exam navbar

  const navbarProps = {
    numberOfQuestions,
    currantQuestion,
    setTimeOver,
    duration,
  };

  return (
    <>
      {/*If the exam is submitted show the results  */}

      {examResults ? (
        <ExamResults {...examResults} />
      ) : (
        // Exam
        <div>
          <ExamNavbar {...navbarProps} />

          {/* Exam questions form */}

          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* question */}

            {questions.map((question, index) => {
              // Condition to display currant question

              if (index === currantQuestion)
                return (
                  <div key={question._id}>
                    <p className="text-2xl font-[500]">{question.question}</p>

                    {/* If user doesn't choose one of the answers show error message */}

                    {errors[question._id] && (
                      <p className="mt-4 text-lg text-red-600">
                        {String(errors[question._id]?.message)}
                      </p>
                    )}

                    {/* Question answers */}

                    <div className="mt-4 flex flex-col gap-4">
                      {question.answers.map((answer, index) => (
                        <label
                          htmlFor={answer.key}
                          key={answer.key}
                          data-select={index === selectAnswer}
                          className="flex items-center gap-4 rounded-xl bg-[#EDEFF3] p-6 text-xl data-[select=true]:bg-[#CCD7EB]"
                        >
                          {/* Input radio */}
                          <input
                            {...form.register(question._id)}
                            type="radio"
                            id={answer.key}
                            value={answer.key}
                            className="size-5"
                            onFocus={() => {
                              setSelectAnswer(index);
                            }}
                            autoFocus={false}
                          />

                          {/*answer appears for user */}

                          <p>{answer.answer}</p>
                        </label>
                      ))}
                    </div>
                  </div>
                );
            })}

            {/* Buttons for exam */}

            <div className="mt-12 flex justify-between">
              {/* Previous question button */}

              <button
                disabled={currantQuestion === 0}
                type="button"
                className="w-72 rounded-full border border-primary px-6 py-3 text-2xl font-[500] text-primary disabled:cursor-not-allowed disabled:border-zinc-700 disabled:text-zinc-600"
                onClick={previousQuestion}
              >
                Back
              </button>

              {/* Check if is this the last question  */}

              {currantQuestion === numberOfQuestions - 1 ? (
                // if it's the last question show submit button
                <>
                  <button
                    type="submit"
                    className="w-72 rounded-full bg-primary px-6 py-3 text-2xl font-[500] text-white disabled:cursor-not-allowed disabled:bg-[#1D1B201F] disabled:text-black"
                    disabled={disabledSubmit}
                  >
                    Submit
                  </button>
                </>
              ) : (
                // Show the next button
                <button
                  type="button"
                  className="w-72 rounded-full bg-primary px-6 py-3 text-2xl font-[500] text-white"
                  onClick={nextQuestion}
                  disabled={currantQuestion === numberOfQuestions - 1}
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
