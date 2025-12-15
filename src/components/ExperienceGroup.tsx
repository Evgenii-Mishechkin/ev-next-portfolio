import type { IWorkData } from "@/data/data"
import Link from "next/link";

type ExperienceGroupProps = {
  work: IWorkData[];
};

export function ExperienceGroup(
  {work}:ExperienceGroupProps) {
    return (
      <div className="space-y-6">
        {work.map((job) => (
          <article
            key={job.company}
            className="border-l border-neutral-800 pl-4"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold">
                  {job.role} ·{" "}
                  <span className="text-amber-400">{job.company}</span>
                </h3>
              </div>
              <span className="text-xs text-neutral-500">
                {job.period}
              </span>
            </div>

            <p className="mt-2 text-xs text-neutral-400">
              Stack: {job.stack.join(", ")}
            </p>

            {job.links && (
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                {job.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="underline decoration-neutral-600 underline-offset-2 hover:decoration-amber-400"
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    );
  }


