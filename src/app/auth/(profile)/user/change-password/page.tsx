import React from "react";
import CreateForm from "../../../_components/create-form";
import { TFormInput } from "@/lib/types/form";

// form inputs
const inputs: TFormInput = [
  { type: "password", name: "oldPassword", placeholder: "Enter old password" },
  { type: "password", name: "password", placeholder: "Enter new password" },
  { type: "password", name: "rePassword", placeholder: "Confirm Password" },
];

export default function page() {
  return (
    <>
      <div className="ml-16 mt-20 w-1/2">
        <CreateForm
          title="Change Your Password"
          inputs={inputs}
          submit="Change Password"
          schema="changePasswordSchema"
        />
      </div>
    </>
  );
}
