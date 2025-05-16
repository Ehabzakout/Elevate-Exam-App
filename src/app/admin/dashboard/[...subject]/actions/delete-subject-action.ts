"use server";

import getToken from "@/lib/utils/get-token";
import { revalidateTag } from "next/cache";

export default async function deleteSubjectAction(id: string) {
  const token = await getToken();
  if (!token) throw new Error("You are not logged in ");
  const req = await fetch(`${process.env.BASIC_API}/subjects/${id}`, {
    method: "DELETE",
    headers: { token },
  });
  const response = await req.json();
  if (response.message === "success") revalidateTag("getAllSubjects");
  return response;
}
