import { useEffect, useState } from "react";
import timerIcon from "@assets/images/Timer-icon.png";
import Image from "next/image";
import clsx from "clsx";
import { TTimer } from "@/lib/types/components-props";

// Timer component
export default function Timer({ duration, setTimeOver }: TTimer) {
  // time per milleSeconds

  const durationPerMilliseconds = duration * 60 * 1000;

  // State for render timer

  const [time, setTime] = useState(durationPerMilliseconds);

  // transfer time to minutes and seconds

  const min = Math.floor(time / 1000 / 60);
  const sec = Math.floor(time / 1000) % 60;

  // use effect for run timer function

  useEffect(() => {
    const timer = setInterval(() => {
      if (time === 0) {
        setTimeOver(true);
        return;
      }
      setTime((prev) => prev - 1000);
    }, 1000);

    // Unmount timer and clear interval

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <>
      {/* Timer UI */}
      <div
        className={clsx("flex items-center gap-2 text-xl text-[#11CE19]", {
          "text-red-500": min < 1,
        })}
      >
        {/* time icon */}
        <Image src={timerIcon} width={24} height={30} alt="Timer" />

        {/* timer */}
        <div>
          {min}:{sec < 10 && "0"}
          {sec}
        </div>
      </div>
    </>
  );
}
