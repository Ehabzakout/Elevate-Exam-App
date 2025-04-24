import React from "react";
import LoginOption from "../_components/login-option";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="ml-32 mt-40 max-w-md space-y-8">
        {children}
        <LoginOption />
      </div>
    </>
  );
}
