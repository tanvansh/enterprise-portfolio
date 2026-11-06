"use client";

import dynamic from "next/dynamic";

// WebGL only exists in the browser: load the canvas client-side to avoid hydration errors.
const NetworkCanvas = dynamic(() => import("./NetworkCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 top-[-20%] h-[600px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(129,140,248,0.18),transparent)] blur-2xl" />
      <div className="fade-in absolute inset-0">
        <NetworkCanvas />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
}
