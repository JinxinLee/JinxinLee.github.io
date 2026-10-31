# Website baseline audit

2026-10-29. Starting branch: main; commit: 7bde72615c596b9b541bef4fec03cd162c4814d1. Website working tree was clean. Development branch: codex/academic-research-homepage. The parent career-ops checkout has unrelated edits and is excluded from this change.

Static vCard-derived HTML/CSS/JS; continuous sections About, Projects, Research, CV. Theme stored in localStorage. Scroll logic assumes matching page nodes and needs guards for standalone pages. Existing public professional and legacy CVs, seven PDFs (two CVs, thesis, four talks), license and attribution retained. No dependency or hosting change required.

Public repository metadata checked through GitHub API: PANDA_Agent (main), LuminosityFit (master), RestgasDetermination (oct19), all public. Thesis Tables 6.4, 6.6, 7.1, 9.1, 9.2 re-extracted. Existing CV remains consistent and will be preserved. No formal publications independently established.

PDF slide title pages inspected during redesign. Internal collaboration labels retained; owner previously explicitly authorized website access to all four PDFs. That owner instruction does not independently establish institutional publication rights. No new restricted materials or logos introduced.

Available QA: local Node/Playwright with Edge, bundled Python/pypdf and Poppler. Existing preview at port 4173. No push or deployment authorized in this task.
