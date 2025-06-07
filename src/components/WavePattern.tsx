export const WavePattern = () => {
  return (
    <div className="mx-4 my-4 overflow-hidden relative h-10">
      <style>{`
        @keyframes scrollInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .infinite-zigzag {
          animation: scrollInfinite 8s linear infinite;
          background-image: url('/zigzag-pattern.png');
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .infinite-zigzag-2 {
          animation: scrollInfinite 10s linear infinite;
          animation-delay: -2s;
          background-image: url('/zigzag-pattern.png');
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.6;
        }
        
        .infinite-zigzag-3 {
          animation: scrollInfinite 12s linear infinite;
          animation-delay: -4s;
          background-image: url('/zigzag-pattern.png');
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.3;
        }
      `}</style>

      {/* First layer - main pattern */}
      <div className="infinite-zigzag"></div>

      {/* Second layer - offset for depth */}
      <div className="infinite-zigzag-2"></div>

      {/* Third layer - subtle background */}
      <div className="infinite-zigzag-3"></div>
    </div>
  );
};
