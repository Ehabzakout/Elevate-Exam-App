import CreateForm from "@/app/auth/_components/create-form";
import { TFormInput } from "@/lib/types/form";

const inputs: TFormInput = [
  { type: "text", placeholder: "Enter your Last Name", name: "lastName" },
];

export default function Page() {
  return (
    <div className="ml-16 mt-20 max-w-md">
      <CreateForm
        title="Update Profile"
        inputs={inputs}
        submit="Update"
        schema="updateProfileSchema"
      />
    </div>
  );
}
