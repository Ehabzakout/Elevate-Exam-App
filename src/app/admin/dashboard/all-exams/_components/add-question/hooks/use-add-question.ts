import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addQuestionSchema,
  TAddQuestion,
} from "@/lib/schema/add-question-schema";
import { addQuestion } from "@/lib/actions/add-question";
import { SubmitHandler, useForm } from "react-hook-form";

//Hook to add question fo exam

export default function useAddQuestion(examId: string, subjectId: string) {
  //Stats to open and close dialog and show errors

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // state to disable add question button

  const [disabled, setDisabled] = useState(false);

  // hook to use react-hook-form

  const form = useForm<TAddQuestion>({
    resolver: zodResolver(addQuestionSchema),
    defaultValues: {
      questionStyle: "",
      correct: "",
      question: "",
      A1: "",
      A2: "",
      A3: "",
      A4: "",
    },
  });

  // Function to add another question
  function addAnotherQuestion() {
    form.handleSubmit((values) => onSubmit({ ...values, another: true }))();
  }

  // Submit add new question to exam
  const onSubmit: SubmitHandler<TAddQuestion & { another?: boolean }> = async (
    values,
  ) => {
    setDisabled(true);

    // Make update on values to make it compatible with api

    const data = {
      ...values,
      subject: subjectId,
      exam: examId,
    };
    delete data.another;
    delete data.questionStyle;

    // server action to add question
    const response = await addQuestion(data);
    if (response.message === "success") {
      //Check if the user need to add another question if not close the dialog

      if (values.another) {
        form.reset();
        setError(null);
      } else setOpen(false);
    }

    // If response fail show the error for user
    else {
      setError(response.message);
    }
    setDisabled(false);
  };

  // Remove error message when unmount dialog

  useEffect(() => {
    return () => {
      setError(null);
    };
  }, []);

  return { disabled, error, open, setOpen, addAnotherQuestion, onSubmit, form };
}
