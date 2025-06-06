import { useTicketTimer } from "@/hooks/useTicketTimer";

export const TicketTimer = () => {
  const { remainingTime, activationTime, isExpired } = useTicketTimer();

  return (
    <div className="mx-4">
      <div
        className={`text-white rounded-lg p-4 ${isExpired ? "bg-red-600" : "bg-green-600"}`}
      >
        <div className="text-sm opacity-90 mb-1">
          {isExpired ? "Biglietto scaduto" : "Tempo restante:"}
        </div>
        <div className="text-xl font-bold mb-3">
          {isExpired ? "0m" : remainingTime}
        </div>
        <div className="text-sm opacity-90">Attivato il:</div>
        <div className="text-base font-medium">{activationTime}</div>
      </div>
    </div>
  );
};
