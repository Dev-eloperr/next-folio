"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { RefObject } from "react";

type CountTickerProps = {
  start: number;
  end: number;
  duration: number; // milliseconds
  caption: string;
  /**
   * Optional: pass a ref to the outer section that should trigger the animation
   * when it enters the viewport. If omitted, the component observes itself.
   */
  observeRef?: RefObject<Element>;
};

export default function CountTicker({
  start,
  end,
  duration,
  caption,
  observeRef,
}: CountTickerProps) {
  const [count, setCount] = useState(start);
  const [srMessage, setSrMessage] = useState("");
  const id = useId();

  const rootRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const hasRunRef = useRef(false);
  const startedRef = useRef(false);
  const reduceMotionRef = useRef(false);

  // Respect prefers-reduced-motion (or invalid duration)
  useEffect(() => {
    if (typeof window !== "undefined") {
      reduceMotionRef.current =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    }
    if (reduceMotionRef.current || duration <= 0 || end === start) {
      setCount(end);
      setSrMessage(`${caption}: ${end}`);
      hasRunRef.current = true;
    }
  }, [end, start, duration, caption]);

  const startAnimation = () => {
    if (hasRunRef.current || reduceMotionRef.current) return;

    const diff = end - start;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const next = Math.round(start + diff * progress);
      setCount(next);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        hasRunRef.current = true;
        setSrMessage(`${caption}: ${end}`);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  // Observe when to begin; only once per mount.
  useEffect(() => {
    const node = observeRef?.current ?? rootRef.current;
    if (!node || hasRunRef.current || reduceMotionRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            io.disconnect(); // run-once
            startAnimation();
            break;
          }
        }
      },
      { threshold: 0.25 }
    );

    io.observe(node);

    return () => io.disconnect();
  }, [observeRef]);

  // Cleanup rAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div ref={rootRef} aria-labelledby={`${id}-label`} role="group">
      <output
        id={id}
        className="text-2xl font-semibold tabular-nums"
        aria-live="off"
        aria-atomic="true"
      >
        {count}
      </output>
      <span id={`${id}-label`} className="text-sm text-gray-600 block">
        {caption}
      </span>
      {/* Screen reader announcement updates once at the end */}
      <span className="sr-only" aria-live="polite">
        {srMessage}
      </span>
    </div>
  );
}