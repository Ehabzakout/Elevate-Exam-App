import React from "react";
import CreateForm from "../../_components/create-form";
import { TFormInput } from "@/lib/types/form";

// form inputs
const inputs: TFormInput = [
  { type: "email", name: "email", placeholder: "Enter your email" },
  { type: "password", name: "newPassword", placeholder: "Create Password" },
];

export default function page() {
  return (
    <>
      <>
        <CreateForm
          title="Set a Password"
          inputs={inputs}
          submit="Set Password"
          schema="setPasswordSchema"
        />
      </>
    </>
  );
}
