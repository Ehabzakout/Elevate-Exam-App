import { z } from "zod";

const addSubjectSchema = z.object({
  icon: z.any().refine((file) => file instanceof File, {
    message: "You should add photo",
  }),
  name: z
    .string()
    .min(4, { message: "name of subject must be more than 3 characters" }),
});

type TAddDiploma = z.infer<typeof addSubjectSchema>;
export { addSubjectSchema, type TAddDiploma };
