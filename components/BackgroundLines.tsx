export default function BackgroundLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 animate-drift opacity-[0.08]"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50,120 C120,40 220,220 380,140 S620,20 780,140 S980,220 1100,120"
          stroke="#E6FF01"
          strokeWidth="2"
        />
        <path
          d="M-50,280 C120,200 220,380 380,300 S620,180 780,300 S980,380 1100,280"
          stroke="#675DF0"
          strokeWidth="2"
        />
        <path
          d="M-50,440 C120,360 220,540 380,460 S620,340 780,460 S980,540 1100,440"
          stroke="#FF2E9C"
          strokeWidth="2"
        />
        <path
          d="M-50,600 C120,520 220,700 380,620 S620,500 780,620 S980,700 1100,600"
          stroke="#E6FF01"
          strokeWidth="2"
        />
        <path
          d="M-50,760 C120,680 220,860 380,780 S620,660 780,780 S980,860 1100,760"
          stroke="#675DF0"
          strokeWidth="2"
        />
        <path
          d="M-50,920 C120,840 220,1020 380,940 S620,820 780,940 S980,1020 1100,920"
          stroke="#FF2E9C"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
