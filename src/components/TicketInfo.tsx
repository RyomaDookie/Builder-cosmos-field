export const TicketInfo = () => {
  return (
    <div className="px-6 py-4 bg-white border rounded-lg mx-4 mt-4">
      {/* ATM Logo */}
      <div className="flex items-center mb-4">
        <div className="bg-orange-500 text-white px-3 py-1 rounded-sm text-sm font-din-bold">
          ATM
        </div>
        <div className="ml-2 bg-orange-500 h-2 w-8 rounded-sm"></div>
      </div>

      {/* Ticket Type */}
      <h2 className="text-2xl font-din-bold text-gray-900 mb-2">
        90 minuti - Zone Mi4-Mi6
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm font-din-medium leading-relaxed">
        Con questo biglietto fai viaggi illimitati entro le zone e nei tempi di
        validità previsti dalla tariffa.
      </p>
    </div>
  );
};
