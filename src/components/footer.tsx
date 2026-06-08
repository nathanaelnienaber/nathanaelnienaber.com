import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { doors, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm font-semibold text-sky-300">Personal site</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            The story behind the operator, consultant, and builder — with links
            to where that work continues.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Elsewhere
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            {doors.map((door) => (
              <Link
                key={door.href}
                href={door.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <ExternalLink className="h-4 w-4 shrink-0 text-sky-300" />
                {door.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.location}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
