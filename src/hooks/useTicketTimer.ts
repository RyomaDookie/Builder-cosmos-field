import { useState, useEffect } from "react";

interface TicketTimer {
  currentTime: string;
  remainingTime: string;
  activationTime: string;
  activationDate: string;
  isExpired: boolean;
}

export const useTicketTimer = (): TicketTimer => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activationTime] = useState<Date>(() => {
    // Set activation time to 10 minutes before current time
    const now = new Date();
    return new Date(now.getTime() - 10 * 60 * 1000);
  });

  const [ticketData, setTicketData] = useState<TicketTimer>({
    currentTime: "",
    remainingTime: "",
    activationTime: "",
    activationDate: "",
    isExpired: false,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();

      // Format current time
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const currentTimeStr = `${hours}:${minutes}:${seconds}`;

      // Calculate expiration time (90 minutes from activation)
      const expirationTime = new Date(
        activationTime.getTime() + 90 * 60 * 1000,
      );

      // Calculate remaining time
      const remainingMs = expirationTime.getTime() - now.getTime();
      const isExpired = remainingMs <= 0;

      let remainingTimeStr = "0m";
      if (!isExpired) {
        const totalRemainingMinutes = Math.floor(remainingMs / (1000 * 60));
        const remainingHours = Math.floor(totalRemainingMinutes / 60);
        const remainingMins = totalRemainingMinutes % 60;

        if (remainingHours > 0) {
          if (remainingMins > 0) {
            remainingTimeStr = `${remainingHours}h ${remainingMins}m`;
          } else {
            remainingTimeStr = `${remainingHours}h`;
          }
        } else {
          remainingTimeStr = `${remainingMins}m`;
        }
      }

      // Format activation time and date
      const activationHours = activationTime
        .getHours()
        .toString()
        .padStart(2, "0");
      const activationMinutes = activationTime
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const activationTimeStr = `${activationHours}:${activationMinutes}`;

      const day = activationTime.getDate().toString().padStart(2, "0");
      const month = (activationTime.getMonth() + 1).toString().padStart(2, "0");
      const year = activationTime.getFullYear();
      const activationDateStr = `${day}/${month}/${year}`;

      setTicketData({
        currentTime: currentTimeStr,
        remainingTime: remainingTimeStr,
        activationTime: `${activationDateStr} - ${activationTimeStr}`,
        activationDate: `${day}/${month}/${year} - ${activationTimeStr}`,
        isExpired,
      });
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [activationTime]);

  return ticketData;
};
