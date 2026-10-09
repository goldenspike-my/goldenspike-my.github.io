# Handoff: 金釘子 GoldenSpike website

_Last updated: 2026-10-10 (site LIVE; Pages CMS connected)_

## LIVE STATUS (2026-10-10)
- Live at https://goldenspike-my.github.io/ — repo https://github.com/goldenspike-my/goldenspike-my.github.io (GitHub user `goldenspike-my`).
- Project folder is now in Google Drive: `G:\My Drive\golden-spike\goldenspike-site` (local git repo, remote `origin`, branch `main`). **Always `git pull` before editing locally** — Pages CMS commits directly to GitHub.
- Pages Source = GitHub Actions. Pages CMS connected and tested (edit → auto-redeploy works).
- Monitor basemap switched from CARTO (now shows "API KEY REQUIRED" off localhost) to Esri World_Dark_Gray_Base (no key).
- videos.json filled with all 9 YouTube IDs; 5 travel videos set to series `vlog` (English titles for those are Claude's guesses — he should review).
- He asked to be guided in English this session (use English if he asks; otherwise the Chinese default below).
- PC has git (Git Credential Manager, signed in) but NO node/npm/gh/python.
- Next-steps 1–3 below are done.
- **zh/en twins** (src/lib/twins.ts): a post/quiz with the same `slug` but other `lang` is its translation. Internal id = `slug` (zh) or `slug@en` (en); always build URLs with `slugOf()`. Language toggle + "Read in English" link jump to the twin; lists show own-language items + untranslated ones from the other language. CMS filenames include `-{lang}`.
- Added: English rock-cycle post; quizzes (zh+en) for rock-cycle, sleeping-giant, segamat, golden-spike (written from the YouTube descriptions — he should verify against his videos).
- Video thumbnails fixed (img height attr forced 4:3 → now 16:9 crop removes YouTube's black bars).
- **Auto-translate (working, tested 2026-10-10)**: `.github/workflows/translate.yml` runs on pushes to posts/quizzes. `scripts/find-missing-twins.mjs` lists published items with no twin → Claude Code CLI (`claude -p`, his Pro plan via secret `CLAUDE_CODE_OAUTH_TOKEN`, ~1-year token from `claude setup-token`) writes the twin as `draft: true` → bot commits. Rules in `scripts/translate-prompt.md`. Note: anthropics/claude-code-action does NOT support `push` events, hence the CLI. Bot commits don't trigger deploy (fine: drafts); his "untick draft" save in CMS does.
- All fixed UI text lives in `src/data/ui.json` (66 keys, CMS section「网站文字」, ordered by page label); `t()` reads it. New text → add a key to ui.json + a field in the `ui` block of .pages.yml. Post images: `src/lib/rehype-figures.mjs` (alt-text keywords #小 #中 #左 #右). Monitor markers are drawn at lon −360/0/+360.
- Claude CLI is installed at `%USERPROFILE%\.local\bin\claude.exe` but not on PATH.
- Gotcha: when writing files via Bash heredocs in this environment, backslashes got eaten — use the Write/Edit tools for code with regex/escapes. Don't `npm ci` inside the Google Drive folder (super slow + syncs node_modules); build in a temp clone instead.

## About the user
- Malaysian geology graduate (University of Malaya), now doing seismology research at Kyoto University.
- Runs the YouTube channel 金釘子 / GoldenSpike (https://www.youtube.com/@goldenspike_my, channel ID `UC274wKcP3WEGx5zWVIMGZMA`): geology/seismology education for Malaysian Chinese viewers + travel vlogs.
- **Not a programmer.** Can tweak simple values and roughly read code. Explain with analogies, keep steps small, ask a clarifying question before big changes.
- **Reply in Chinese (简体)** in conversation. Code comments meant for him: Chinese.
- Windows PC. Project lives in OneDrive: `C:\Users\yxuan\OneDrive - Kyoto University\golden-spike\goldenspike-site`
  (the parent `golden-spike` folder also holds his OLD Google AI Studio React prototype — reference only, do not deploy it; its `.env.local` holds a Gemini key, never commit it).

## Goal
Free personal site = YouTube channel homepage + personal blog, bilingual (中文 default, `/en/` English).
Hosting: **GitHub Pages** (free). Posting: **Pages CMS** (app.pagescms.org) so he can type posts in a web editor.

## Decisions already made (don't re-ask)
- Budget: completely free (no custom domain for now).
- Look: his own dark brown + gold style (#1A160C / #F2B90D, Playfair Display + Manrope + Space Grotesk, Noto Serif/Sans SC for Chinese).
- **Mixed theme**: homepage alternates dark sections (hero, videos, quake monitor, footer) and light "paper" sections (#F5F1E8: blog, Did-you-know, about). **Article pages are light.**
- All pages in v1: Home, Videos, Blog (+ post pages), Quake Monitor, Quiz, Specimens gallery, About.
- Removed from his old prototype: login, XP/leaderboard, comments, newsletter form (need a server).
- Blog categories: geo (地质与地震), life (京都生活), travel (旅行).
- Recommended repo name: `<username>.github.io` (base path `/`; images inserted in post bodies use `/uploads/...` and would break under a sub-path).

## What's built (status: complete, tested locally, NOT yet deployed)
- **Astro 5.18.2** static site, `leaflet 1.9.4`. `npm install` → `npm run dev` (http://localhost:4321) / `npm run build`.
- Structure:
  - `src/views/*.astro` page bodies (Home, Videos, BlogList, Post, Monitor, QuizList, Quiz, Gallery, About); `src/pages/**` are thin zh + `en/` wrappers.
  - `src/lib/i18n.ts` all UI strings (zh/en), `url()`/`asset()` helpers (respect BASE_URL), categories/series/specimen types.
  - `src/lib/videos.ts` fetches the YouTube RSS at build time; merges with `src/data/videos.json` (series + English titles). Falls back to videos.json if RSS fails (it fails in sandboxes; works on GitHub Actions).
  - `src/lib/quakes.ts` + `QuakeList.astro` + `Monitor.astro`: live USGS GeoJSON in the browser (4.5_day, 4.5_week, 2.5_day), region filters (global/Japan/SE Asia), Pacific-centred Leaflet map on CARTO dark tiles. USGS CORS confirmed working in a real browser.
  - Content collections (`src/content.config.ts`): `posts` (md), `quizzes` (json; `answer` is 1-based), `specimens` (md, empty so far), `pages` (about-zh.md / about-en.md).
  - `src/data/site.json` (hero text, links), `facts.json` (flip cards).
  - `src/styles/global.css`: colour tokens + `.sec-dark` / `.sec-darker` / `.sec-light` section themes (components read `--fg`, `--muted`, `--accent`, `--card`, `--line`, `--ph`).
- `.pages.yml`: Pages CMS editor config in Chinese (posts, quizzes, specimens, videos.json, facts.json, about pages, site settings). Uploads → `public/uploads`, URL `/uploads`.
- `.github/workflows/deploy.yml`: builds on push to main + daily cron 22:00 UTC (refreshes YouTube videos) → GitHub Pages. Uses configure-pages outputs as `SITE_URL` / `BASE_PATH` env (read in `astro.config.mjs`).
- `README.md`: his Chinese step-by-step guide (go-live + daily use).
- Sample content written by Claude (he should review/rewrite): `src/content/posts/rock-cycle.md`, `src/content/quizzes/rock-cycle.json`. `videos.json` has his 4 real video titles but **no YouTube IDs / dates yet**.
- Verified: builds clean (only warning: specimens collection empty), screenshots at 1440px and 390px, quiz flow, map markers + region filter, mobile menu, base-path links.

## His existing videos (for series mapping)
1. 金釘子是什么？频道介绍 (channel) 2. 昔加末地震是怎么发生的？ (news) 3. 马来半岛沉睡的巨人 (seismology) 4. 石头回收计划：岩石循环 (rocks)

## Next steps
1. **Go live** with him (README section 一): create `<username>.github.io` repo, upload files (incl. `.github/` and `.pages.yml`; not node_modules/dist), Settings → Pages → Source: GitHub Actions, wait for green Action, open site. If he's OK with installing tools, GitHub Desktop or `git` + `gh` is easier than web upload.
2. Connect Pages CMS (app.pagescms.org, install GitHub App on that repo only). Verify `.pages.yml` loads; adjust field syntax if the editor complains (written from docs, not yet tested live).
3. Fill `videos.json` with YouTube IDs once the live site shows them (check the Action log / site), assign series, add English titles.
4. Replace placeholders: his photo (about pages), Instagram/email in site.json, real article, specimen photos.
5. Nice-to-haves (not started): English versions of posts, more quizzes per video, Open Graph images, a JMA (Japan) feed on the monitor, custom domain later.

## Design reference
Design canvas artifact (dark vs mixed comparison): https://claude.ai/artifact/JMRzfjpc6tayyxKpFFm1kF
