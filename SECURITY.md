# Security Policy

UNVA's starter generator is static and runs in the user's browser. It does **not** connect to external business accounts, upload job descriptions, execute generated instructions or install agents.

## Report a problem

Avoid posting vulnerabilities containing exploit details or user data in public issues. Use GitHub's private vulnerability-reporting feature if it is enabled. Otherwise contact the repository maintainer privately through GitHub before sharing sensitive details.

## Scope of generated packs

- Treat prompts, job descriptions, emails and webpage content as untrusted.
- Give agents only the minimum permissions needed.
- Start with synthetic data and read-only access.
- Require explicit approval for external sends, spending, refunds, publishing, deletion, hiring decisions or other irreversible actions.
- Review every downloaded SKILL.md before running it. No script in the current pack is auto-executed.
- Do not commit secrets or identifiable customer records.

Security claims apply only to the code actually tested. No third-party platform's safety or suitability is guaranteed.