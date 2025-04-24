"use client";
import AddDiplomaDialog from "../../../../_components/add-dialog";
import AddDiplomaForm from "../../../../_components/add-subject/add-subject-form";
import useAddSubjectForm from "../../../../_components/add-subject/hooks/use-add-subject";

export default function UpdateSubject({ id }: { id: string }) {
  const update = true;
  const option = { update, id };
  const {
    open,
    error,
    setOpen,
    onSubmit,
    form,
    addPhoto,
    setAddPhoto,
    disabled,
  } = useAddSubjectForm(option);

  const addSubjectProps = {
    onSubmit,
    form,
    addPhoto,
    setAddPhoto,
    disabled,
    update,
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
    <AddDiplomaDialog {...addDiplomaDialogProps}>
      <div className="btn h-10 w-44 font-[500]">Update Subject</div>
    </AddDiplomaDialog>
  );
}
