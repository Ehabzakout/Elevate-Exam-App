"use server";

import getToken from "@/lib/utils/get-token";

// Delete account action
export default async function deleteMyAccount() {
  // Get token
  const token = await getToken();

  // if token exist execute action
  if (token) {
    const req = await fetch(`${process.env.BASIC_API}/auth/deleteMe`, {
      method: "DELETE",
      headers: { token },
    });
    const response = await req.json();

    return response;
  }

  return { message: "Can't Delete Your Account" };
}
