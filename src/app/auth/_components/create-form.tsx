"use client";

// Import Type
import { TCreateForm } from "@/lib/types/form";

// Import Next component
import Link from "next/link";

// Import clsx
import clsx from "clsx";

//Import component from Shadcn library
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useCreateForm from "../_hooks/use-create-form";

// While it's a good pratice to make components reusable, making forms reusable is not a good practice since the code is likely to change based on the use case
export default function CreateForm({
  title,
  inputs,
  description,
  submit,
  schema,
}: TCreateForm) {
  // Hook to create form
  const { showError, onSubmit, form } = useCreateForm(submit, schema);

  // Destruct form errors
  const errors = form.formState.errors;

  return (
    <>
      {/*Form Error*/}
      {showError && (
        <p className="rounded-xl bg-red-50 px-4 py-5 text-lg text-red-500">
          {showError}
        </p>
      )}

      {/*Form Title */}
      <h1 className="mb-8 text-2xl font-bold">{title}</h1>

      {/* Form  */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Generate requested inputs inside form */}
          {inputs.map((input, index) => (
            // input field
            <FormField
              defaultValue={""}
              key={input.name}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem>
                  {/* All form inputs must have a label for accessability, even as a hidden label */}
                  <FormControl>
                    <Input
                      {...field}
                      type={input.type}
                      autoFocus={index === 0}
                      placeholder={input.placeholder}
                      className={clsx(
                        "mt-8 h-14 rounded-xl bg-[#F9F9F9] shadow-[0_10px_20px_0_#4461F20D]",
                        errors[input.name as keyof typeof errors] &&
                          "focus-visible:ring-red-400",
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* Login problems */}
          {description && (
            <FormDescription
              className={`ms-auto mt-4 w-fit text-lg ${description.addStyling ? description.addStyling : ""}`}
            >
              <span>{description.text}</span>
              <span className="text-primary">
                {description.link
                  ? description.href && (
                      <Link href={description.href}>{description.link}</Link>
                    )
                  : description.button}
              </span>
            </FormDescription>
          )}

          {/* Submit form button*/}

          <Button
            type="submit"
            className="mt-10 h-14 w-full rounded-[1.25rem] p-2 text-lg shadow-[0_18px_30px_0_#2F1C1C1A]"
          >
            {submit}
          </Button>
        </form>
      </Form>
    </>
  );
}
