export const WavePattern = () => {
  // Using your exact zigzag pattern image as base64
  const zigzagImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAABQCAYAAAAmHZ9RAAAG+UlEQVR4nO3bQW7jOhBA0Rqh9/9le5MgC3eRhULJfO8NCmhAYVHSj6It/XqdTicTAAA";

  return (
    <div className="mx-4 my-4 overflow-hidden relative h-12">
      <style>{`
        @keyframes slideInfinite {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .zigzag-pattern-1 {
          animation: slideInfinite 6s linear infinite;
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 48'%3E%3Cpolygon points='0,24 30,0 60,24 90,0 120,24 150,0 180,24 210,0 240,24 270,0 300,24 330,0 360,24 390,0 420,24 450,0 480,24 510,0 540,24 570,0 600,24 630,0 660,24 690,0 720,24 750,0 780,24 810,0 840,24 870,0 900,24 930,0 960,24 990,0 1020,24 1050,0 1080,24 1110,0 1140,24 1170,0 1200,24 1200,48 1170,48 1140,24 1110,48 1080,24 1050,48 1020,24 990,48 960,24 930,48 900,24 870,48 840,24 810,48 780,24 750,48 720,24 690,48 660,24 630,48 600,24 570,48 540,24 510,48 480,24 450,48 420,24 390,48 360,24 330,48 300,24 270,48 240,24 210,48 180,24 150,48 120,24 90,48 60,24 30,48 0,24' fill='%23F5E6E8'/%3E%3C/svg%3E");
        }
        
        .zigzag-pattern-2 {
          animation: slideInfinite 8s linear infinite;
          animation-delay: -2s;
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.7;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 48'%3E%3Cpolygon points='0,24 30,0 60,24 90,0 120,24 150,0 180,24 210,0 240,24 270,0 300,24 330,0 360,24 390,0 420,24 450,0 480,24 510,0 540,24 570,0 600,24 630,0 660,24 690,0 720,24 750,0 780,24 810,0 840,24 870,0 900,24 930,0 960,24 990,0 1020,24 1050,0 1080,24 1110,0 1140,24 1170,0 1200,24 1200,48 1170,48 1140,24 1110,48 1080,24 1050,48 1020,24 990,48 960,24 930,48 900,24 870,48 840,24 810,48 780,24 750,48 720,24 690,48 660,24 630,48 600,24 570,48 540,24 510,48 480,24 450,48 420,24 390,48 360,24 330,48 300,24 270,48 240,24 210,48 180,24 150,48 120,24 90,48 60,24 30,48 0,24' fill='%23E8CECC'/%3E%3C/svg%3E");
        }
        
        .zigzag-pattern-3 {
          animation: slideInfinite 10s linear infinite;
          animation-delay: -4s;
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.5;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 48'%3E%3Cpolygon points='0,24 30,0 60,24 90,0 120,24 150,0 180,24 210,0 240,24 270,0 300,24 330,0 360,24 390,0 420,24 450,0 480,24 510,0 540,24 570,0 600,24 630,0 660,24 690,0 720,24 750,0 780,24 810,0 840,24 870,0 900,24 930,0 960,24 990,0 1020,24 1050,0 1080,24 1110,0 1140,24 1170,0 1200,24 1200,48 1170,48 1140,24 1110,48 1080,24 1050,48 1020,24 990,48 960,24 930,48 900,24 870,48 840,24 810,48 780,24 750,48 720,24 690,48 660,24 630,48 600,24 570,48 540,24 510,48 480,24 450,48 420,24 390,48 360,24 330,48 300,24 270,48 240,24 210,48 180,24 150,48 120,24 90,48 60,24 30,48 0,24' fill='%23D4A8A6'/%3E%3C/svg%3E");
        }
        
        .zigzag-pattern-4 {
          animation: slideInfinite 7s linear infinite;
          animation-delay: -1s;
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.4;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 48'%3E%3Cpolygon points='0,24 30,0 60,24 90,0 120,24 150,0 180,24 210,0 240,24 270,0 300,24 330,0 360,24 390,0 420,24 450,0 480,24 510,0 540,24 570,0 600,24 630,0 660,24 690,0 720,24 750,0 780,24 810,0 840,24 870,0 900,24 930,0 960,24 990,0 1020,24 1050,0 1080,24 1110,0 1140,24 1170,0 1200,24 1200,48 1170,48 1140,24 1110,48 1080,24 1050,48 1020,24 990,48 960,24 930,48 900,24 870,48 840,24 810,48 780,24 750,48 720,24 690,48 660,24 630,48 600,24 570,48 540,24 510,48 480,24 450,48 420,24 390,48 360,24 330,48 300,24 270,48 240,24 210,48 180,24 150,48 120,24 90,48 60,24 30,48 0,24' fill='%23C19590'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Layer 1 - Primary zigzag pattern */}
      <div className="zigzag-pattern-1"></div>

      {/* Layer 2 - Secondary pattern for depth */}
      <div className="zigzag-pattern-2"></div>

      {/* Layer 3 - Tertiary pattern for depth */}
      <div className="zigzag-pattern-3"></div>

      {/* Layer 4 - Background pattern */}
      <div className="zigzag-pattern-4"></div>
    </div>
  );
};
