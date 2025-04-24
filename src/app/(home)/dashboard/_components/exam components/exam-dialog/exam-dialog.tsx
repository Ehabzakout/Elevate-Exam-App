"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TExamDialog } from "@/lib/types/dialog";
import { Button } from "@components/ui/button";
import ExamQuestions from "../exam-questions/exam-questions";
import { ImSpinner8 } from "react-icons/im";
import useExamDialog from "./hook/use-exam-dialog";

export default function ExamDialog({ children, ...dialogProps }: TExamDialog) {
  // Destruct props

  const { accept, title, description, id, duration } = dialogProps;

  // hook to start quiz
  const { getExam, startQuiz, questions, setStartQuiz } = useExamDialog(id);

  return (
    <>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        {!startQuiz ? (
          // If start quiz false show this content

          <DialogContent>
            <DialogHeader className="space-y-4">
              {/* quiz title */}

              <DialogTitle>{title}</DialogTitle>

              {/* Illustrate exam conditions */}

              {description.map((point) => (
                <DialogDescription
                  key={point}
                  className="ml-6 list-item text-zinc-800"
                >
                  {point}
                </DialogDescription>
              ))}
            </DialogHeader>

            {/* button to start quiz */}

            <Button
              onClick={() => getExam()}
              className="mt-3 rounded-full px-6 py-2 text-lg"
            >
              {accept}
            </Button>
          </DialogContent>
        ) : (
          // If startQuiz equal true fetch the exam and show exam

          <DialogContent>
            {/* If questions haven't get yet , show loading */}

            {!questions ? (
              <div className="mt-5 flex items-center justify-center gap-5 text-xl">
                <ImSpinner8 className="animate-spin text-3xl text-primary" />
                <p>Please waite...</p>
              </div>
            ) : // If this exam have questions show questions

            questions.length > 0 ? (
              <ExamQuestions
                questions={questions}
                duration={duration}
                setStartQuiz={setStartQuiz}
              />
            ) : (
              <p className="my-6 text-center text-xl text-primary">
                Sorry,There are no questions in this exam
              </p>
            )}
            <DialogTitle></DialogTitle>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
