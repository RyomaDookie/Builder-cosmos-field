export const TicketInfo = () => {
  return (
    <div className="px-6 py-4 bg-white border rounded-lg mx-4 mt-4">
      {/* ATM Logo Image */}
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets%2F813c0be13f574799bd9dcd3bfe4d23ea%2Fabfce77705164bc986ad19c0d884b7be?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F813c0be13f574799bd9dcd3bfe4d23ea%2Fabfce77705164bc986ad19c0d884b7be?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F813c0be13f574799bd9dcd3bfe4d23ea%2Fabfce77705164bc986ad19c0d884b7be?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F813c0be13f574799bd9dcd3bfe4d23ea%2Fabfce77705164bc986ad19c0d884b7be?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F813c0be13f574799bd9dcd3bfe4d23ea%2Fabfce77705164bc986ad19c0d884b7be?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F813c0be13f574799bd9dcd3bfe4d23ea%2Fabfce77705164bc986ad19c0d884b7be?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F813c0be13f574799bd9dcd3bfe4d23ea%2Fabfce77705164bc986ad19c0d884b7be?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F813c0be13f574799bd9dcd3bfe4d23ea%2Fabfce77705164bc986ad19c0d884b7be"
        alt="ATM Logo"
        className="w-[196px] h-[122px] object-cover object-center min-h-[20px] min-w-[20px] overflow-hidden"
        style={{
          aspectRatio: "4",
          scale: "0.6",
          margin: "-36px 20px 0 -36px",
        }}
      />

      {/* Ticket Type */}
      <h2
        className="text-2xl font-din-bold text-gray-900 mb-2"
        style={{ margin: "-30px 0 8px" }}
      >
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
