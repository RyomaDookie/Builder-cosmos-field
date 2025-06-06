import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TicketHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <Button variant="ghost" size="sm" className="p-1">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </Button>
      <h1 className="text-lg font-medium text-gray-900">Ticket attivo</h1>
      <div className="w-8"></div>
    </div>
  );
};
