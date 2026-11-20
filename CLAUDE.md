# goldenspike-my.github.io

The Golden Spike channel website (Astro, GitHub Pages, edited in Pages CMS). This checkout lives at
`C:\Users\yxuan\Github\goldenspike-my.github.io` - never in Google Drive (Drive sync corrupts `.git`).

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues for `goldenspike-my/goldenspike-my.github.io` via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Security and secrets

These rules are permanent for every session in this project.

- **Secure coding.** Every time you write or change code, check it for security vulnerabilities (injection, missing auth,
  path traversal, open redirects, `${{ }}` expressions inside `run:`) and for secret exposure (secrets in logs, error
  messages, URLs, the built site, CLI flags). Fix it or tell the owner.
- **No hardcoded secrets.** This repo is public. Never put API keys, tokens, passwords or credentials in code, content,
  config, docs or CI files; `CLAUDE_CODE_OAUTH_TOKEN` exists only as a GitHub Actions secret. Every file that holds a
  secret must be in `.gitignore` before it is created. (`cloudflareAnalyticsToken` in `src/data/site.json` is a public
  Web Analytics beacon token, not a secret.)
- **CI.** Keep least-privilege `permissions:`, actions pinned to full commit SHAs (version in a comment),
  `@anthropic-ai/claude-code` pinned to an exact version, and `persist-credentials: false` in the translate job so
  Claude never sees `GITHUB_TOKEN`.
- **Scan before finishing or committing.** Run BOTH scanners and report the result (including "clean") before you
  finish a task that changed files and before every commit. Show findings redacted, never the full value, and stop for
  the owner's decision if anything is found:
  ```bash
  gitleaks git . --log-opts=--all --redact       # full history, all branches
  gitleaks git . --pre-commit --redact           # unstaged changes
  gitleaks git . --pre-commit --staged --redact  # staged changes
  trufflehog git file://. --no-verification      # full history
  ```
  `.gitleaksignore` lists reviewed false positives; add entries only with the owner's OK.
- `HANDOFF.md` holds internal working notes: it stays local (gitignored), not published.
