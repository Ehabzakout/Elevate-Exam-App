"use client";

import AddDiplomaDialog from "@/app/admin/_components/add-dialog";
import AddExamForm from "./add-exam-form";
import useAddExam from "../../hooks/use-add-exam";

export default function AddExamButton({ id }: { id: string }) {
  // Hook Add Exam

  const { open, setOpen, disabled, onSubmit, form, error } = useAddExam(id);

  // Add Exam props

  const addExamFormProps = {
    setOpen,
    disabled,
    onSubmit,
    form,
  };

  // Add exam dialog props

  const addDiplomaDialogProps = {
    title: "Add Exam",
    open,
    setOpen,
    error,
    action: () => <AddExamForm {...addExamFormProps} />,
  };

  return (
    <>
      <AddDiplomaDialog {...addDiplomaDialogProps}>
        <div className="btn h-10 w-44 font-[500]">add exam</div>
      </AddDiplomaDialog>
    </>
  );
}
