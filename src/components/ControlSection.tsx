import { useState } from "react";
import { ChevronUp, ChevronDown, Clock, Lock } from "lucide-react";
import QRCode from "react-qr-code";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const ControlSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mx-4 mt-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-medium text-gray-900">
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
                  value="ATGARIHA4-27609/2068346-09:22:21-05/06/2025"
                  size={160}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>
            </div>

            {/* How to use QR link */}
            <div className="text-center mb-6">
              <a
                href="#"
                className="text-orange-500 font-medium underline text-sm"
              >
                Come usare i lettori QR
              </a>
            </div>

            {/* Timer and Lock */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-lg font-mono font-bold text-gray-900">
                  09:22:21
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 font-medium">277</span>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
