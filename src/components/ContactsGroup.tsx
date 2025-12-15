import type {ContactsData} from "@/data/data"
import Link from "next/link";

export function ContactsGroup({
  location,
  links,
}: ContactsData) {
  return (
    <div className="space-y-1 text-sm">
      <p className="text-neutral-300">{location}</p>
        
      <div className="flex flex-wrap flex-col gap-1.5">
        {links.map((link) => (
          <Link 
            key={link.label}
            href={link.href}
            className="block hover:text-amber-400"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
