export const WavePattern = () => {
  return (
    <div className="mx-4 my-4 overflow-hidden">
      <svg
        width="100%"
        height="40"
        viewBox="0 0 400 40"
        className="opacity-30"
        preserveAspectRatio="none"
      >
        <defs>
          <style>
            {`
              @keyframes moveWave {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
              
              .wave-line {
                animation: moveWave 3s linear infinite;
              }
              
              .wave-line-2 {
                animation: moveWave 3.5s linear infinite;
                animation-delay: -1s;
              }
              
              .wave-line-3 {
                animation: moveWave 4s linear infinite;
                animation-delay: -2s;
              }
            `}
          </style>
        </defs>

        {/* Multiple animated wave lines with different speeds */}
        <g className="wave-line">
          <path
            d="M0,20 Q100,5 200,20 T400,20"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="2"
          />
        </g>

        <g className="wave-line-2">
          <path
            d="M0,25 Q100,10 200,25 T400,25"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="2"
          />
        </g>

        <g className="wave-line-3">
          <path
            d="M0,15 Q100,0 200,15 T400,15"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="2"
          />
        </g>

        {/* Additional decorative elements for more visual interest */}
        <g className="wave-line" style={{ animationDelay: "-0.5s" }}>
          <circle cx="50" cy="20" r="2" fill="#d1d5db" opacity="0.5" />
          <circle cx="150" cy="25" r="1.5" fill="#d1d5db" opacity="0.7" />
          <circle cx="250" cy="15" r="1" fill="#d1d5db" opacity="0.6" />
          <circle cx="350" cy="30" r="1.5" fill="#d1d5db" opacity="0.5" />
        </g>

        <g className="wave-line-2" style={{ animationDelay: "-1.5s" }}>
          <circle cx="75" cy="30" r="1" fill="#d1d5db" opacity="0.4" />
          <circle cx="175" cy="10" r="2" fill="#d1d5db" opacity="0.6" />
          <circle cx="275" cy="25" r="1.5" fill="#d1d5db" opacity="0.5" />
        </g>

        <g className="wave-line-3" style={{ animationDelay: "-2.5s" }}>
          <circle cx="100" cy="15" r="1" fill="#d1d5db" opacity="0.5" />
          <circle cx="200" cy="30" r="1.5" fill="#d1d5db" opacity="0.4" />
          <circle cx="300" cy="20" r="1" fill="#d1d5db" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};
