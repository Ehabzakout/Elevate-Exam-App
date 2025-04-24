"use server";

import getToken from "@/lib/actions/get-token";
import { TAddExam } from "@/lib/schema/add-exam-schema";

export default async function addExamAction(data: TAddExam) {
  const token = await getToken();
  const req = await fetch(`${process.env.BASIC_API}/exams`, {
    method: "POST",
    headers: { token, content_type: "applection/json" },
    body: JSON.stringify(data),
  });
  const response = req.json();

  return response;
}
