import React from "react";
import CreateForm from "../../../_components/create-form";
import { TFormInput } from "@/lib/types/form";

// form inputs
const inputs: TFormInput = [
  { type: "email", name: "email", placeholder: "Enter Email" },
];

// login problem
const description = {
  text: "We will send a verifecation code to your email",
};

export default function page() {
  return (
    <>
      <>
        <CreateForm
          title="Forgot your password?"
          inputs={inputs}
          description={description}
          submit="Send Code"
          schema="forgotPasswordSchema"
        />
      </>
    </>
  );
}
