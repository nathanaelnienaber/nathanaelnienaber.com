import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white lg:px-8 lg:py-24">
      <div className="story-container !max-w-4xl !px-0">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
          {site.location}
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {site.heroHook}
        </p>
      </div>
    </section>
  );
}
