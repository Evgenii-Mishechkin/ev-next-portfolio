"use client";
import { useScramble } from "use-scramble";

export function Scrambled({ text }: { text: string }) {
  const len = text.length;

  const { ref } = useScramble({
    text,
    speed: 0.3,
    tick: 8,
    scramble: 8,
    step: Math.max(80, len * 1),
    seed: 100,
    range: [33, 126],
    overdrive: 86,
    overflow: false,
    ignore: [" ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"],
    playOnMount: true,
  });

  return (
    <span className="relative inline-block align-baseline">
      <span className="invisible select-none" aria-hidden="true">
        {text}
      </span>
      <span ref={ref} className="absolute inset-0" />
    </span>
  );
}
