"use client";

import { useEffect, useRef } from "react";

type SkillGroupProps = {
  label: string;
  skills: string[];
};

export function SkillGroup({ label, skills }: SkillGroupProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chipsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mouseXRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    mouseXRef.current = Math.max(0, Math.min(1, x));
  };

  const handleMouseLeave = () => {
    mouseXRef.current = null;
  };

  useEffect(() => {
    let frameId: number;

    const animate = () => {
      const mouse = mouseXRef.current;

      if (mouse == null) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      const now = performance.now();

      chipsRef.current.forEach((el, i) => {
        if (!el) return;

        const wave = Math.sin(now / 450 + i * 0.7) * 8;
        let offsetX = wave;

        if (offsetX > 18) offsetX = 18;
        if (offsetX < -18) offsetX = -18;

        el.style.transform = `translateX(${offsetX}px)`;
        el.style.transition = "transform 0.08s linear";
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [skills.length]);

  return (
    <div>
      <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-neutral-500 cursor-default">
        {label}
      </p>

      <div
        ref={containerRef}
        className="flex flex-wrap gap-1.5 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {skills.map((skill, i) => (
          <span
            key={skill}
            ref={(el) => {
              chipsRef.current[i] = el;
            }}
            className="rounded-full border border-neutral-800 px-2 py-1 text-[14px] text-neutral-300 will-change-transform cursor-default hover:bg-[#ebbb02] hover:text-[#0a0a0a]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
