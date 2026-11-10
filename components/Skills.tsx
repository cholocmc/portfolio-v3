import { skills } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-anchor border-t border-line">
      <div className="px-gutter py-section mx-auto max-w-[1200px]">
        <SectionHeading num="03" id="skills-title">
          Skills and interests
        </SectionHeading>

        {skills.map((row) => (
          <div
            key={row.title}
            className="flex flex-wrap gap-x-12 gap-y-4 border-t border-line py-[clamp(24px,3vw,36px)]"
          >
            <div className="min-w-0 flex-[1_1_200px]">
              <div className="font-mono text-xs tracking-[0.08em] text-muted">{row.idx}</div>
              <h3 className="mt-1.5 text-[22px] leading-[1.2] font-semibold">{row.title}</h3>
              <div className="mt-1 font-mono text-xs text-muted">{row.items.length} entries</div>
            </div>
            <ul className="m-0 grid min-w-0 flex-[999_1_560px] list-none grid-cols-[repeat(auto-fill,minmax(164px,1fr))] gap-2 p-0">
              {row.items.map((s) => (
                <li
                  key={s.name}
                  className="flex min-h-12 items-center gap-3 border border-line bg-panel px-3.5 text-[15px] leading-[1.25]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt="" width={20} height={20} className="block flex-none dark:invert" />
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
