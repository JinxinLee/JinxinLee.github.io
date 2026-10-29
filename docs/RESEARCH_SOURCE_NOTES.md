# Research source register

Reviewed 2026-10-29. Primary scientific source: Jinxin Li (2026), *Luminosity Determination with Restgas Background from the Target for the PANDA Experiment*, Ruhr University Bochum, `assets/pdf/thesis_revised.pdf`. Page numbers below distinguish printed pages from one-based PDF pages. The relevant complete pages were extracted and read, not inferred from earlier website text.

## Claims and definitions

| Claim | Source | Conditions and limits | Web location |
| --- | --- | --- | --- |
| PANDA luminosity through elastic antiproton–proton scattering, acceptance and interaction-region modeling | Dissertation Chapters 4, 5, 7 and 9; owner-supplied research description | Scientific program and simulation methodology; no claim of completed PANDA experimental data taking | Research overview and luminosity |
| (0.05 ± 0.07)% relative luminosity deviation | Ch. 9, Table 9.2; printed p. 142 / PDF p. 150; context PDF p. 149 | Integrated reconstruction/fitting closure; beam momentum 4.06 GeV/c, absolute x/y below 1 cm, absolute z below 5 cm. Determined target profile. Not universal framework accuracy | `research.html#luminosity`, software card |
| Point-like −0.04 ± 0.07%; known target profile 0.02 ± 0.08% | Same Table 9.2 | Alternative target/fit configurations, not chronological optimization results. Table rounding retained | Luminosity closure figure |
| POCA-First / POCA-to-point contribution; existing Apollonius and GenFit/Kalman integration | Ch. 7; owner-confirmed contribution records | Original workflow distinguished from existing tracking/fitting components | Research reconstruction and software card |
| 74.4% efficiency vs 74.2% MC-vertex reference | Ch. 7, Table 7.1; printed p. 126 / PDF p. 134 | Controlled displaced interaction; not the separate distributed-target 59.1% vs 61.4% scenario | `research.html#reconstruction`, software card |
| Global discrepancy 12.27 ± 5.69%, 4.28 ± 1.19%, 1.30 ± 1.32% at iterations 1–3 | Ch. 9, Table 9.1; printed p. 142 / PDF p. 150 | Global domain z = −3.0 to +6.0 m; initial 40% systematic profile overestimate is a different quantity | Reconstruction chart and software card |
| HV-MAPS geometry in PandaRoot | Ch. 6; owner-confirmed implementation | Detector simulation/design comparison, not electronics fabrication or software runtime optimization | `research.html#detectors` |
| D-meson efficiency 3.33 ± 0.15% vs 9.26 ± 0.24%, approximately 2.8× | Ch. 6, Table 6.4; printed p. 110 / PDF p. 118 | Hybrid pixels vs HV-MAPS, after truth matching and filters, same simulated channel. Ratio 9.26 / 3.33 = 2.7808 | Detector study and software card |
| Primary-vertex widths (60±2,55±2,345±13) vs (29±1,31±1,187±4) μm | Ch. 6, Table 6.6; printed p. 117 / PDF p. 125 | Interaction-point rows, x/y/z, after filters; not secondary D-decay vertices. Reductions 51.7%,43.6%,45.8%, rounded range 44–52% | Detector comparison chart |

Future event-generator tuning is explicitly labeled a prospective interest. No paper, DOI, arXiv record, scholarly identifier or formal publication was inferred from collaboration membership.

## Figure register and rights

All five files are original explanatory SVGs created for this website, with no copied logos, photographs, detector drawings or publisher/collaboration artwork. Existing code license attribution remains intact. Original diagrams were chosen to clearly explain the workflow and table results while avoiding uncertain third-party figure reuse. They are not represented as extracted thesis plots.

| Asset under `assets/research/` | Basis and interpretation |
| --- | --- |
| `interaction-context.svg` | Conceptual beam/nominal target/residual-gas interaction schematic, Chapters 4, 7, 9 and owner-provided description. Explicitly not to scale; no invented measured density curve or detector geometry |
| `luminosity-closure.svg` | Table 9.2 values and symmetric tabulated uncertainties, percent axis; zero reference. Not three measurements of the same target configuration |
| `reconstruction-workflow.svg` | Chapter 7 and 9 sequence; identifies existing track finding/fitting versus POCA and correction work. Schematic, not a literal runtime DAG |
| `iterative-correction.svg` | Table 9.1 global discrepancies with uncertainties. Connecting segments guide the eye; uncertainty extends marginally below zero for the third tabulated symmetric error |
| `hvmaps-comparison.svg` | Table 6.6 interaction-point widths and uncertainties, x/y/z, micrometres. Fixed common horizontal scale |

Recreate assets with `python scripts/generate-research-figures.py`. No dependencies beyond the Python standard library. SVGs include titles; HTML supplies meaningful alt text, metric descriptions and captions with full-size links. Desktop figures fit their cards; mobile visitors can open the vector originals to zoom into labels.

## Software and ownership

GitHub metadata verified all three linked repositories public on 2026-10-29: `JinxinLee/PANDA_Agent` (main), `JinxinLee/LuminosityFit` (master), `JinxinLee/RestgasDetermination` (oct19).

The local PANDA Agent README was checked for local-prototype and paused-development status. Implementation checks from the immediately preceding CV work cover `qa.py` (LangGraph), `api.py` (FastAPI), `storage.py` (PostgreSQL/Qdrant), retrieval modules and benchmark manifests. Architecture/integration/review ownership under AI-assisted development does not imply independent mastery of every package. Historical Attempt 5 percentages are not displayed as current performance; sealed-holdout design is not reported as a successful blind evaluation. No Agent code or evaluation was run or modified.

LuminosityFit is an existing framework subsequently maintained and extended by the owner. Restgas workflow contributions do not imply original authorship of Apollonius or GenFit/Kalman components.

## Academic document register

All four title pages were inspected. The July 2026 and March 2026 PDFs establish exact dates 17 July and 30 March. Other month/event/location details are retained from owner-confirmed existing website records; not all are printed on the extracted cover pages.

| PDF | Title | Event / status |
| --- | --- | --- |
| `NRW_FAIR_2026_Li.pdf` | Measurement of the Restgas distribution with PANDA | NRW-FAIR Concluding Meeting, Bochum, 17 July 2026 |
| `PANDA_CM_Li.pdf` | Precise Determination of the Restgas Profile for High-Precision Luminosity Determination | PANDA CM 26/1, Bonn, 30 March 2026; internal collaboration talk |
| `Kalkar_2025.pdf` | Luminosity Determination with Restgas Target | NRW-FAIR Fourth Major Internal Networking Meeting, Kalkar, September 2025; internal networking talk. Removed the unsupported title suffix “in PANDA” from the prior listing |
| `PANDA_CM_06_2024_Final.pdf` | Luminosity Determination with Restgas Target | PANDA CM 24/2, Darmstadt, June 2024; internal collaboration talk |

The owner previously explicitly requested public slide buttons for these same four files and they already existed in the public repository. That authorization was retained; no new restricted file was introduced. Independent institutional/collaboration redistribution permission was not established. Before reusing internal slides elsewhere, the owner should confirm the applicable rules. All original PDFs remain unchanged; no new conference-publication claim is made.
