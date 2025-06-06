import { TicketHeader } from "@/components/TicketHeader";
import { TicketInfo } from "@/components/TicketInfo";
import { ControlSection } from "@/components/ControlSection";
import { WavePattern } from "@/components/WavePattern";
import { TicketTimer } from "@/components/TicketTimer";
import { TicketDetails } from "@/components/TicketDetails";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <TicketHeader />

      {/* Ticket Information */}
      <TicketInfo />

      {/* Control and Validation Section */}
      <ControlSection />

      {/* Decorative Wave Pattern */}
      <WavePattern />

      {/* Timer Section */}
      <TicketTimer />

      {/* Ticket Details */}
      <TicketDetails />

      {/* Bottom spacer for mobile navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;
