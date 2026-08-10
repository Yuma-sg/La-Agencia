export default function BackgroundLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="topo-contours" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.0018 0.0018"
              numOctaves="2"
              seed="11"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.0018 0.0018;0.002 0.0019;0.0017 0.0019;0.0018 0.0018"
                dur="150s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feComponentTransfer in="noise" result="bands">
              <feFuncR type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1" />
              <feFuncG type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1" />
              <feFuncB type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1" />
            </feComponentTransfer>
            <feConvolveMatrix
              in="bands"
              order="3"
              kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1"
              result="edges"
            />
            <feColorMatrix
              in="edges"
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      1 0 0 0 0"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#topo-contours)" />
      </svg>
    </div>
  );
}
