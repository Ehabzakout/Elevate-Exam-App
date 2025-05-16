import React from "react";
import Image from "next/image";
import img from "@assets/images/bro.png";

//  Right side component for authentication page
export default function AuthMainPage() {
  return (
    <>
      <div
        className={`h-full min-h-screen rounded-r-[100px] bg-authBackground p-20 pr-36 shadow-[0_5px_100px_0_#0000001A]`}
      >
        {/* Text */}
        <div className="mb-20">
          <h1 className="mb-2 flex flex-col text-5xl font-bold leading-[150%]">
            Welcome to
            <span className="text-6xl leading-[150%] text-primary">
              Elevate
            </span>
          </h1>
          <p className="break-words text-lg leading-10">
            Quidem autem voluptatibus qui quaerat aspernatur architecto natus
          </p>
        </div>

        {/* Image */}
        <div className="mb-20">
          <Image src={img} alt="photo" />
        </div>
      </div>
    </>
  );
}
