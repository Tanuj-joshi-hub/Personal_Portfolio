"use client";

import { useState } from "react";
import EnterSlider from "@/components/EnterSlider";

export default function HomePage() {
  const [progress, setProgress] = useState(0);

  const scale = 1 + progress * 3;

  const opacity =
    progress < 0.7
      ? 1
      : 1 - (progress - 0.7) / 0.3;

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Tree video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/Tree-poster.jpg"
      >
        <source src="/Tree.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Welcome content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        
        <h1
        className="text-center text-5xl font-calligraphy tracking-wide text-white sm:text-7xl"
        style={{
        transform: `scale(${scale})`,
        opacity,
        transition: "transform 80ms linear, opacity 80ms linear",
        }}
        >
          WELCOME
        </h1>

        <p className="mt-4 text-center text-sm uppercase tracking-[0.35em] text-white/70">
          By Tanuj Joshi
        </p>

        {/* Slider */}
        <div
        className="mt-10"
        style={{
        opacity: Math.max(0, 1 - progress * 0.8),
      }}
       >
        <EnterSlider onProgress={setProgress} />
        </div>

      </div>

    </main>
  );
}