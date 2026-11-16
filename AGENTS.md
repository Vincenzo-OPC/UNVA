# AGENTS.md: UNVA

Single entry point for coding agents (Codex, Claude Code, Cursor, Grok, ChatGPT) and human contributors. This repo is **public**: never add private notes, credentials, customer data or anything from the owner's other projects.

## Source of truth and workflow

- **`main` is the single source of truth.** Every agent (ChatGPT, Codex, Grok, Claude, Cursor) starts from the latest `main` (`git pull` / fresh clone) before any change, never from an old chat, zip or local copy.
- Work on a branch and open a pull request into `main`. Fixed PRs are merged to `main` by the owner (GT); agents never merge their own PRs.
- **Never deploy** (Netlify, Render, Vercel, Pages or any other host) without the owner's explicit approval.

## Purpose and current status

UNVA ("Before You Hire a VA, Try AI") is an open-source, vendor-neutral guide and setup-pack generator. A visitor picks routine VA/BPO tasks and an AI agent platform, previews the workflow, and downloads a ZIP with a `SKILL.md`, setup guide, approval rules, a JSON manifest and synthetic test cases. It does not run or connect to any agent.

Status (16 Nov 2026): early public prototype. Landing page and in-browser pack generator work; 5/5 Node tests pass. GitHub Pages is not enabled.

## Stack

Static HTML/CSS/vanilla ES modules (`index.html`, `styles.css`, `src/*.js`). No runtime dependencies, no build step. Node 20+ only for tests.

## Setup, run, test, lint, build

```bash
python3 -m http.server 8000   # open http://localhost:8000
npm run check                 # node --check on src/catalog.js, engine.js, app.js
npm test                      # node --test tests/*.test.mjs  (verified 16 Nov 2026: 5 pass, 0 fail)
```

There is no build or lint step. Do not add a bundler or framework without the owner's approval.

## Repo map

| Path | What |
|---|---|
| `index.html`, `styles.css`, `assets/` | Landing page and visual system |
| `src/catalog.js` | Task catalog (roles, tasks) and platform list with official doc links |
| `src/engine.js` | Deterministic pack generation (pure functions, tested) |
| `src/app.js` | UI wiring: selection, drag-and-drop, preview, ZIP download |
| `tests/engine.test.mjs` | Node tests for the engine |
| `docs/ROADMAP.md`, `docs/DESIGN.md` | Roadmap and design system |
| `.github/workflows/ci.yml` | Runs `check` and `test` on push/PR (minutes are limited; run locally first) |

## Source-of-truth docs

- [`README.md`](README.md): product promise, rules, MVP scope.
- [`docs/ROADMAP.md`](docs/ROADMAP.md): Now / Next / Later and non-goals.
- [`docs/DESIGN.md`](docs/DESIGN.md): Ink / Bone / Signal palette and interaction principles.
- [`CONTRIBUTING.md`](CONTRIBUTING.md), [`SECURITY.md`](SECURITY.md), [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
- New ideas: add a line to [`docs/ROADMAP.md`](docs/ROADMAP.md) under Later, or a note in `docs/`.

## Conventions

- Brand is **UNVA** (all caps).
- Keep pack generation deterministic and covered by `tests/engine.test.mjs`.
- Platform capabilities must link an official source with a check date; never invent native imports or integrations.
- Label results as idea, simulated, community-tested or verified live; only verified live may claim real impact.
- Accessible first: semantic HTML, keyboard support, visible focus, reduced motion. Tap first, drag-and-drop as enhancement.
- No purple gradients, glowing orbs, fake testimonials or savings figures.
- Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`).

## Definition of done

1. `npm run check` and `npm test` pass locally; output pasted in the PR.
2. New engine behaviour has a test.
3. UI changes checked on a phone-width viewport and by keyboard; screenshot in the PR.
4. Docs updated (README or ROADMAP) when scope changes.

## Guardrails

- No merge and no push to `main`; open a draft PR. The owner merges.
- No deploys or GitHub Pages changes without the owner's approval.
- Never commit secrets, private SOPs, customer records or personal data. Flag any you find without printing them.
- GitHub Actions minutes are limited: prove changes locally; do not rerun workflows.
- Delete nothing the owner wrote; supersede with a dated note.

## Open priorities (issues, 16 Nov 2026)

- [#1](https://github.com/Vincenzo-OPC/UNVA/issues/1) Validate one Grok Bot inbox-triage setup (good first issue).
- [#2](https://github.com/Vincenzo-OPC/UNVA/issues/2) Review Hermes Agent `SKILL.md` compatibility.
- [#3](https://github.com/Vincenzo-OPC/UNVA/issues/3) Accessibility and mobile usability review.
- Roadmap "Now": confirm CI passes, enable GitHub Pages (owner action), real-device accessibility review.

## Owner

Owner: `Vincenzo-OPC`. Coordinating bot: Chief of Staff (Grok Bot).
