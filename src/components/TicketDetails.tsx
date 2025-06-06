import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const TicketDetails = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="mx-4 mt-4 mb-8">
      {/* Issue Date */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-1">Emesso il:</div>
        <div className="text-base font-medium text-gray-900">
          05/06/2025 - 08:39
        </div>
      </div>

      {/* Cost */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl font-medium text-gray-900">Costo</div>
        <div className="text-xl font-bold text-gray-900">2,20 €</div>
      </div>

      {/* Details Section */}
      <Collapsible open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-gray-900">
              Dettagli
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-orange-500 font-medium">
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
              <span className="text-sm text-gray-600">Codice Ticket:</span>
              <span className="text-sm font-mono text-gray-900">
                27609/2068346
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">PNR:</span>
              <span className="text-sm font-mono text-gray-900">ATGARIHA4</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
