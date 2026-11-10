import { APOLLO_EXTENSION_URL, quickFacts } from "@/lib/data";
import { ScrollLink } from "./ScrollLink";

export function Hero() {
  return (
    <section aria-labelledby="hero-name" className="bg-grid relative border-b border-line">
      <div className="px-gutter mx-auto flex max-w-[1200px] flex-wrap items-end gap-x-16 gap-y-12 pt-[clamp(64px,11vw,144px)] pb-[clamp(56px,8vw,112px)]">
        <div className="min-w-0 flex-[999_1_560px]">
          <p className="mb-6 inline-flex items-center gap-2.5 border border-line-strong bg-bg px-3 py-1.5 font-mono text-xs tracking-[0.08em] text-muted uppercase">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-fg" />
            Software Engineer &lt;&gt; Philippines
          </p>
          <h1
            id="hero-name"
            className="m-0 text-[clamp(44px,7.6vw,112px)] leading-[0.95] font-semibold tracking-[-0.035em]"
          >
            Carlos Miguel <span className="text-muted">(Cholo)</span> Canonizado
          </h1>
          <p className="mt-8 max-w-[640px] text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-soft">
            I&apos;m a software engineer who has been shipping for the web and mobile since 2019. Today, I&apos;m a
            Tech Lead at First Mate Technologies, designing and tuning conversational AI agents for enterprise
            clients. Before that, I led the frontend team behind the{" "}
            <a
              href={APOLLO_EXTENSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline decoration-1 underline-offset-4"
            >
              Apollo.io Chrome Extension
            </a>
            , helping it grow from 100k to 600k+ installs.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ScrollLink
              to="work"
              className="inline-flex min-h-12 items-center gap-2.5 border border-fg bg-fg px-[22px] font-medium text-bg no-underline transition-opacity hover:opacity-85"
            >
              View my work
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M12 4v16M5 13l7 7 7-7" />
              </svg>
            </ScrollLink>
            <ScrollLink
              to="contact"
              className="inline-flex min-h-12 items-center gap-2.5 border border-line-strong bg-bg px-[22px] font-medium text-fg no-underline transition-colors hover:border-fg"
            >
              Contact me
            </ScrollLink>
          </div>
        </div>

        <aside
          aria-label="Quick facts"
          className="max-w-[420px] flex-[1_1_300px] border border-line-strong bg-panel font-mono text-[13px]"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-muted">
            <span>~/cholo $ whoami</span>
            <span aria-hidden="true" className="flex gap-1.5">
              <span className="h-2 w-2 border border-muted" />
              <span className="h-2 w-2 border border-muted" />
              <span className="h-2 w-2 bg-fg" />
            </span>
          </div>
          <dl className="m-0 grid grid-cols-[max-content_minmax(0,1fr)] gap-x-5 gap-y-2.5 p-4">
            {quickFacts.map((f) => (
              <div key={f.k} className="contents">
                <dt className="text-muted">{f.k}</dt>
                <dd className="m-0">{f.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
