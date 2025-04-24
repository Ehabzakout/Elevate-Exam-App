import { z } from "zod";

const addExamSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Exam name should be at least 3 characters" }),
  duration: z.coerce
    .number()
    .min(10, { message: "Exam time should be at least 10 min" })
    .max(30, { message: "Maximum exam time 30 min" }),
  numberOfQuestions: z.coerce
    .number()
    .min(10, { message: "Number of question should be at least 10 question" })
    .max(40, { message: "maximum number of questions is 40" }),
});

type TAddExam = z.infer<typeof addExamSchema>;
export { addExamSchema, type TAddExam };
