# Website redesign report

2026-10-29. Local development only.

## Implementation

The site now presents **Experimental Particle Physicist & Scientific Software Engineer**, with equally prominent Research and Software & AI entry cards. Research is an independent scientific narrative, with motivation, methods, original contributions and scoped simulation results. Engineering content remains in the homepage Projects anchor, with reciprocal research/repository/dissertation links. The existing static vCard-derived layout, teal identity, license, theme and GitHub Pages architecture are retained.

### Pages

- `index.html`: dual identity and entry paths; About; Software & AI; compact research previews; current CV overview. Existing `#about`, `#projects`, `#research`, `#cv` anchors preserved.
- `research.html`: overview, coherent doctoral research question, three substantive studies, five scientific visuals, future interests and references. Direct section URLs work independently.
- `academic-work.html`: dissertation and four accurately labeled presentations; no invented Publications or Academic CV page.
- `professional-cv.html`: existing content/print layout preserved; canonical and Open Graph metadata added.
- `cv.html`: legacy content preserved; added `noindex,follow` to avoid outdated CV search duplication. Not in navigation/sitemap.

Other changes: shared stylesheet and guarded JS navigation/theme code; sitemap; README; figure generator; browser checks; three documentation files and ten review screenshots. `robots.txt` already names the sitemap and allows public content, so no change was needed. An Open Graph image was not added because diagrams are optimized for scientific explanation rather than a raster social-preview asset. No unverified JSON-LD affiliations or identifiers were introduced.

## Scientific content and visuals

Sources and exact interpretation are recorded in [RESEARCH_SOURCE_NOTES.md](RESEARCH_SOURCE_NOTES.md). The central results are luminosity closure (Table 9.2); controlled vertex reconstruction (Table 7.1) and iterative global discrepancy (Table 9.1); detector efficiency and primary-vertex widths (Tables 6.4/6.6). Error bars in the new figures retain the tabulated uncertainties.

Five original SVGs depict the interaction context, luminosity closure, reconstruction workflow, iterative correction and HV-MAPS resolution comparison. No third-party figure or logo was republished. All figure files are a few kilobytes, include descriptive captions, and link to their full-size vector versions. White figure backgrounds preserve scientific-chart readability in either site theme. Explanatory text and alt descriptions convey essential information without relying on image text alone.

## Executed QA

`node tests/verify-site.mjs` passed against local static preview on port 4173:

- Four current HTML pages at 1440×900, 1280×800, 768×1024, 390×844 and 360×800.
- 35 unique local link/asset targets checked for existence and HTTP 200; HTML fragment targets checked.
- No duplicate IDs; images load; one main h1 per page; five navigation destinations.
- Standalone-page active states; theme persistence through cross-page navigation and refresh; deep URLs load.
- No page horizontal overflow; sidebar title stays within its card.
- Current CV download works with expected filename; all four talks remain listed.
- No JavaScript exceptions or HTTP errors; pages usable with JavaScript disabled.

The first checks found a standalone-page wordmark pointing to a missing local `#about`; it was fixed. Visual review found a long sidebar title overflowing its card and block-level inline links causing awkward wrapping; both were fixed and the browser suite rerun. Lazy-loaded figures were explicitly loaded during image checks.

Final screenshots were captured directly into `docs/screenshots/`: `home-light.png`, `home-dark.png`, `research-desktop.png`, `research-mobile.png`, `software-mobile.png`, `academic-work.png`, plus `overview.png`, `luminosity.png`, `reconstruction.png`, `detectors.png` where available. The three study and overview captures hide sticky navigation during element screenshots to avoid screenshot-only overlays. Screenshots were visually inspected, including scientific charts, both themes and mobile layout. Keyboard focus styles, semantic headings, figure/figcaption, image alternatives and reduced-motion CSS were inspected; this is not a claim of a full screen-reader or WCAG conformance audit.

The current CV PDF, legacy PDF, thesis and four original slides were not changed. No new PDF generation was needed. No framework, dependency installation, analytics or third-party runtime added. JavaScript remains lightweight; pages do not prefetch the 46 MiB thesis. Original PDF sizes are unchanged. Final uncompressed sizes: homepage 19,915 bytes; Research 17,212 bytes; Academic Work 8,201 bytes; shared JavaScript 2,154 bytes; all five research SVGs combined 13,693 bytes.

## Git and delivery

- Starting branch: `main`; starting commit: `7bde72615c596b9b541bef4fec03cd162c4814d1`.
- Development branch: `codex/academic-research-homepage`.
- Website tree was clean at baseline; unrelated parent career-ops changes were left outside this independent repository.
- Final local commit can be obtained with `git log -1 --oneline` on this branch; the delivery reply records it. No push, Pages configuration change, DNS change or production deployment was performed.

## Owner review and limits

- Existing internal presentation access was retained under the owner's previous explicit website-publication instruction. Institutional/collaboration redistribution permission was not independently established; review those rules before broader reuse. No new restricted material was introduced.
- Exact September 2025 / June 2024 talk days are not established; month precision retained. Event/location records are owner-confirmed, not all independently visible on covers.
- No verified formal publication records were supplied; the page is correctly titled Dissertation & Presentations.
- Future generator tuning is labeled an interest, not an established achievement. PANDA Agent remains a local paused research prototype.
- The live production website was not changed or operationally revalidated during this local redesign.

## Follow-up: consistent navigation cards

The owner requested all remaining navigation areas match the standalone Research card. Home now contains only its own introduction card; engineering moved to `software.html` and the CV overview moved to `cv-overview.html`. All five nav destinations share the same layout, exactly one visible article and `aria-current="page"` highlighting. Research-to-software links and CV back links point directly to the new pages. Former homepage hashes redirect to their equivalents; standalone pages remain usable without JavaScript. Sitemap and README updated. The browser suite now covers six HTML pages at five viewports, including the professional print CV, and legacy-hash redirects. No PDF or scientific claim changed.
