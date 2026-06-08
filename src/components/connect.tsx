import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/content/site";

export function Connect() {
  return (
    <section id="connect" className="scroll-mt-16 bg-slate-50 px-6 py-16 md:py-20 lg:px-8">
      <div className="story-container">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Connect
        </h2>
        <p className="story-prose mt-6">
          If you found me on LinkedIn and want the short professional record,{" "}
          <Link
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
          >
            I&apos;m there too
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-400"
          >
            Connect on LinkedIn
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-white"
          >
            <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
