export const WavePattern = () => {
  return (
    <div className="mx-4 my-4 overflow-hidden relative h-10">
      <style>{`
        @keyframes moveZigzag {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .zigzag-line-1 {
          animation: moveZigzag 4s linear infinite;
        }
        
        .zigzag-line-2 {
          animation: moveZigzag 5s linear infinite;
          animation-delay: -1s;
        }
        
        .zigzag-line-3 {
          animation: moveZigzag 6s linear infinite;
          animation-delay: -2s;
        }
        
        .zigzag-line-4 {
          animation: moveZigzag 4.5s linear infinite;
          animation-delay: -3s;
        }
      `}</style>

      {/* Multiple animated zigzag layers with different speeds and colors */}

      {/* Layer 1 - Lightest pink/beige */}
      <div className="zigzag-line-1 absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 40'%3E%3Cpath d='M0,20 L20,8 L40,20 L60,8 L80,20 L100,8 L120,20 L140,8 L160,20 L180,8 L200,20 L220,8 L240,20 L260,8 L280,20 L300,8 L320,20 L340,8 L360,20 L380,8 L400,20 L420,8 L440,20 L460,8 L480,20 L500,8 L520,20 L540,8 L560,20 L580,8 L600,20 L620,8 L640,20 L660,8 L680,20 L700,8 L720,20 L740,8 L760,20 L780,8 L800,20' fill='none' stroke='%23F5EDE8' stroke-width='3'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "800px 40px",
          }}
        />
      </div>

      {/* Layer 2 - Light pink/beige */}
      <div className="zigzag-line-2 absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 40'%3E%3Cpath d='M0,25 L20,13 L40,25 L60,13 L80,25 L100,13 L120,25 L140,13 L160,25 L180,13 L200,25 L220,13 L240,25 L260,13 L280,25 L300,13 L320,25 L340,13 L360,25 L380,13 L400,25 L420,13 L440,25 L460,13 L480,25 L500,13 L520,25 L540,13 L560,25 L580,13 L600,25 L620,13 L640,25 L660,13 L680,25 L700,13 L720,25 L740,13 L760,25 L780,13 L800,25' fill='none' stroke='%23E8D5D0' stroke-width='2.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "800px 40px",
          }}
        />
      </div>

      {/* Layer 3 - Medium pink/beige */}
      <div className="zigzag-line-3 absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 40'%3E%3Cpath d='M0,30 L20,18 L40,30 L60,18 L80,30 L100,18 L120,30 L140,18 L160,30 L180,18 L200,30 L220,18 L240,30 L260,18 L280,30 L300,18 L320,30 L340,18 L360,30 L380,18 L400,30 L420,18 L440,30 L460,18 L480,30 L500,18 L520,30 L540,18 L560,30 L580,18 L600,30 L620,18 L640,30 L660,18 L680,30 L700,18 L720,30 L740,18 L760,30 L780,18 L800,30' fill='none' stroke='%23D4B5B0' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "800px 40px",
          }}
        />
      </div>

      {/* Layer 4 - Darkest pink/beige */}
      <div className="zigzag-line-4 absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 40'%3E%3Cpath d='M0,35 L20,23 L40,35 L60,23 L80,35 L100,23 L120,35 L140,23 L160,35 L180,23 L200,35 L220,23 L240,35 L260,23 L280,35 L300,23 L320,35 L340,23 L360,35 L380,23 L400,35 L420,23 L440,35 L460,23 L480,35 L500,23 L520,35 L540,23 L560,35 L580,23 L600,35 L620,23 L640,35 L660,23 L680,35 L700,23 L720,35 L740,23 L760,35 L780,23 L800,35' fill='none' stroke='%23C19590' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "800px 40px",
          }}
        />
      </div>
    </div>
  );
};
