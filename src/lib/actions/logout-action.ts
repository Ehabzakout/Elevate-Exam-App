import { APIResponse } from "../types/api";
import getToken from "./get-token";

export default async function logoutAction() {
  const token = await getToken();

  if (token) {
    const req = await fetch("https://exam.elevateegy.com/api/v1/auth/logout", {
      headers: { token },
    });
    const response: APIResponse<{ message: string }> = await req.json();
    if (response.message === "success") return response.message;
  }
}
