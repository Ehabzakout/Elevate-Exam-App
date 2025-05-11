import { z } from "zod";
import { TExamQuestion } from "../types/question";

export default function questionsSchema(questions: TExamQuestion[]) {
  const schema = z.object(
    questions.reduce(
      (acc, curr) => {
        const questionAnswer = curr.answers.map((answer) => answer.key) as [
          string,
          ...string[],
        ];
        acc[curr._id] = z.enum(questionAnswer, {
          message: "You should choose one answer",
        });
        return acc;
      },
      {} as Record<string, z.ZodTypeAny>,
    ),
  );

  return { schema };
}
