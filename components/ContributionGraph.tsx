import { GITHUB_USERNAME } from "@/lib/data";
import { getContributions, type ContributionDay } from "@/lib/github";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS: Record<number, string> = { 1: "Mon", 3: "Wed", 5: "Fri" };

// Monochrome scale built from theme tokens, so it follows light/dark automatically.
const LEVEL_CLASS = ["bg-fg/[0.07]", "bg-fg/25", "bg-fg/45", "bg-fg/70", "bg-fg"] as const;

const utc = (date: string) => new Date(`${date}T00:00:00Z`);

const formatDay = (date: string) =>
  utc(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

/** Split days into Sunday-first week columns, padding the first week. */
function toWeeks(days: ContributionDay[]) {
  const padded: (ContributionDay | null)[] = [...Array(utc(days[0].date).getUTCDay()).fill(null), ...days];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
  return weeks;
}

/** Month label positions: a label sits on the week containing the 1st of that month. */
function monthLabels(weeks: (ContributionDay | null)[][]) {
  const labels: { col: number; text: string }[] = [];
  weeks.forEach((week, col) => {
    const first = week.find((d) => d && utc(d.date).getUTCDate() === 1);
    if (first) labels.push({ col, text: MONTHS[utc(first.date).getUTCMonth()] });
  });
  // Label the opening partial month too, when there's room before the next label.
  const start = weeks[0].find(Boolean);
  if (start && (labels[0]?.col ?? Infinity) >= 3 && labels[0]?.col !== 0) {
    labels.unshift({ col: 0, text: MONTHS[utc(start.date).getUTCMonth()] });
  }
  return labels;
}

export async function ContributionGraph() {
  const data = await getContributions(GITHUB_USERNAME);
  if (!data) return null;

  const weeks = toWeeks(data.days);
  const labels = monthLabels(weeks);
  const total = data.total.toLocaleString("en-US");

  return (
    <figure className="m-0 mb-6 border border-line-strong bg-panel">
      <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-line px-4 py-2.5 font-mono text-[13px] text-muted">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-fg no-underline underline-offset-4 hover:underline"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/github.svg" alt="" width={16} height={16} className="dark:invert" />
          github.com/{GITHUB_USERNAME}
        </a>
        <span>
          <span className="text-fg">{total}</span> contributions in the last year
        </span>
      </figcaption>

      {/* dir="rtl" starts the scroller at its right edge, so phones show the most recent weeks first. */}
      <div dir="rtl" className="overflow-x-auto">
        <div dir="ltr" className="min-w-[680px] p-4">
          <div
            role="img"
            aria-label={`GitHub contribution graph: ${total} contributions in the last year`}
            className="grid gap-[3px]"
            style={{
              gridTemplateColumns: `auto repeat(${weeks.length}, minmax(0, 1fr))`,
              gridTemplateRows: "auto repeat(7, auto)",
            }}
          >
            {labels.map((l) => (
              <span
                key={`${l.col}-${l.text}`}
                aria-hidden="true"
                className="pb-1 font-mono text-[11px] leading-none whitespace-nowrap text-muted"
                style={{ gridColumn: `${l.col + 2} / span 3`, gridRow: 1 }}
              >
                {l.text}
              </span>
            ))}

            {[1, 3, 5].map((dow) => (
              <span
                key={dow}
                aria-hidden="true"
                className="flex items-center pr-2 font-mono text-[11px] leading-none text-muted"
                style={{ gridColumn: 1, gridRow: dow + 2 }}
              >
                {DAY_LABELS[dow]}
              </span>
            ))}

            {weeks.map((week, col) =>
              week.map((day, dow) =>
                day ? (
                  <span
                    key={day.date}
                    aria-hidden="true"
                    title={`${day.count === 0 ? "No" : day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDay(day.date)}`}
                    className={`aspect-square ${LEVEL_CLASS[day.level]}`}
                    style={{ gridColumn: col + 2, gridRow: dow + 2 }}
                  />
                ) : null,
              ),
            )}
          </div>

          <div
            aria-hidden="true"
            className="mt-3 flex items-center justify-end gap-[3px] font-mono text-[11px] text-muted"
          >
            <span className="mr-1.5">Less</span>
            {LEVEL_CLASS.map((cls) => (
              <span key={cls} className={`h-[11px] w-[11px] ${cls}`} />
            ))}
            <span className="ml-1.5">More</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
