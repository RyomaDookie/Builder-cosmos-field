import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useTicketTimer } from "@/hooks/useTicketTimer";

export const TicketDetails = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { activationDate } = useTicketTimer();

  // Calculate issue time (5 minutes before activation)
  const issueDate = new Date();
  issueDate.setMinutes(issueDate.getMinutes() - 15); // 10 min activation + 5 min before
  const issueDay = issueDate.getDate().toString().padStart(2, "0");
  const issueMonth = (issueDate.getMonth() + 1).toString().padStart(2, "0");
  const issueYear = issueDate.getFullYear();
  const issueHours = issueDate.getHours().toString().padStart(2, "0");
  const issueMinutes = issueDate.getMinutes().toString().padStart(2, "0");
  const issueDateStr = `${issueDay}/${issueMonth}/${issueYear} - ${issueHours}:${issueMinutes}`;

  return (
    <div className="mx-4 mt-4 mb-8">
      {/* Issue Date */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-1 font-din-medium">
          Emesso il:
        </div>
        <div className="text-base font-din-medium text-gray-900">
          {issueDateStr}
        </div>
      </div>

      {/* Cost */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl font-din-medium text-gray-900">Costo</div>
        <div className="text-xl font-din-bold text-gray-900">2,20 €</div>
      </div>

      {/* Details Section */}
      <Collapsible open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between">
            <span className="text-base font-din-medium text-gray-900">
              Dettagli
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-orange-500 font-din-medium">
                Leggi tutto
              </span>
              <ChevronDown
                className={`w-4 h-4 text-orange-500 transition-transform ${isDetailsOpen ? "rotate-180" : ""}`}
              />
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-din-medium">
                Codice Ticket:
              </span>
              <span className="text-sm font-mono font-din-medium text-gray-900">
                27609/2068346
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-din-medium">
                PNR:
              </span>
              <span className="text-sm font-mono font-din-medium text-gray-900">
                ATGARIHA4
              </span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
