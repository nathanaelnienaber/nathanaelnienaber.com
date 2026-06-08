import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex min-w-0 flex-col sm:flex-row sm:items-baseline sm:gap-3">
          <span className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
            {site.name}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 sm:text-[0.7rem]">
            Personal site
          </span>
        </Link>
        <a
          href="#connect"
          className="text-sm font-semibold text-slate-700 transition hover:text-sky-600"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}
