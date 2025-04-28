"use server";

import getToken from "@/lib/actions/get-token";

export default async function submitExam(data: {
  answers: { questionId: string; correct: string }[];
  time: number;
}) {
  // Get token

  const token = await getToken();
  if (!token) throw new Error("You are not logged in");
  // Request to check the exam

  const res = await fetch(`${process.env.BASIC_API}/questions/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token,
    },
    body: JSON.stringify(data),
  });
  const response = await res.json();
  return response;
}
