"use server";
import getToken from "@/lib/actions/get-token";
import { TUpdateSubject } from "@/lib/types/all-subjects";
import { APIResponse } from "@/lib/types/api";
import { revalidateTag } from "next/cache";

// Add new subject action
export default async function updateSubject(formData: FormData, id: string) {
  const token = await getToken();
  const req = await fetch(`${process.env.BASIC_API}/subjects/${id}`, {
    method: "PUT",
    headers: {
      token,
    },
    body: formData,
  });
  const response: APIResponse<TUpdateSubject> = await req.json();
  if (response.message === "success") revalidateTag("getAllSubjects");
  return response;
}
