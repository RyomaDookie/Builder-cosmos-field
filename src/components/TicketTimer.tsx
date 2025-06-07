import { useTicketTimer } from "@/hooks/useTicketTimer";

export const TicketTimer = () => {
  const { remainingTime, activationTime, isExpired } = useTicketTimer();

  return (
    <div className="mx-4">
      <div
        className={`text-white rounded-lg p-4 ${isExpired ? "bg-red-600" : "bg-green-600"}`}
      >
        <div className="text-sm opacity-90 mb-3 font-din-medium">
          {isExpired ? "Biglietto scaduto" : `Tempo restante: `}
          <span className="text-xl font-din-bold">
            {isExpired ? "0m" : remainingTime}
          </span>
        </div>
        <div className="text-sm opacity-90 font-din-medium">
          Attivato il:{" "}
          <span className="text-base font-din-bold">{activationTime}</span>
        </div>
      </div>
    </div>
  );
};
