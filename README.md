# DE Anatomy

Learn data engineering by dissection. Five body systems, eleven organs, each mapped to a real data-platform component with real CLI commands, failure modes and a reference pipeline — plus an interactive **Lab** where you change parameters and rewire the pipeline to see what happens.

**Live site:** `https://<your-username>.github.io/de-anatomy/`

## What is in it

| Area | What it does |
|---|---|
| Systems | The anatomy metaphor: five systems, eleven organs, failure modes on every one |
| Pipeline | The 7-stage reference pipeline |
| Quiz | 32 questions |
| **Lab · Pipeline** | Parameter sandbox and wiring bench with real formulas; estimates are labelled `est` |
| **Lab · Dimension** | SCD types × load strategy × delete handling, and the point-in-time join |
| **Lab · Right-size** | Pick an architecture for a requirement card; see build, carry and true cost vs. the simplest design that fits |
| **Lab · Detective** | 12 "why is the number wrong?" cases (general SQL/modelling mistakes and migration parity) |

Every estimated constant can be overridden under **Calibrate to your environment**; values are saved in your browser (`localStorage`).

## Repository layout

```
de-anatomy/
├── index.html                  The whole app (HTML + CSS + JS, no build step)
├── README.md
├── LICENSE
├── package.json                Only for the smoke test
├── .gitignore
├── .nojekyll                   Tell GitHub Pages to serve files as-is
├── tests/
│   └── smoke.mjs               Loads the page, exercises every Lab bench
└── .github/workflows/
    └── pages.yml               Test, then deploy to GitHub Pages on push to main
```

## Run locally

No build is needed. Either open `index.html` in a browser, or serve it:

```bash
npm start        # http://localhost:8080
```

## Test

```bash
npm install
npx playwright install chromium
npm test
```

The smoke test fails if the page throws, if a Detective case stops being wrong or loses its right answer, or if a Right-size scenario has no valid design.

## Deploy

Pushing to `main` runs the test and publishes to GitHub Pages. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Design rules (do not break these)

- Keep the anatomy metaphor, the colour tokens and fonts (navy `#0A0E1A`, teal `#00C9A7`, amber `#F0A500`; Space Grotesk + JetBrains Mono).
- Code snippets stay real, runnable commands.
- Every primitive keeps its failure modes.
- The 7-stage reference pipeline keeps its stages, order and content; the Lab is a separate mode that borrows from it.

## License

MIT
