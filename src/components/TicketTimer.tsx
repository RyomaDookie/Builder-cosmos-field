import { useState, useEffect } from "react";

export const TicketTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState("1h");
  const [currentTime, setCurrentTime] = useState("09:22:21");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);

      // This would normally calculate actual remaining time
      // For demo purposes, we'll keep it static
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4">
      <div className="bg-green-600 text-white rounded-lg p-4">
        <div className="text-sm opacity-90 mb-1">Tempo restante:</div>
        <div className="text-xl font-bold mb-3">{timeRemaining}</div>
        <div className="text-sm opacity-90">Attivato il:</div>
        <div className="text-base font-medium">05/06/2025 - 08:52</div>
      </div>
    </div>
  );
};
