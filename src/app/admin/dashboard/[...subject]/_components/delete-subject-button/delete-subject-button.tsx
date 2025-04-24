"use client";

import AlertDialogDemo from "@/components/common/alert-dialog";
import useDeleteSubject from "../../hooks/use-delete-subject";

// Compenent to delete subject

export default function DeleteSubjectButton({ id }: { id: string }) {
  const { open, setOpen, error, deleteSubject } = useDeleteSubject(id);

  // Delete  subject dialog props

  const deleteSubjectProps = {
    title: "Are you sure you want to delete this subject?",
    description:
      "If you click 'delete' you will remove this subject with it's exams",
    accept: "Delete",
    error,
    open,
    setOpen,
    action: deleteSubject,
  };

  return (
    <>
      <AlertDialogDemo {...deleteSubjectProps}>
        <div className="btn h-10 w-44 bg-red-500">Delete Subject</div>
      </AlertDialogDemo>
    </>
  );
}
