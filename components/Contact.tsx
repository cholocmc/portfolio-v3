import { EMAIL, socials } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-anchor bg-grid border-t border-line">
      <div className="px-gutter py-section mx-auto max-w-[1200px]">
        <SectionHeading num="04" id="contact-title" className="">
          Contact me
        </SectionHeading>
        <p className="mt-7 max-w-[820px] text-[clamp(20px,2.2vw,28px)] leading-[1.45] tracking-[-0.01em]">
          If you want to talk, share ideas, or just connect, feel free to send me an email at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-fg underline decoration-1 underline-offset-[5px] [overflow-wrap:anywhere]"
          >
            {EMAIL}
          </a>
          . Here are my socials:
        </p>
        <ul aria-label="Social links" className="mt-9 flex list-none flex-wrap gap-2.5 p-0">
          {socials.map((so) => (
            <li key={so.name}>
              <a
                href={so.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2.5 border border-line-strong bg-bg px-[18px] text-[15px] font-medium text-fg no-underline transition-colors hover:border-fg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={so.icon} alt="" width={18} height={18} className="block dark:invert" />
                {so.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
