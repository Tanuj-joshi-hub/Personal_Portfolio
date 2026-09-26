"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface EnterSliderProps {
  onProgress?: (progress: number) => void;
}

export default function EnterSlider({ onProgress }: EnterSliderProps) {
  const router = useRouter();

  const trackRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef(false);

  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    const track = trackRef.current;

    if (!track || completedRef.current) return;

    const rect = track.getBoundingClientRect();

    const knobSize = 48;
    const maxPosition = rect.width - knobSize;

    // Calculate position from RIGHT → LEFT
    const distanceFromRight =
      rect.right - clientX - knobSize / 2;

    const newPosition = Math.max(
      0,
      Math.min(distanceFromRight, maxPosition)
    );

    setPosition(newPosition);

    const progress =
      maxPosition > 0 ? newPosition / maxPosition : 0;

    onProgress?.(progress);

    // Slider completed
    if (progress >= 0.9) {
      completedRef.current = true;
      setPosition(maxPosition);
      onProgress?.(1);
      setTimeout(() => {
        router.push("/portfolio");
      }, 300);
    }
  };

  const handlePointerDown = (
    e: React.PointerEvent<HTMLButtonElement>
  ) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (
    e: React.PointerEvent<HTMLButtonElement>
  ) => {
    if (dragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = () => {
    setDragging(false);

    // If slider wasn't completed, return it to the right
    if (!completedRef.current) {
      setPosition(0);
      onProgress?.(0)
    }
  };

  return (
    <div
      ref={trackRef}
      className="relative h-14 w-[min(90vw,420px)] overflow-hidden rounded-full border border-white/30 bg-black/30 p-1 backdrop-blur-md"
    >
      {/* Progress area */}
      <div
        className="absolute right-1 top-1 bottom-1 rounded-full bg-white/10"
        style={{
          width: `${position + 48}px`,
        }}
      />

      {/* Text */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-[0.3em] text-white/70">
        Slide to enter
      </span>

      {/* Slider handle */}
      <button
        type="button"
        aria-label="Slide to enter portfolio"
        className="absolute top-1 flex h-12 w-12 touch-none select-none items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform"
        style={{
          right: `${position + 4}px`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        ←
      </button>
    </div>
  );
}