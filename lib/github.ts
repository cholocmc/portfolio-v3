export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
export type Contributions = { total: number; days: ContributionDay[] };

/**
 * Last-year contribution calendar for a GitHub user, via the public
 * github-contributions-api (scrapes the profile calendar; no token needed).
 * Cached and revalidated daily. Returns null on any failure so the page still renders.
 */
export async function getContributions(username: string): Promise<Contributions | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      { next: { revalidate: 60 * 60 * 24 } },
    );
    if (!res.ok) return null;
    const json = (await res.json()) as {
      total?: { lastYear?: number };
      contributions?: ContributionDay[];
    };
    const days = json.contributions ?? [];
    if (days.length === 0) return null;
    const total = json.total?.lastYear ?? days.reduce((sum, d) => sum + d.count, 0);
    return { total, days };
  } catch {
    return null;
  }
}
