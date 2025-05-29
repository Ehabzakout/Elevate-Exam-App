import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="ml-32 mt-40 max-w-md space-y-8">{children}</div>
    </>
  );
}
