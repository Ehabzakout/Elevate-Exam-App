import React from "react";
import { Metadata } from "next";
import CreateForm from "../../_components/create-form";
import { TFormInput } from "@/lib/types/form";
import LoginOption from "../../_components/login-option";

//page title
export const metadata: Metadata = {
  title: "Register",
};

// form inputs
const inputs: TFormInput = [
  { type: "text", name: "username", placeholder: "Username" },
  { type: "text", name: "firstName", placeholder: "First Name" },
  { type: "text", name: "lastName", placeholder: "Last Name" },
  { type: "email", name: "email", placeholder: "Email" },
  { type: "password", name: "password", placeholder: "Password" },
  { type: "password", name: "rePassword", placeholder: "Confirm Password" },
  { type: "text", name: "phone", placeholder: "Phone Number" },
];

//have account
const description = {
  text: "Already have an account?",
  href: "/auth/login",
  link: "Login",
  addStyling: "mx-auto",
};
export default function page() {
  return (
    <>
      <div className="ml-28 mt-8 max-w-md space-y-8 pb-20">
        <CreateForm
          title="Sign up"
          inputs={inputs}
          description={description}
          submit="Create Account"
          schema="registerSchema"
        />
        <LoginOption />
      </div>
    </>
  );
}
