"use client";
import { useScramble } from "use-scramble";

export function Scrambled({ text }: { text: string }) {
  const len = text.length;

  const { ref } = useScramble({
    text,
    speed: 0.2,
    tick: 8,
    scramble: 8,
    step: Math.max(80, len * 1),
    seed: 100,
    range: [32, 48, 49],
    overdrive: 86,
    overflow: false,
    ignore: [""],
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
