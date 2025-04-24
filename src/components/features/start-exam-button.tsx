import ExamDialog from "@/app/(home)/dashboard/_components/exam components/exam-dialog/exam-dialog";
export default function StartExamButton({
  ...startQuizButtonProps
}: {
  title: string;
  duration: number;
  numberOfQuestions: number;
  id: string;
}) {
  const { title, duration, numberOfQuestions, id } = startQuizButtonProps;

  // Exam dialog props

  const dialogProps = {
    accept: "Start Quiz",
    title: `Are you sure you want to start ${title} ?`,
    description: [
      `Quiz Duration: ${duration} min`,
      `Number Of Questions: ${numberOfQuestions}`,
    ],
    id,
    duration,
  };

  return (
    <>
      <ExamDialog {...dialogProps}>
        <span className="h-6 w-20 rounded-xl bg-primary px-6 py-1 text-sm leading-none text-white">
          Start
        </span>
      </ExamDialog>
    </>
  );
}
