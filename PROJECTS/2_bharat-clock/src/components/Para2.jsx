import React, { useState, useEffect } from "react";

const Para2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 rounded-lg">
      <p className="text-5xl md:text-6xl font-extrabold font-mono text-emerald-400 tracking-wide drop-shadow-lg">
        {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Para2;
