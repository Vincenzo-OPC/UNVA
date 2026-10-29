# UNVA

**Before You Hire a VA, Try AI.**

UNVA is an open-source, vendor-neutral movement for turning routine business work into usable AI-agent setups. We **do not build another bot**. We help people configure the ones that exist.

**Status:** Early public prototype. The landing page and local setup-pack generator are working software; they do not connect to or deploy third-party AI agents. The generated packs are starting instructions, **not** proof that a complete job has been replaced.

## Try the website

Open `index.html` with a static web server:

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

Select tasks (or drag them into the workbench), choose a platform, preview the workflow, and **download a ZIP setup pack**. The ZIP contains a README, a portable `SKILL.md`, platform guidance, approval rules, a JSON manifest, and test cases.

No account, API key, data upload, or dependency install required. Everything runs in your browser.

## Why UNVA?

The next generation of agents already has browser, computer-use, tools, memory and integrations. The hard part for a business is knowing **which work to give them, how to configure them, and how to check the results**.

UNVA turns a vague VA job description into a small, testable set of task workflows. We design for owner-controlled processes and encourage real-world evaluation before replacing any manual workflow.

## MVP capabilities

- Multi-select across common VA and BPO functions; accessible click/tap plus optional drag-and-drop.
- Compare Grok Bot, OpenAI dots, Claude Duet and Hermes Agent using links to official docs.
- Download an actual, self-contained ZIP of editable, plain-text setup instructions.
- Preview tasks and approval boundaries; no secret access or automatic external actions.
- Original, lightweight graphic system with no required external assets.
- Deterministic pack generation, dependency-free Node tests and GitHub Actions CI.

## Local development and tests

```bash
npm test
npm run check
python3 -m http.server 8000
```

Node 20+ recommended. No runtime npm packages are used.

## What comes next

1. First contributor-reviewed setup with a **real, consented demonstration** on Grok Bot.
2. Independently tested Hermes Agent skill installation.
3. More roles, integrations, verifiable case studies and community-contributed recipes.
4. Optional workflow execution *only if* the guide/pack experience demonstrates demand.

See [Roadmap](docs/ROADMAP.md) and [Contributing](CONTRIBUTING.md).

## The rules

**Open source, not open access to anyone's inbox.** Never upload customer information, credentials, or an employer's private SOP. Recipes use original or permissioned material and synthetic tests. Sending, paying, deleting, booking, publishing and consequential actions need explicit approvals and proper authorization.

Provider names are trademarks of their owners. UNVA is independent and is not endorsed by xAI, OpenAI, Anthropic, Nous Research or the separate government initiative named Pax Silica.

**License:** MIT (see LICENSE).