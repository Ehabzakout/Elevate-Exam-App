import { useEffect, useRef } from "react";

export default function useStartTimer() {
  // Use ref to start and store exam time without effected due to re-renders

  const startTimer = useRef<NodeJS.Timeout | null>(null);
  const time = useRef(0);

  useEffect(() => {
    startTimer.current = setInterval(() => {
      time.current += 1000;
    }, 1000);

    return () => clearInterval(startTimer.current!);
  }, []);

  return { startTimer, time };
}
