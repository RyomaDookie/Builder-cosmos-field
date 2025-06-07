import { useState } from "react";
import { ChevronUp, ChevronDown, Clock, Lock } from "lucide-react";
import QRCode from "react-qr-code";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useTicketTimer } from "@/hooks/useTicketTimer";

export const ControlSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { currentTime } = useTicketTimer();

  // Static QR code value that doesn't change
  const qrCodeValue = "ATGARIHA4-27609/2068346-090821-05062025";

  return (
    <div className="mx-4 mt-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-din-medium text-gray-900">
                Controllo e validazione
              </span>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="mt-4 p-6 bg-gray-50 rounded-lg border">
            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-lg">
                <QRCode
                  value={qrCodeValue}
                  size={160}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>
            </div>

            {/* How to use QR link */}
            <div className="text-center mb-6">
              <a
                href="#"
                className="text-orange-500 font-din-medium underline text-sm"
              >
                Come usare i lettori QR
              </a>
            </div>

            {/* Timer and Lock */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-lg font-mono font-din-bold text-orange-500">
                  {currentTime}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 font-din-medium">277</span>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
