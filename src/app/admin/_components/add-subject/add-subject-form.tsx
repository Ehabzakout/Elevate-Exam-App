import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { TAddDiploma } from "@/lib/schema/add-subject-schema";
import { Dispatch, SetStateAction } from "react";

export default function AddDiplomaForm({
  ...addSubjectProps
}: {
  onSubmit: SubmitHandler<TAddDiploma>;
  form: UseFormReturn<TAddDiploma>;
  addPhoto: boolean;
  setAddPhoto: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
  update?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // Destruct Props

  const { form, onSubmit, addPhoto, setAddPhoto, disabled, update, setOpen } =
    addSubjectProps;

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="my-10 flex w-full justify-between gap-16">
            {/* Input Add diploma photo */}

            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-lg font-[600] text-[#717579]">
                    Add Photo
                  </FormLabel>
                  <FormControl>
                    <input
                      placeholder="+"
                      onClick={() => setAddPhoto(true)}
                      type={addPhoto ? "file" : "text"}
                      accept="image/*"
                      name={field.name}
                      onChange={(e) => {
                        field.onChange(e.target.files?.[0]);
                      }}
                      className="h-10 w-12 cursor-pointer rounded-full border border-[#B1B1B1] text-center caret-transparent outline-none placeholder:text-2xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input diploma name */}

            <FormField
              control={form.control}
              name="name"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-[600] text-[#717579]">
                    Diploma Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="flex h-10 w-80 items-center justify-center rounded-full border-[#B1B1B1] placeholder:text-xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
              {update ? "Update" : "Add"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
