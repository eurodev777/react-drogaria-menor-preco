import React, { useState, useEffect } from "react";
import { Timer, Flame } from "lucide-react";

export function CountdownTimer() {
  // 4 minutes and 55 seconds = 295 seconds
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("drogaria_promo_time");
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (parsed > 0) return parsed;
    }
    return 295;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Loop back to 04:55 for continuous urgency feel
          localStorage.setItem("drogaria_promo_time", "295");
          return 295;
        }
        const nextTime = prev - 1;
        localStorage.setItem("drogaria_promo_time", nextTime.toString());
        return nextTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedHrs = hrs.toString().padStart(2, "0");
    const formattedMins = mins.toString().padStart(2, "0");
    const formattedSecs = secs.toString().padStart(2, "0");

    return `${formattedHrs}:${formattedMins}:${formattedSecs}`;
  };

  return (
    <div
      id="countdown-bar"
      className="bg-orange-500 text-white py-2.5 px-6 sticky top-0 z-50 shadow-md flex items-center justify-center gap-2 text-sm sm:text-base font-semibold transition-all duration-300 border-b border-orange-600/30"
    >
      <div className="flex items-center gap-1.5 animate-pulse">
        <Flame className="w-5 h-5 text-white fill-white" />
        <span className="tracking-wide uppercase text-[11px] sm:text-xs font-bold bg-orange-600 px-2.5 py-0.5 rounded-full border border-orange-400">
          Super Ofertas
        </span>
      </div>
      
      <span className="font-medium text-orange-50">Promoção acaba em:</span>
      
      <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-md font-mono text-white text-base sm:text-lg border border-white/10 shadow-inner">
        <Timer className="w-4 h-4 text-white" />
        <span>{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
}
