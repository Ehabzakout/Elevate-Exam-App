"use client";

import React from "react";
import { signIn } from "next-auth/react";
import googleIcon from "@assets/images/google.png";
import facebookIcon from "@assets/images/facebook.png";
import twitterIcon from "@assets/images/twitter.png";
import appleIcon from "@assets/images/apple.png";
import Image from "next/image";

//provider Icons for login
const icons = [
  { icon: googleIcon, provider: "google" },
  { icon: facebookIcon, provider: "facebook" },
  { icon: twitterIcon, provider: "twitter" },
  { icon: appleIcon, provider: "apple" },
];

// Component for signIn options
export default function LoginOption() {
  // execute signIn function depends on provider

  function handleSignIn(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLImageElement;
    const providerName = target.dataset.provider;
    signIn(providerName, { callbackUrl: "/" });
  }

  return (
    <>
      <div className="space-y-8">
        {/* Title */}

        <h1 className="relative mx-auto w-full text-center text-lg text-[#6C737F] before:absolute before:left-0 before:top-1/2 before:-z-[1] before:h-[1px] before:w-full before:bg-[#E7E7E7]">
          <span className="w-fit bg-white px-2">Or Continue with</span>
        </h1>

        {/* Generate login options icons*/}

        <div className="flex justify-center gap-8" onClick={handleSignIn}>
          {icons.map((provider) => (
            <Image
              key={provider.provider}
              data-provider={provider.provider}
              src={provider.icon}
              alt={provider.provider}
              className="flex size-16 cursor-pointer items-center justify-center rounded-2xl border border-[#E0E0E9] p-4 shadow-[0_18px_30px_0_#4461F21C]"
            />
          ))}
        </div>
      </div>
    </>
  );
}
