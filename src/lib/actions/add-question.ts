"use server";

import { TAddQuestion } from "../schema/add-question-schema";
import getToken from "./get-token";

export async function addQuestion(
  data: Omit<TAddQuestion, "questionStyle"> & { subject: string; exam: string },
) {
  const token = await getToken();
  if (token) {
    const req = await fetch(`${process.env.BASIC_API}/questions`, {
      method: "POST",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await req.json();
    return response;
  }
}
