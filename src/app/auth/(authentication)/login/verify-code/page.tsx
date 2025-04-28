import React from "react";
import CreateForm from "../../../_components/create-form";
import { TFormInput } from "@/lib/types/form";

// form inputs
const inputs: TFormInput = [
  { type: "text", name: "resetCode", placeholder: "Enter Code" },
];

// Verifecation problem
const description = {
  text: "Didn't receive a code?",
  button: "Resend",
};

export default function page() {
  return (
    <>
      <>
        <CreateForm
          title="Verify code"
          inputs={inputs}
          description={description}
          submit="Verify"
          schema="verifySchema"
        />
      </>
    </>
  );
}
