import { jobs } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-anchor">
      <div className="px-gutter py-section mx-auto max-w-[1200px]">
        <SectionHeading num="01" id="work-title" aside="2019 → present">
          Work experience
        </SectionHeading>

        {jobs.map((job) => (
          <article
            key={job.company}
            className="flex flex-wrap gap-x-16 gap-y-5 border-t border-line py-[clamp(28px,4vw,48px)]"
          >
            <div className="min-w-0 flex-[1_1_260px]">
              <div className="font-mono text-xs tracking-[0.08em] text-muted">{job.idx}</div>
              <h3 className="mt-2 text-[clamp(22px,2.2vw,28px)] leading-[1.2] font-semibold tracking-[-0.02em]">
                {job.company}
              </h3>
              <p className="mt-2.5 flex gap-2 font-mono text-[13px] leading-normal text-muted">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="mt-0.5 flex-none"
                >
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <span>{job.location}</span>
              </p>
            </div>

            <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-9 border-l border-line pl-[clamp(18px,2.4vw,32px)]">
              {job.roles.map((role) => (
                <div key={role.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-[9px] left-[calc(-1*clamp(18px,2.4vw,32px)-5px)] h-[9px] w-[9px] border border-fg bg-bg"
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <h4 className="m-0 text-[19px] leading-[1.35] font-semibold">{role.title}</h4>
                    <span className="font-mono text-[13px] text-muted">{role.dates}</span>
                  </div>
                  <ul className="mt-3.5 flex list-none flex-col gap-2.5 p-0">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-3.5 text-soft">
                        <span aria-hidden="true" className="mt-[11px] h-[5px] w-[5px] flex-none bg-muted" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
