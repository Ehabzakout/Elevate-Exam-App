"use client";

import AddDiplomaDialog from "@/app/admin/_components/add-dialog";
import AddQuestionForm from "./add-question-form";
import useAddQuestion from "./hooks/use-add-question";
import { TAddQuestionProps } from "@/lib/types/components-props";

//Add question button component

export default function AddQuestionButton({
  examId,
  subjectId,
}: TAddQuestionProps) {
  // Hook to add question for exam

  const { setOpen, form, onSubmit, addAnotherQuestion, open, error, disabled } =
    useAddQuestion(examId, subjectId);

  // Props to create add question form

  const addQuestionProps = {
    setOpen,
    form,
    onSubmit,
    addAnotherQuestion,
    disabled,
  };

  // Props for add question dialog

  const addDiplomaDialogProps = {
    title: "Add Question",
    open,
    setOpen,
    error,
    action: () => <AddQuestionForm {...addQuestionProps} />,
  };

  return (
    <>
      {/* Add question button */}

      <AddDiplomaDialog {...addDiplomaDialogProps}>
        <span className="h-6 w-20 cursor-pointer rounded-xl bg-primary px-6 py-1 text-sm leading-none text-white">
          Add Question
        </span>
      </AddDiplomaDialog>
    </>
  );
}
