import { addExamSchema, TAddExam } from "@/lib/schema/add-exam-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import addExamAction from "../actions/add-exam-action";

export default function useAddExam(id: string) {
  // State to open and close add exam dialog

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // State to show add photo input

  const [disabled, setDisabled] = useState(false);

  // Use react-hook-form
  const form = useForm<TAddExam>({
    mode: "onBlur",
    resolver: zodResolver(addExamSchema),
    defaultValues: {
      duration: 0,
      numberOfQuestions: 0,
      title: "",
    },
  });

  //Submit function
  const onSubmit: SubmitHandler<TAddExam> = async (values) => {
    setDisabled(true);

    // Update values to be compitable with api

    const data = { ...values, subject: id };

    // Request

    const response = await addExamAction(data);

    // Check if exam has been added

    if (response.message === "success") setOpen(false);
    else setError(response.message);
    setDisabled(false);
  };

  return { open, setOpen, disabled, onSubmit, form, error };
}
