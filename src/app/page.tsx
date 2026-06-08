import { Connect } from "@/components/connect";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StoryChapter } from "@/components/story-chapter";
import { ThreeDoors } from "@/components/three-doors";
import { story } from "@/content/site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        {story.chapters.map((chapter, index) => (
          <StoryChapter
            key={chapter.id}
            chapter={chapter}
            variant={index % 2 === 0 ? "white" : "canvas"}
          />
        ))}
        <ThreeDoors />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
