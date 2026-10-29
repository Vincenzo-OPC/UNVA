# Contributing to UNVA

UNVA is a community project for replacing avoidable manual tasks with **tested, owner-controlled agent workflows**, using existing products rather than building a new agent runtime.

## Good first contributions

- Improve a real business-task procedure or add a new synthetic test fixture.
- Verify current platform instructions against an official source, and record the date.
- Improve keyboard accessibility, mobile performance, design, or README clarity.
- Translate setup instructions while preserving technical accuracy.
- Report where a workflow failed, what was expected, and how to reproduce it.

## Pull request checklist

1. Explain the business task, expected outcome, which roles benefit, and exact permissions.
2. Include a synthetic test with realistic failure modes, including prompt injection and missing access.
3. Link primary product documentation for capabilities and restrictions. Do not invent native imports or integration features.
4. Keep platform-specific setup separate from reusable instructions.
5. Do not upload private company SOPs, messages, customer records, personally identifying information, model secrets, or credentials.
6. Label results as **idea**, **simulated**, **community-tested**, or **verified live**. Only the last category may claim live impact with appropriate evidence and consent.
7. Run `npm run check && npm test` locally.

## Maintainer philosophy

Strong defaults, simple deployment, honest results, one coherent visual system. The project is welcoming to former VAs and domain experts; their knowledge of edge cases is valuable. Debate ideas, not people.

Contributions are reviewed. Being open source does not mean unsafe code gets merged. High-impact automations need stronger evidence and review.

Licensed under MIT unless otherwise indicated. By contributing you agree to license your original contribution under the repository license. For security disclosures see SECURITY.md.