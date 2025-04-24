import { addSubjectSchema, TAddDiploma } from "@/lib/schema/add-subject-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import submitAddDiploma from "../action/add-subject-action";
import updateSubject from "@/app/admin/dashboard/[...subject]/actions/update-subject-action";

// hook add subject form
export default function useAddSubjectForm(option?: {
  update: boolean;
  id: string;
}) {
  // states to control add subject dialog

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State to show add photo input

  const [addPhoto, setAddPhoto] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // Use react-hook-form

  const form = useForm<TAddDiploma>({
    resolver: zodResolver(addSubjectSchema),
    defaultValues: { name: "" },
  });

  //Submit function

  const onSubmit: SubmitHandler<TAddDiploma> = async (values) => {
    setDisabled(true);

    // Transfer values form object to form data
    const formData = new FormData();
    formData.append("icon", values.icon);
    formData.append("name", values.name);

    const response =
      option?.update === true && option?.id
        ? await updateSubject(formData, option.id)
        : await submitAddDiploma(formData);

    // check if subject has been added
    if (response.message === "success") {
      setOpen(false);
      window.location.pathname = "/admin/dashboard";
    } else setError(response.message);
    setDisabled(false);
    return response;
  };

  return {
    open,
    setOpen,
    error,
    onSubmit,
    form,
    addPhoto,
    setAddPhoto,
    disabled,
  };
}
