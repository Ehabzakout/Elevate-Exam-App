import React from "react";
import Timer from "./timer";

// Exam navbar component
export default function ExamNavbar({ ...navbarProps }) {
  // Destruct exam navbar props

  const { numberOfQuestions, currantQuestion, setTimeOver, duration } =
    navbarProps;

  //  Create an array depends on number of questions

  const currantQuestionSign = Array(numberOfQuestions).fill(0);

  return (
    <>
      <nav className="mb-12">
        <div className="flex items-center justify-between">
          {/* Shows how many questions the user has completed  */}

          <p className="text-sm font-[500] text-primary">{`Question ${currantQuestion + 1} of  ${numberOfQuestions}`}</p>

          {/*Shows the remaining time for the exam */}

          <Timer duration={duration} setTimeOver={setTimeOver} />
        </div>

        {/* currant question sign */}

        <div className="mt-8 flex justify-between gap-3">
          {currantQuestionSign.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${index <= currantQuestion ? "bg-primary" : "bg-gray-500"} `}
            ></div>
          ))}
        </div>
      </nav>
    </>
  );
}
