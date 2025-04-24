import { TSubmitAction } from "@/lib/types/submit-function";
import { useRouter } from "next/navigation";

export default function useSubmitAction(submit: string) {
  const router = useRouter();
  const submitFunction: TSubmitAction = {
    // Submit forgot password page

    "Send Code": {
      apiUrl: "auth/forgotPassword",
      method: "POST",
      action: () => router.push("/auth/login/verify-code"),
    },

    // Submit verify password page
    Verify: {
      apiUrl: "auth/verifyResetCode",
      method: "POST",
      action: () => router.push("/auth/login/set-password"),
    },

    //Submit set password page
    "Set Password": {
      apiUrl: "auth/resetPassword",
      method: "PUT",
      action: () => router.push("/auth/login"),
    },

    // Submit signup page
    "Create Account": {
      apiUrl: "auth/signup",
      method: "POST",
      action: () => router.push("/auth/login"),
    },
  };

  return {
    apiUrl: submitFunction[submit]?.apiUrl,
    method: submitFunction[submit]?.method,
    action: () => submitFunction[submit]?.action(),
  };
}
