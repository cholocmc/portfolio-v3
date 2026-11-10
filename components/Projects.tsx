import Image from "next/image";
import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-anchor border-t border-line bg-band">
      <div className="px-gutter py-section mx-auto max-w-[1200px]">
        <SectionHeading num="02" id="projects-title">
          Projects
        </SectionHeading>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-wrap border border-line-strong bg-panel">
              <div className="relative min-w-0 flex-[1_1_340px] border-r border-line bg-bg">
                <Image
                  src={p.img}
                  alt={p.alt}
                  width={1200}
                  height={750}
                  sizes="(min-width: 1200px) 500px, 100vw"
                  className="block aspect-[16/10] h-full min-h-[220px] w-full object-cover"
                />
                <span className="absolute top-3 left-3 border border-line-strong bg-bg px-2 py-1 font-mono text-xs text-fg">
                  {p.idx}
                </span>
              </div>

              <div className="flex min-w-0 flex-[1.2_1_420px] flex-col gap-[18px] p-[clamp(20px,3vw,40px)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="m-0 text-[clamp(24px,2.4vw,32px)] leading-[1.15] font-semibold tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.title} on GitHub`}
                      className="inline-flex min-h-11 items-center gap-2 border border-line-strong px-3.5 font-mono text-[13px] text-fg no-underline transition-colors hover:border-fg"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/icons/github.svg" alt="" width={16} height={16} className="dark:invert" />
                      GitHub
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                      >
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="flex flex-col gap-[1.6em] text-soft">
                  {p.desc.map((para) => (
                    <p key={para} className="m-0">
                      {para}
                    </p>
                  ))}
                </div>
                <ul aria-label="Technologies" className="mt-auto flex list-none flex-wrap gap-2 p-0">
                  {p.tags.map((tag) => (
                    <li key={tag} className="border border-line px-2.5 py-1 font-mono text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
