import { icons } from "@/components/features/quiz-component";
import Image from "next/image";
import { TSubmittedExam } from "@/lib/types/exams";
import ResultsDialog from "../dashboard/_components/exam components/results/results-dialog";

// Quiz history page

export default async function page() {
  // Get quiz history for user

  const req = await fetch("http://localhost:3000/api/quiz-history", {
    cache: "no-store",
  });

  const res: { exams: TSubmittedExam[] } = await req.json();
  const { exams } = res;

  return (
    <>
      <div className="mt- space-y-6">
        {/* headline */}

        <h1 className="text-lg font-[500]">All quizzes you have done:</h1>

        {/* Map to return exam  */}
        {exams?.map((exam) => {
          // Destruct exam keys

          const { id, title, numberOfQuestions, duration, WrongQuestions } =
            exam;

          return (
            //exam

            <div
              key={id}
              className="flex w-full items-center rounded-xl bg-white px-6 py-4 shadow-[0_15px_40px_0_#2A29290D]"
            >
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

                {/* Number of corrected answers and quiz finished time*/}

                <p className="mt-4 text-primary">
                  18 corrected answers in 14 min
                </p>
              </div>

              <div className="ms-auto">
                {/* quiz duration */}

                <p className="mb-1 text-center text-sm">{duration} Minutes</p>

                {/* Button to show wrong answers  */}

                <ResultsDialog WrongQuestions={WrongQuestions}>
                  <span className="btn">Answers</span>
                </ResultsDialog>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
