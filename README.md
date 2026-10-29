# Jinxin Li — Personal Website

A responsive static portfolio adapted from [vCard by codewithsadee](https://github.com/codewithsadee/vcard-personal-portfolio), under the MIT license.

## Preview

Serve this directory with any static HTTP server, for example:

```sh
python -m http.server 4173
```

Open http://localhost:4173. No package installation or build step is required.

## Publish to GitHub Pages

In repository Settings → Pages, select **Deploy from a branch**, **main**, **/ (root)**, and Save. The intended URL is https://jinxinlee.github.io/.

## Edit

- `index.html`: public introduction, projects, research, CV overview and links.
- `professional-cv.html`: current public CV; browser Print → Save as PDF.
- `cv.html`: preserved previous CV.
- `assets/pdf/`: four slide decks, the doctoral thesis and the downloadable two-page CV.
- `assets/site.css`: custom styling and light/dark theme.
- `assets/site.js`: scroll-position navigation highlighting and theme preference.
- `assets/vcard.css`: upstream vCard styling.
- `assets/favicon.svg`: initials mark.

The initials avatar is intentional and can be replaced with an authorized portrait later.
`professional-cv.html` is the editable public CV. After changing its content, use Print / Save as PDF with A4 paper and save the updated download as `assets/pdf/Jinxin_Li_Professional_CV.pdf`. Check both printed pages before publishing. GitHub Pages serves the PDF as a static asset. The previous HTML and PDF remain unchanged.
No analytics, external fonts, embedded services or contact-form backend are used.

## Content provenance

Professional facts were checked against the reviewed `cv.md`, `article-digest.md`, `config/profile.yml`, the owner's explicit instructions, the doctoral dissertation and the local PANDA Agent implementation on 2026-10-29.
Those private source files are not included. This public version omits phone, street address, date of birth, immigration information, salary targets and job-application records.
No publication list is inferred from collaboration membership.
The current PANDA Agent card describes architecture and evaluation methodology instead of historical benchmark percentages. Backend technologies describe the implemented project, not independent mastery of each dependency. The sealed-holdout wording describes an evaluation protocol, not a completed blind evaluation.
Scientific results were checked against dissertation Tables 6.4, 6.6, 7.1, 9.1 and 9.2. The two reconstruction comparisons concern separate simulations. Luminosity deviation belongs to the integrated reconstruction/fitting chain; detector improvements concern simulated physics performance.
The PANDA Agent description preserves the AI-assisted implementation and architecture/review ownership boundary.

