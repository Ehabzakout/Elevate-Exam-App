import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { TExamResults } from "@/lib/types/exam-results";
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoMdRadioButtonOff } from "react-icons/io";
import { DialogTitle } from "@radix-ui/react-dialog";
import clsx from "clsx";

// Dialog for wrong questions and correct answers

export default function ResultsDialog({
  children,
  WrongQuestions,
}: {
  children: React.ReactNode;
  WrongQuestions: TExamResults["WrongQuestions"];
}) {
  return (
    <>
      <Dialog>
        {/* button to trigger dialog */}
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          {/* Generate wrong questions */}
          <div className="flex h-[600px] flex-wrap justify-between gap-y-10 overflow-y-scroll">
            {WrongQuestions.map((question) => (
              <div
                key={question.QID}
                className="w-[calc((100%-40px)/2)] bg-[#F9F9F9] px-2 py-4 shadow-[0_0_8px_0_#2A292940]"
              >
                {/*Wrong question  */}

                <p className="mb-4 text-xl">{question.Question}</p>

                {/* Answers */}

                <div className="space-y-4">
                  {/* get answers for question */}

                  {Array.isArray(question.answers) &&
                    question.answers.map((answer) => (
                      // Answer and check it
                      <div
                        key={answer.key}
                        className={clsx(
                          "flex items-center gap-5 rounded-lg bg-[#EDEFF3] px-2 py-4",
                          {
                            "border border-[#11CE19] bg-[#c2f7c5]":
                              answer.key === question.correctAnswer,
                            "border border-[#CC1010] bg-[#F8D2D2]":
                              answer.key === question.inCorrectAnswer,
                          },
                        )}
                      >
                        {/* check the answer if it's correct or wrong and user selected it */}
                        {answer.key === question.correctAnswer ||
                        answer.key === question.inCorrectAnswer ? (
                          <IoMdRadioButtonOn
                            className={clsx("size-6 text-[#11CE19]", {
                              "text-[#CC1010]":
                                answer.key === question.inCorrectAnswer,
                            })}
                          />
                        ) : (
                          // If answer doesn't selected show this style
                          <IoMdRadioButtonOff className="size-5 text-[#02369C]" />
                        )}

                        <p> {answer.answer}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}

            {/* Close dialog button */}

            <DialogClose asChild>
              <Button type="button" className="mt-auto w-5/12 rounded-full">
                Close
              </Button>
            </DialogClose>
          </div>

          <DialogTitle />
        </DialogContent>
      </Dialog>
    </>
  );
}
