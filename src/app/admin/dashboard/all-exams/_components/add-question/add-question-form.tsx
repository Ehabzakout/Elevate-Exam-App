"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TAddQuestionForm } from "@/lib/types/components-props";

// Component to add question form

export default function AddQuestionForm({
  ...addQuestionProps
}: TAddQuestionForm) {
  // Destruct add question form props

  const { setOpen, onSubmit, addAnotherQuestion, disabled, form } =
    addQuestionProps;

  // Array of answers options

  const answers: ("A1" | "A2" | "A3" | "A4")[] = ["A1", "A2", "A3", "A4"];

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-between">
            {/* Select box to specify question style */}

            <FormField
              control={form.control}
              name="questionStyle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[220px]">
                        <SelectValue placeholder="Select Question Style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="radio">Radio</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select box to specify question answer */}

            <FormField
              control={form.control}
              name="correct"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Correct Answer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A1">A1</SelectItem>
                        <SelectItem value="A2">A2</SelectItem>
                        <SelectItem value="A3">A3</SelectItem>
                        <SelectItem value="A4">A4</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            {/* Question input */}

            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-[600] text-[#717579]">
                    Add Question
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-10 rounded-2xl focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*Generate Answers Inputs  */}

            {answers.map((_, index) => (
              <FormField
                key={index}
                control={form.control}
                name={answers[index]}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-[600] text-[#717579]">
                      {`Add Answer ${index + 1}`}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-10 rounded-2xl focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* Form buttons  */}

          <div className="flex justify-between">
            <Button
              className="h-8 w-20 rounded-xl border border-primary text-primary"
              variant="secondary"
              type="button"
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>

            <Button
              className="h-8 rounded-xl px-7 text-sm font-bold"
              type="button"
              disabled={disabled}
              onClick={() => addAnotherQuestion()}
            >
              Add Another Question
            </Button>

            <Button
              type="submit"
              disabled={disabled}
              className="h-8 rounded-xl px-14 text-sm font-bold"
            >
              Done
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
