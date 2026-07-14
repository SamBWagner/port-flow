// Configuration for the Grimora page's App Store link and release notes.
//
// Release notes are fetched client-side from the public Grimora GitHub repo
// (see the release-notes script in index.astro), so the list stays current on
// every visit without a rebuild — and without an unauthenticated build-time
// call that shared CI/build IPs get rate-limited on (GitHub allows only 60
// unauthenticated requests/hour per IP).

export const GRIMORA_REPO = "SamBWagner/Grimora";
export const GRIMORA_RELEASES_API = `https://api.github.com/repos/${GRIMORA_REPO}/releases?per_page=20`;
export const GRIMORA_RELEASES_URL = `https://github.com/${GRIMORA_REPO}/releases`;

// Universal App Store listing. A universal Apple app has a single product page
// covering iOS, iPadOS, macOS, and visionOS; the store serves the
// platform-appropriate download when the visitor arrives.
export const GRIMORA_APP_STORE_URL =
  "https://apps.apple.com/au/app/grimora/id6771003115";
