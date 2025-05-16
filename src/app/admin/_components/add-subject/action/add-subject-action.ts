"use server";
import getToken from "@/lib/utils/get-token";
import { APIResponse } from "@/lib/types/api";
import { TSubject } from "@/lib/types/question";
import { revalidateTag } from "next/cache";

// Add new subject action
export default async function submitAddDiploma(formData: FormData) {
  const token = await getToken();
  if (!token) throw new Error("You are not logged in ");
  const req = await fetch(`${process.env.BASIC_API}/subjects`, {
    method: "POST",
    headers: {
      token,
    },
    body: formData,
  });
  const response: APIResponse<TSubject> = await req.json();
  if (response.message === "success") revalidateTag("getAllSubjects");
  return response;
}
