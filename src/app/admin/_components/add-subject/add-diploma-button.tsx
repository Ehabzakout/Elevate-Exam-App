"use client";

import AddDiplomaDialog from "../add-dialog";
import { IoAddCircleOutline } from "react-icons/io5";
import AddDiplomaForm from "./add-subject-form";
import useAddSubjectForm from "./hooks/use-add-subject";

export default function AddDiplomaButton() {
  const {
    open,
    error,
    setOpen,
    onSubmit,
    form,
    addPhoto,
    setAddPhoto,
    disabled,
  } = useAddSubjectForm();

  const addSubjectProps = {
    onSubmit,
    form,
    addPhoto,
    setAddPhoto,
    disabled,
    setOpen,
  };

  const addDiplomaDialogProps = {
    title: "Update Subject",
    open,
    error,
    setOpen,
    action: () => <AddDiplomaForm {...addSubjectProps} />,
  };
  return (
    <>
      <AddDiplomaDialog {...addDiplomaDialogProps}>
        <div className="flex items-center gap-7 rounded-xl px-2 py-3 hover:bg-blue-100">
          <IoAddCircleOutline className="size-6 text-primary" />
          <span>Add Diploma</span>
        </div>
      </AddDiplomaDialog>
    </>
  );
}
