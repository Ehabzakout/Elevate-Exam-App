// Import Hooks
import { useState } from "react";
import useSubmitAction from "./use-submit-action";
import { SubmitHandler, useForm } from "react-hook-form";

// Import zod
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Import signin from Next-Auth
import { signIn } from "next-auth/react";

// Import schema for all generated form
import formsSchema from "@/lib/schema/auth-schema";
import { submitAction } from "../actions/submit-action";

// hook to create form

export default function useCreateForm(submit: string, schema: string) {
  // Select schema for generated form

  const selectedSchema = formsSchema[schema as keyof typeof formsSchema];

  // type selected form
  type TFormSchema = z.infer<typeof selectedSchema>;

  // Hook useForm from react hook form

  const form = useForm<TFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(selectedSchema as z.ZodType<TFormSchema>),
  });

  // Hook for custom submit
  const { apiUrl, method, action } = useSubmitAction(submit);

  // State to show errors for user
  const [showError, setShowError] = useState<string | null>(null);

  // Condition if the form doesn't exist
  if (!selectedSchema) throw new Error("invalid form");

  // Submit function for form

  const onSubmit: SubmitHandler<TFormSchema> = async (values) => {
    // Submit for login form

    if (submit === "Login") {
      const response = await signIn("credentials", {
        redirect: false,
        email: "email" in values ? values.email : undefined,
        password: "password" in values ? values.password : undefined,
      });

      if (response?.ok) window.location.href = "/dashboard";
      if (response?.error) setShowError(response.error);
    }

    // Submit for custom forms
    else {
      const response = await submitAction(values, apiUrl, method);

      if (response.message === "success" || response.status === "Success")
        action();
      else setShowError(response?.message);
    }
  };

  return { showError, onSubmit, form };
}
