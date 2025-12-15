
import type { IPetProject } from "@/data/data";
import Link from "next/link";

type PetProjectProps = {
  petProjects:IPetProject[];
}

export function ProjectsGroup({petProjects}:PetProjectProps){
  return(
    <div className="space-y-3">
      {petProjects.map((p) => (
        <Link
          key={p.title}
          href={p.href}
          className="group block rounded-md border border-neutral-900 px-3 py-2 hover:bg-[#ebbb00] transition-colors duration-300 ease-in-out"
        >
          <h3 className="text-xs font-semibold text-neutral-100 group-hover:text-neutral-900 transition-colors duration-300">
            {p.title}
          </h3>

          <p className="mt-1 text-[11px] text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
            {p.note}
          </p>
        </Link>
      ))}
    </div>
  )
}

