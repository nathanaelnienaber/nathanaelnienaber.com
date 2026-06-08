import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { doors } from "@/content/site";

export function ThreeDoors() {
  return (
    <section id="doors" className="scroll-mt-16 bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          Where the story goes next
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Three doors
        </h2>
        <ul className="mt-10 space-y-4">
          {doors.map((door) => (
            <li key={door.href}>
              <Link
                href={door.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  {door.label}
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {door.name}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {door.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors group-hover:text-sky-700">
                  {door.cta}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
