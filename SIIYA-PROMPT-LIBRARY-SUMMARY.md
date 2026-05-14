# SiiYa Prompt Library — Project Summary

## What it is

A unified web application that combines two knowledge corpora into a single linked graph:

1. **Prompts** — forked from [prompts.chat](https://prompts.chat) (200+ ready-to-use LLM prompts)
2. **AI Toolkit Reference** — 17 tool guides (Claude Code Skills, MCP servers, Codex CLI, Playwright MCP, Obsidian MCP, GitNexus, Windsurf Rules, etc.)

Both live in the **same database table** and are visualized together as a relationship graph so users can discover which prompts pair with which tools.

---

## Architecture

### Data model

- **Single table** `prompts`, discriminated by a `type` enum:
  - `PROMPT` — paste-into-LLM text (square nodes in graph)
  - `TOOLKIT` — tool reference guide (circle nodes in graph)
- **Edges** stored in `PromptConnection` table with a `label` field:
  - `requires_tool` — prompt needs this tool
  - `works_with` — soft affinity
  - `chains_to` — prompt workflow
  - `related_tool` — toolkit-to-toolkit relation

### Stack

- **Frontend:** Next.js (upstream prompts.chat fork)
- **ORM:** Prisma
- **DB:** Neon Postgres
- **Viz:** D3.js (lifted from `ai-toolkit-reference/index.html`)
- **MCP:** endpoint auto-exposes prompts to Claude Code

### Toolkit categories + colors

| Category | Color    |
|----------|----------|
| Agent    | `#fc5c7c` |
| Intel    | `#fcac5c` |
| MCP      | `#5cfc9c` |
| Test     | `#7c5cfc` |
| Rules    | `#5cfcdc` |
| Ref      | `#fc5cdc` |

### Branding

- SiiYa purple: `#534AB7` / `#7a72d9`
- Teal accent: `#1D9E75`
- Dark theme: `#0b0b14`

---

## Mockup

`siiya-preview.html` — single-file HTML mockup with:

- Header with All / Prompts / Toolkit filter pills
- Search toolbar with live counter (e.g. `Showing 11 of 251`)
- SVG graph: 8 toolkit nodes (circles) + 5 prompt nodes (squares) + labeled edges
- Right-side card panel listing matching entries
- Legend explaining node + edge kinds

### Interactivity (planned upgrade)

| Action | Effect |
|--------|--------|
| Click a node | Highlights it, dims non-neighbors, scrolls matching card into view |
| Click a card | Mirrors node selection |
| Click a chip | Jumps to the linked target node |
| Click a filter pill | Filters cards + graph by kind |
| Type in search | Live-filters by name |
| Hover a node | Tooltip with name, description, edges |
| Click empty graph | Clears selection |

---

## Effort breakdown

### One-time setup (~35 min)

| Task | Effort | Notes |
|------|--------|-------|
| Seed 200+ prompts from prompts.chat | ~0 hrs | Upstream `prisma/seed.ts` already does this |
| Seed 17 toolkit guides | ~30 min | Write `scripts/seed-toolkit.ts` (~50 LOC) reading `data.js` + `guides/*.md` |
| Schema delta | ~5 min | Add `TOOLKIT` to `PromptType` enum, add `weight Float?` to `PromptConnection` |

### Per-prompt cost (ongoing)

| How | Effort | Built? |
|-----|--------|--------|
| Click "+ New Prompt" → form → save | ~1 min | Ships with upstream |
| Tag + link to toolkit entries | +30 sec | Needs ~3-4 hrs dev for toolkit-link picker |
| Edit / version / comment / vote | already supports | Ships with upstream |
| MCP auto-exposes to Claude Code | automatic | Ships with upstream |

### Bulk imports

| Source | Effort |
|--------|--------|
| CSV/JSON import | ~10 min (one-shot script) |
| Scrape public corpus | ~1–2 hrs (parse + dedupe + insert) |
| Admin bulk-import UI | ~half day |

---

## Where the real effort lives

Not in adding prompts — in **curation**:

- Which prompts make the cut (quality filter)
- Category + tag assignment
- Which toolkit guides each prompt should link to
- Writing good descriptions

This is product/editorial work, not engineering. A scoring engine can auto-rank prompts so curators focus on the top of the funnel.

---

## Status

| Area | State |
|------|-------|
| Interactive HTML mockup | Designed; awaiting paste into `C:\Projects\github\ai-toolkit-reference\siiya-preview.html` |
| Schema migration | Specced (~5 min change) |
| Toolkit seeder script | Specced (~50 LOC) |
| Toolkit-link picker UI | Specced (~3-4 hrs) |
| SiiYa branding pass | Pending |
| Neon DB URLs | **Blocked — needed to start** |
| Push auth (PAT or MCP scope) | **Blocked — needed to start** |

---

## TL;DR

Once built (~1 day of engineering), **adding a prompt is a ~1-minute browser task**. Bulk imports are scriptable. The system is designed for cheap incremental growth. The marginal cost per prompt is near zero — the architecture deliberately frontloads the work.

**Next unblock:** Neon URLs + push auth.
