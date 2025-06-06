export const WavePattern = () => {
  return (
    <div className="mx-4 my-4">
      <svg
        width="100%"
        height="40"
        viewBox="0 0 400 40"
        className="opacity-30"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 Q100,5 200,20 T400,20 Q300,35 200,20 T0,20"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="2"
        />
        <path
          d="M0,25 Q100,10 200,25 T400,25 Q300,40 200,25 T0,25"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="2"
        />
        <path
          d="M0,15 Q100,0 200,15 T400,15 Q300,30 200,15 T0,15"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
