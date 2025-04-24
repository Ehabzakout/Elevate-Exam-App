"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getToken() {
  // Get Token

  const cookiesToken = cookies().get("next-auth.session-token")?.value;
  const token = await decode({
    token: cookiesToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  if (token) return token.token;
  else throw new Error("You are not logged in");
}
