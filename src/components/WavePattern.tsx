export const WavePattern = () => {
  return (
    <div className="mx-4 my-4 overflow-hidden relative h-12">
      <style>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .pattern-layer-1 {
          animation: slideLeft 8s linear infinite;
          background-image: url('/zigzag-pattern.png');
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .pattern-layer-2 {
          animation: slideLeft 10s linear infinite;
          animation-delay: -2s;
          background-image: url('/zigzag-pattern.png');
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.7;
        }
        
        .pattern-layer-3 {
          animation: slideLeft 12s linear infinite;
          animation-delay: -4s;
          background-image: url('/zigzag-pattern.png');
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.4;
        }
      `}</style>

      {/* Layer 1 - Your exact image */}
      <div className="pattern-layer-1"></div>

      {/* Layer 2 - Same image, different speed */}
      <div className="pattern-layer-2"></div>

      {/* Layer 3 - Same image, slower speed */}
      <div className="pattern-layer-3"></div>
    </div>
  );
};
