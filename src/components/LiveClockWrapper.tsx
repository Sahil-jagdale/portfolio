'use client';

import { useEffect, useState } from "react";

export default function LiveClockWrapper() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time for Asia/Kolkata timezone
  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  return (
    <div className="flex gap-2 justify-center">
      <span suppressHydrationWarning>{formattedTime}</span>
    </div>
  );
}