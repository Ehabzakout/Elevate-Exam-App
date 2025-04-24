"use client";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TAddExamFormProps } from "@/lib/types/components-props";
import { TAddExamInputs } from "@/lib/types/exams";

export default function AddExamForm({
  ...addExamFormProps
}: TAddExamFormProps) {
  // Destruct add exam form props
  const { setOpen, form, disabled, onSubmit } = addExamFormProps;

  // Array of input fields

  const inputs: TAddExamInputs = [
    {
      name: "duration",
      label: "Time",
      className: "w-12 text-center",
    },
    {
      name: "numberOfQuestions",
      label: "Number Of Questions",
      className: "w-12 text-center",
    },
    { name: "title", label: "Quiz Name" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="my-10 flex w-full justify-between gap-2">
          {/* Genrate Input fields */}

          {inputs?.map((input) => (
            <FormField
              key={input.name}
              control={form.control}
              name={input?.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-[600] text-[#717579]">
                    {input.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className={`${input.className} h-10 rounded-full border-[#B1B1B1] placeholder:text-xl focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        {/* Form buttons */}

        <div className="flex w-full justify-between">
          {/* Close dialog button */}

          <DialogClose asChild>
            <Button
              onClick={() => setOpen(false)}
              variant="secondary"
              type="button"
              className="mt-auto w-48 rounded-xl border border-primary bg-transparent text-sm font-[500px] text-primary"
            >
              Close
            </Button>
          </DialogClose>

          {/* Submit button  */}

          <Button
            type="submit"
            className="h-10 w-48 rounded-xl text-lg font-bold"
            disabled={disabled}
          >
            Add
          </Button>
        </div>
      </form>
    </Form>
  );
}
