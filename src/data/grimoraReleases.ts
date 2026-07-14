// Build-time data source for the Grimora page.
//
// Release notes are read from the public Grimora GitHub repo's Releases during
// `astro build` and baked into the static HTML. Nothing runs in the visitor's
// browser, so there is no client-facing rate limit and the changelog stays
// sourced from GitHub instead of being hand-maintained. It refreshes whenever
// the site is rebuilt/redeployed.

export const GRIMORA_REPO = "SamBWagner/Grimora";
export const GRIMORA_RELEASES_API = `https://api.github.com/repos/${GRIMORA_REPO}/releases?per_page=20`;
export const GRIMORA_RELEASES_URL = `https://github.com/${GRIMORA_REPO}/releases`;

// Universal App Store listing. A universal Apple app has a single product page
// covering iOS, iPadOS, macOS, and visionOS; the store serves the
// platform-appropriate download when the visitor arrives.
export const GRIMORA_APP_STORE_URL =
  "https://apps.apple.com/au/app/grimora/id6771003115";

export interface GrimoraRelease {
  /** Display label, e.g. "v1.6". */
  version: string;
  /** Friendly published date, e.g. "July 7, 2026". */
  date: string;
  /** Raw markdown release body. */
  body: string;
  /** Link to the release on GitHub. */
  htmlUrl: string;
}

interface GitHubRelease {
  name: string | null;
  tag_name: string;
  body: string | null;
  html_url: string;
  published_at: string | null;
  draft: boolean;
  prerelease: boolean;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  // Pin to UTC so the baked-in date is deterministic regardless of where the
  // site is built, and matches the release's canonical published timestamp.
  timeZone: "UTC",
});

/**
 * Fetch published Grimora releases at build time.
 *
 * Filters out drafts, prereleases, and App Store review builds (tags containing
 * "review"). Any failure returns an empty array so a build never breaks when
 * GitHub is unreachable — the release notes section simply omits itself.
 */
export async function getGrimoraReleases(): Promise<GrimoraRelease[]> {
  try {
    const res = await fetch(GRIMORA_RELEASES_API, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "port-flow-site",
      },
    });

    if (!res.ok) return [];

    const data = (await res.json()) as GitHubRelease[];
    if (!Array.isArray(data)) return [];

    return data
      .filter(
        (release) =>
          !release.draft &&
          !release.prerelease &&
          !/review/i.test(release.tag_name),
      )
      .map((release) => ({
        version: release.name || release.tag_name,
        date: release.published_at
          ? dateFormatter.format(new Date(release.published_at))
          : "",
        body: release.body ?? "",
        htmlUrl: release.html_url,
      }));
  } catch {
    return [];
  }
}
