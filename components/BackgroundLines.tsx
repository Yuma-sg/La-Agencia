const noiseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise"/><feComponentTransfer><feFuncR type="linear" slope="2.2" intercept="-0.6"/><feFuncG type="linear" slope="2.2" intercept="-0.6"/><feFuncB type="linear" slope="2.2" intercept="-0.6"/></feComponentTransfer></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`;
const noiseDataUri = `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`;

export default function BackgroundLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 bg-background"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.15]"
        style={{
          backgroundImage: noiseDataUri,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />
    </div>
  );
}
