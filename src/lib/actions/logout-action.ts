"use server";

import { APIResponse } from "../types/api";
import getToken from "../utils/get-token";

export default async function logoutAction() {
  const token = await getToken();

  const req = await fetch(`${process.env.BASIC_API}/auth/logout`, {
    headers: { token: token || "" },
  });

  const response: APIResponse<{ message: string }> = await req.json();

  return response.message; // Successful and error cases must return to be catched or thrown whenever needed
}
