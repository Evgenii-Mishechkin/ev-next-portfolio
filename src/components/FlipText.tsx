"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯабвгдежзиклмнопрстуфхцчшщэюя0123456789";

type FlipTextProps = {
  text: string;
  className?: string;

  speed?: number;   // ms per step (roughly)
  delay?: number;   // ms before start
  cycles?: number;  // base steps for each char
  stagger?: number; // extra steps per char

  /** If true: keep one line (good for h1). If false: allow wrapping (good for paragraphs). */
  nowrap?: boolean;

  /** If true and nowrap: show ellipsis instead of overflowing */
  ellipsis?: boolean;
};

export function FlipText({
  text,
  className = "",
  speed = 20,
  delay = 0,
  cycles = 10,
  stagger = 2,
  nowrap = true,
  ellipsis = true
}: FlipTextProps) {
  const [display, setDisplay] = useState(text);

  const rafRef = useRef<number | null>(null);
  const startTimeoutRef = useRef<number | null>(null);

  // deterministic seed (stable per text)
  const seed = useMemo(() => {
    let s = 0;
    for (let i = 0; i < text.length; i++) s = (s * 31 + text.charCodeAt(i)) >>> 0;
    return s;
  }, [text]);

  useEffect(() => {
    
    const target = [...text];
    const targetIdx = target.map((ch) => CHARS.indexOf(ch));
    const isStatic = targetIdx.map((idx) => idx === -1);

    const startIdx = target.map((_, i) => (seed + i * 17) % CHARS.length);
    const lockAt = target.map((_, i) => cycles + i * stagger);
    const totalSteps = lockAt.length ? Math.max(...lockAt) : 0;

    let step = 0;
    let lastTick = 0;

    const tick = (t: number) => {
      if (!lastTick) lastTick = t;

      // advance steps at "speed" ms
      while (t - lastTick >= speed) {
        lastTick += speed;
        step += 1;

        const out: string[] = [];
        for (let i = 0; i < target.length; i++) {
          if (isStatic[i]) {
            out.push(target[i]);
            continue;
          }
          if (step <= lockAt[i]) out.push(CHARS[(startIdx[i] + step) % CHARS.length]);
          else out.push(target[i]);
        }
        setDisplay(out.join(""));

        if (step > totalSteps) {
          setDisplay(text);
          rafRef.current = null;
          return;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    // start with delay
    startTimeoutRef.current = window.setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      if (startTimeoutRef.current) window.clearTimeout(startTimeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeoutRef.current = null;
      rafRef.current = null;
    };
  }, [text, seed, speed, delay, cycles, stagger]);

  const wrapClasses = nowrap
    ? `whitespace-nowrap ${ellipsis ? "overflow-hidden text-ellipsis" : ""}`
    : "whitespace-normal break-words";

  return (
    <span className={`relative inline-block align-baseline leading-inherit min-w-0 ${wrapClasses} ${className}`}>
      {/* placeholder for layout */}
      <span className={`invisible leading-inherit ${wrapClasses}`}>{text}</span>

      {/* animated overlay */}
      <span aria-hidden="true" className={`absolute inset-0 leading-inherit ${wrapClasses}`}>
        {display}
      </span>
    </span>
  );
}
