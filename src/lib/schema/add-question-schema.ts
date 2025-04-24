import { z } from "zod";

const addQuestionSchema = z.object({
  questionStyle: z
    .enum(["radio", "checkbox", ""], {
      message: "You should choose your question style",
    })
    .optional(),
  correct: z.enum(["A1", "A2", "A3", "A4", ""], {
    message: "You should specify the correct answer",
  }),
  question: z.string().min(8, { message: "You should add question" }),
  A1: z.string().min(1, { message: "You should add answer" }),
  A2: z.string().min(1, { message: "You should add answer" }),
  A3: z.string().min(1, { message: "You should add answer" }),
  A4: z.string().min(1, { message: "You should add answer" }),
});

type TAddQuestion = z.infer<typeof addQuestionSchema>;
export { addQuestionSchema, type TAddQuestion };
