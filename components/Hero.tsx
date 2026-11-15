import { APOLLO_EXTENSION_URL, EMAIL, quickFacts, socials } from "@/lib/data";
import { MailIcon } from "./MailIcon";
import { ScrollLink } from "./ScrollLink";

// The two profiles recruiters and clients go to next; the rest live in Contact.
const profiles = socials.filter((s) => s.name === "LinkedIn" || s.name === "GitHub");

export function Hero() {
  return (
    <section aria-labelledby="hero-name" className="bg-grid relative border-b border-line">
      <div className="px-gutter mx-auto flex max-w-[1200px] flex-wrap items-end gap-x-16 gap-y-12 pt-[clamp(64px,11vw,144px)] pb-[clamp(56px,8vw,112px)]">
        <div className="min-w-0 flex-[999_1_560px]">
          <h1
            id="hero-name"
            className="m-0 text-[clamp(44px,7.6vw,112px)] leading-[0.95] font-semibold tracking-[-0.035em]"
          >
            Carlos Miguel <span className="text-muted">(Cholo)</span> Canonizado
          </h1>
          <p className="mt-8 max-w-[640px] text-[clamp(17px,1.6vw,19px)] leading-[1.6] text-soft">
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
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-12 items-center gap-2.5 border border-line-strong bg-bg px-[22px] font-medium text-fg no-underline transition-colors hover:border-fg"
            >
              <MailIcon />
              Email me
            </a>
            {profiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} profile`}
                title={p.name}
                className="inline-flex h-12 w-12 items-center justify-center border border-line-strong bg-bg transition-colors hover:border-fg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.icon} alt="" width={18} height={18} className="block dark:invert" />
              </a>
            ))}
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
