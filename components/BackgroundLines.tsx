const lines = [
  { d: "M-50,120 C120,40 220,220 380,140 S620,20 780,140 S980,220 1100,120", stroke: "#E6FF01", anim: "drift-a", duration: "11s", delay: "0s" },
  { d: "M-50,280 C120,200 220,380 380,300 S620,180 780,300 S980,380 1100,280", stroke: "#675DF0", anim: "drift-b", duration: "14s", delay: "-4s" },
  { d: "M-50,440 C120,360 220,540 380,460 S620,340 780,460 S980,540 1100,440", stroke: "#FF2E9C", anim: "drift-c", duration: "9s", delay: "-2s" },
  { d: "M-50,600 C120,520 220,700 380,620 S620,500 780,620 S980,700 1100,600", stroke: "#E6FF01", anim: "drift-c", duration: "16s", delay: "-7s" },
  { d: "M-50,760 C120,680 220,860 380,780 S620,660 780,780 S980,860 1100,760", stroke: "#675DF0", anim: "drift-a", duration: "10s", delay: "-5s" },
  { d: "M-50,920 C120,840 220,1020 380,940 S620,820 780,940 S980,1020 1100,920", stroke: "#FF2E9C", anim: "drift-b", duration: "13s", delay: "-1s" },
];

export default function BackgroundLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 opacity-[0.1]"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map((line, i) => (
          <path
            key={i}
            d={line.d}
            stroke={line.stroke}
            strokeWidth="2"
            style={{
              animation: `${line.anim} ${line.duration} ease-in-out infinite`,
              animationDelay: line.delay,
              transformOrigin: "500px 500px",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
