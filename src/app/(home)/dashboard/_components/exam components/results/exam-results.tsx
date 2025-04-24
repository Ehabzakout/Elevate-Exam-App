import ResultsDialog from "./results-dialog";
import { DialogClose } from "@/components/ui/dialog";

export default function ExamResults({ ...examResults }) {
  //Destruct exam results props
  const { correct, wrong, total, WrongQuestions } = examResults;

  const r = 70;

  // Get percentage of correct answers
  const per = Math.round(parseFloat(total));

  // Create full circle
  const circle = 2 * Math.PI * r;

  // Get the percentage of wrong answers
  const offset = (circle * (100 - per)) / 100;

  return (
    <>
      <p className="text-2xl font-[500] text-[#0F0F0F]">Your Score</p>

      <div className="my-12 flex items-center justify-center gap-20">
        {/* Icon to show percentage correct and wrong answers */}

        <svg width={170} height={170}>
          {/* Circle for correct answers */}

          <circle
            cx={85}
            cy={85}
            r={r}
            stroke="#CC1010"
            strokeWidth={6}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circle}
            strokeDashoffset={-(per / 100) * circle - 50}
            transform={`rotate(-105 85 85)`}
            className="transition-all duration-500"
          />

          {/* Circle for wrong answers */}
          <circle
            cx={85}
            cy={85}
            r={r}
            stroke="#02369C"
            strokeWidth={6}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circle}
            strokeDashoffset={offset}
            transform={`rotate(-85 85 85)`}
            className="transition-all duration-500"
          />

          {/* Success Percentage */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="20"
            fontWeight="500"
            fill="#373737"
          >
            {per}%
          </text>
        </svg>
        <div className="flex flex-col gap-2">
          {/*Number of Correct answers */}

          <div className="flex items-center gap-10 font-[500] text-[#02369C]">
            <p className="w-28 text-2xl">Correct</p>
            <div className="flex size-9 items-center justify-center rounded-full border border-[#02369C] text-lg">
              <p>{correct}</p>
            </div>
          </div>

          {/*Number of wrong answers */}

          <div className="flex items-center gap-10 font-[500] text-[#CC1010]">
            <p className="w-28 text-2xl">Incorrect</p>
            <div className="flex size-9 items-center justify-center rounded-full border border-[#CC1010] text-lg">
              <p>{wrong}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons  */}
      <div className="mt-12 flex justify-between">
        {/* Close Results Dialog */}

        <DialogClose asChild>
          <div className="w-80 cursor-pointer rounded-full border border-primary px-6 py-3 text-center text-2xl font-[500] text-primary">
            Close
          </div>
        </DialogClose>

        {/* Show wrong questions and correct answers dialog */}

        <ResultsDialog WrongQuestions={WrongQuestions}>
          <div className="w-80 rounded-full bg-primary px-6 py-3 text-2xl font-[500] text-white">
            Show Result
          </div>
        </ResultsDialog>
      </div>
    </>
  );
}
