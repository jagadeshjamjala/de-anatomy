# DE Anatomy

Learn data engineering by dissection. Five body systems, eleven organs, each mapped to a real data-platform component with real CLI commands, failure modes and a reference pipeline, plus an interactive **Lab** where you change parameters and rewire the pipeline to see what happens.

Built for engineers who learn better from a mental model than from a glossary.
<img width="1434" height="803" alt="DE Anatomy" src="https://github.com/user-attachments/assets/c50d2821-f9e8-4b73-8c8e-f09836e64d5c" />

**Live site:** https://jagadeshjamjala.github.io/de-anatomy/

## What is in it

| Area | What it does |
|---|---|
| Systems | The anatomy metaphor: five systems, eleven organs, failure modes on every one |
| Pipeline | The 7-stage reference pipeline |
| Quiz | 32 questions |
| **Lab · Pipeline** | Parameter sandbox and wiring bench with real formulas |
| **Lab · Dimension** | SCD types × load strategy × delete handling, and the point-in-time join |
| **Lab · Right-size** | Pick an architecture for a requirement card and compare build, upkeep and true cost with the simplest design that fits |
| **Lab · Detective** | 12 "why is the number wrong?" cases: general SQL and modelling mistakes, and migration parity |

Every estimated constant in the Lab can be overridden under **Calibrate to your environment**. Your values and progress are saved in your browser (`localStorage`).

## Known limits

Cost, throughput and effort figures in the Lab are rule-of-thumb estimates, marked `est` in the app. Replace them with numbers measured on your own platform before drawing conclusions.

## Run locally

There is no build step. Open `index.html` in a browser, or serve it:

```bash
npm start        # http://localhost:8080
```

## Test and deploy

```bash
npm install
npx playwright install chromium
npm test
```

Pushing to `main` runs the same smoke test and then publishes to GitHub Pages. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## License

MIT
