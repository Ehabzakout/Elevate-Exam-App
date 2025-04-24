import { Path } from "react-hook-form";

// Create input fieled type
export type TFormInput = {
  type: "text" | "password" | "submit" | "email";
  name: Path<T>;
  placeholder: string;
}[];

// Create form type
export type TCreateForm = {
  title: string;
  inputs: TFormInput;
  description?: {
    text?: string;
    href?: string;
    button?: string;
    link?: string;
    addStyling?: string;
  };
  submit: string;
  schema: string;
};
