import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="px-gutter mx-auto max-w-[1200px] py-7 text-center font-mono text-[13px] text-muted">
          cholocmc | {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}
