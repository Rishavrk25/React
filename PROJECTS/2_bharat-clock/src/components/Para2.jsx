import React, { useState, useEffect } from "react";

const para2 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Formatting the date and time
  const dateString = time.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const timeString = time.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="mt-8 bg-black/20 p-6 rounded-lg border border-white/10">
      <p className="text-2xl sm:text-5xl md:text-6xl text-white font-mono tracking-widest">{timeString}</p>
      <p className="text-slate-400 sm:text-md mt-3">{dateString}</p>
    </div>
  );
};

export default para2;
