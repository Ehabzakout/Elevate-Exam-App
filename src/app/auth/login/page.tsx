import React from "react";
import { Metadata } from "next";
import CreateForm from "../_components/create-form";
import { TFormInput } from "@/lib/types/form";

//page title
export const metadata: Metadata = {
  title: "Log in page",
};

// form inputs
const inputs: TFormInput = [
  { type: "text", name: "email", placeholder: "Email" },
  { type: "password", name: "password", placeholder: "Password" },
];

//login problem
const description = {
  link: "Forgot my password?",
  href: "login/forgot-password",
};

//Login page

export default function page() {
  return (
    <>
      <CreateForm
        title="Sign in"
        inputs={inputs}
        description={description}
        submit="Login"
        schema="loginSchema"
      />
    </>
  );
}
