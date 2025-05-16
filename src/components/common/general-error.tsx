import Image from "next/image";
import React from "react";
import errorPhoto from "@assets/images/error.png";

export default function GeneralError() {
  return (
    <div className="mx-auto w-fit">
      {/* Icon */}
      <Image src={errorPhoto} alt="Error Photo" height={300} />

      {/* Message */}
      <p className="mt-4 text-center text-xl font-bold">
        Sorry something went wrong
      </p>
    </div>
  );
}
