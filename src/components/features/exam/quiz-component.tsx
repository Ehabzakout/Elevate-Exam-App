import Image from "next/image";
import js from "@assets/images/js.png";
import css from "@assets/images/css.png";
import html from "@assets/images/html.png";
import react from "@assets/images/react.png";
import StartExamButton from "./start-exam-button";
import AddQuestionButton from "../../../app/admin/dashboard/all-exams/_components/add-question/add-question-button";
import getToken from "@/lib/utils/get-token";
import { APIResponse } from "@/lib/types/api";
import { TExam } from "@/lib/types/question";
import { TQuizProps } from "@/lib/types/components-props";

// Icons for quizzes
export const icons = {
  "JavaScript Quiz": js,
  "CSS Quiz": css,
  "HTML Quiz": html,
  "React Quiz": react,
};

export default async function Quiz({ id, admin }: TQuizProps) {
  // Get token
  const token = await getToken();
  if (!token) throw new Error("You are not logged in ");

  // fetch exam data
  const req = await fetch(`${process.env.BASIC_API}/exams/${id}`, {
    headers: { token },
    method: "GET",
  });
  const response: APIResponse<{ exam: TExam }> = await req.json();
  const { title, duration, numberOfQuestions, subject, _id } = response.exam;
  // Start Quiz button props

  const startQuizButtonProps = {
    title,
    duration,
    numberOfQuestions,
    id,
  };

  return (
    <>
      <div className="flex w-full items-center rounded-xl bg-white px-6 py-4 shadow-[0_15px_40px_0_#2A29290D]">
        {/* quiz image */}

        <div className="white mr-6 size-16 overflow-hidden rounded-xl">
          <Image src={icons[title as keyof typeof icons]} alt={title} />
        </div>
        <div>
          {/* quiz name */}
          <p className="text-lg font-[500] text-[#0F0F0F]">
            {title.split(" ").splice(0, 1)}
          </p>

          {/* number of questions in quiz */}
          <p className="mt-1 text-sm text-[#535353]">
            {numberOfQuestions} Questions
          </p>
        </div>
        <div className="ms-auto">
          {/* quiz duration */}

          <p className="mb-1 text-center text-sm">{duration} Minutes</p>

          {admin === true ? (
            // Button to trigger add question dialog
            <AddQuestionButton examId={_id} subjectId={subject} />
          ) : (
            /* button to trigger exam dialog */
            <StartExamButton {...startQuizButtonProps} />
          )}
        </div>
      </div>
    </>
  );
}
