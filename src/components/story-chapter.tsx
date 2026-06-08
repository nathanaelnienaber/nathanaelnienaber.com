type Chapter = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

type StoryChapterProps = {
  chapter: Chapter;
  variant?: "white" | "canvas";
};

export function StoryChapter({ chapter, variant = "white" }: StoryChapterProps) {
  return (
    <section
      id={chapter.id}
      className={`scroll-mt-16 px-6 py-16 md:py-20 lg:px-8 ${
        variant === "canvas" ? "bg-slate-50" : "bg-white"
      }`}
    >
      <div className="story-container">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {chapter.title}
        </h2>
        <div className="story-prose mt-8 space-y-6">
          {chapter.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
