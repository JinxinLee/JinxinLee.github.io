# Dr. Jinxin Li - Physics Research & Scientific Software

Static GitHub Pages homepage adapted from [vCard by codewithsadee](https://github.com/codewithsadee/vcard-personal-portfolio), under the retained MIT license. No build, analytics or external runtime is required.

## Pages

- `index.html`: Home card, introduction and equal Research / Software & AI entry points.
- `software.html`: dedicated Software & AI card and engineering case studies.
- `cv-overview.html`: CV card with experience, education, and online/PDF actions.
- `research.html`: doctoral motivation, methods, contributions, simulation results, original figures and future interests.
- `academic-work.html`: dissertation and selected presentations, with internal talks accurately labeled.
- `professional-cv.html`: current editable public CV and PDF download.
- `cv.html`: preserved legacy CV, excluded from search indexing and current navigation.

Shared appearance and behavior live in `assets/site.css` and `assets/site.js`; `assets/vcard.css` retains upstream styling. Each of the five navigation destinations opens its own content card with the same sidebar and active-page navigation. Shared header/sidebar/nav markup is plain HTML in each page: keep its links and profile information consistent when editing. Old homepage bookmarks for projects, research and CV redirect to their new pages.

## Local preview and checks

From this repository directory:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. With Node.js, Playwright and Microsoft Edge available, run `node tests/verify-site.mjs`. This checks links, fragments, downloads, responsive layouts and theme persistence. Review screenshots are written to `docs/screenshots/`. Browser tests are development tools, not website dependencies.

## Updating scientific content

Edit the appropriate study in `research.html`, preserve simulation definitions, and update `docs/RESEARCH_SOURCE_NOTES.md`. Keep software case studies focused on engineering and link them to the matching research anchors. New numerical claims need a chapter/table/figure reference and conditions; distinguish simulation results from experimental data or runtime performance.

Five original figures live in `assets/research/`. Regenerate them with `python scripts/generate-research-figures.py` using only the Python standard library. Preserve values, units, uncertainties and captions; check each figure visually on desktop and mobile. Do not replace a schematic with an invented physical data curve.

## Academic documents and CV

Add permitted presentations to `academic-work.html`: exact title, date, event/location, public/internal status and matching PDF path. Confirm redistribution rights before adding collaboration materials. Add formal publications only with verified authorship and venue; no empty Publications or Academic CV page is provided.

The existing dissertation and slide URLs under `assets/pdf/` are retained. Edit `professional-cv.html` for CV changes and use Print / Save as PDF with A4 paper to update `assets/pdf/Jinxin_Li_Professional_CV.pdf`; inspect both pages before publication. Preserve academic facts and legacy files. Public pages omit phone, address, birth date, immigration, salary and application data.

## GitHub Pages

Production targets https://jinxinlee.github.io/ using the repository's existing Pages configuration (`main`, root). Serve static files directly, including `.nojekyll`. Update sitemap URLs when adding public pages. Pushing a development redesign requires owner approval; the academic redesign task authorizes a local development branch only. No hosting migration or DNS changes are required.

## Evidence and review

- `docs/WEBSITE_BASELINE_AUDIT.md`: starting state.
- `docs/RESEARCH_SOURCE_NOTES.md`: claims, figures, documents and rights boundaries.
- `docs/WEBSITE_REDESIGN_REPORT.md`: implementation, QA and remaining review items.

Existing internal slides remain linked under the owner's prior website-publication instruction; institutional redistribution permission was not independently established. No new collaboration images, logos or private documents were introduced.
