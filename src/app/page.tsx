export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Personal site
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Nathanael Nienaber
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A new site is coming soon. This repository is separate from{" "}
          <a
            href="https://attunedholdings.com"
            className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100"
          >
            Attuned Holdings
          </a>
          .
        </p>
      </main>
    </div>
  );
}
