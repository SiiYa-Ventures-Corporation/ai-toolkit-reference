# AI Toolkit Reference

<!-- SIIYA-ECOSYSTEM-MAP:START (shared block — identical across all SiiYa repos; edit once, mirror to each README) -->
## 🗺️ SiiYa Ecosystem Map

_What every repo in the SiiYa ecosystem is for, so usage is trackable at a glance. This block is mirrored verbatim on the home page (README) of every repo. Last updated 2026-07-02._

**Platform & operations** — the shared foundation every product builds on.

| Repo | What it's used for | Stack · default |
|---|---|---|
| **[ai-operating-system](https://github.com/SiiYa-Ventures-Corporation/ai-operating-system)** | The shared **AI Operating System** — standards, agent roles, skills, governance/approval gates, prompt library, templates, memory architecture. Defines *how* products are built; consumed by every repo **by reference**. No product code. | Standards · `main` |
| **[siiya-workspace](https://github.com/SiiYa-Ventures-Corporation/siiya-workspace)** | Dev-environment **bootstrap** + Claude **state-durability store** — clones/syncs every repo, session-start health checks, persists `claude-state` snapshots so agent state survives Codespace rebuilds. No product code. | Shell + YAML · `main` |
| **[agent-command-center](https://github.com/SiiYa-Ventures-Corporation/agent-command-center)** (ACC) | Operator **admin console** for the Tri-Lens platform — Mission Control, Orchestrator Runtime, Agents Live, Blocker & Evidence Centers, Repository Index, Reports, Settings. | React + Vite + Firebase · `dev` |

**Tri-Lens** — the trust-intelligence / news-scoring product.

| Repo | What it's used for | Stack · default |
|---|---|---|
| **[tri-lens-pipeline](https://github.com/SiiYa-Ventures-Corporation/tri-lens-pipeline)** | The **core Tri-Lens platform** — deterministic, auditable Tri-Score scoring engine, backend pipeline, API, and the canonical architecture/ADR library. | Python pipeline · `main` |
| **[welcome-aboard](https://github.com/SiiYa-Ventures-Corporation/welcome-aboard)** | The **Tri-Lens feed / news portal UI** (dev-portal) — reader-facing front-end, per Design System v2.1. | React (Lovable) · `dev` |
| **[siiya-website](https://github.com/SiiYa-Ventures-Corporation/siiya-website)** | Public **landing site — apps.siiya.online** — marketing/login/legal pages; pulls live scoring from `trilens-api`. Static, Firebase Hosting. | Static HTML + Firebase · `dev` |

**Civic Lens** — the civic-intelligence product family.

| Repo | What it's used for | Stack · default |
|---|---|---|
| **[civic-lens](https://github.com/SiiYa-Ventures-Corporation/civic-lens)** | The **Civic Lens platform** — evidence ingestion, scoring, timelines, API and UI. Helps voters understand officials through verified evidence, never inference. | Platform · `main` |
| **[civic-lens-data-connectors](https://github.com/SiiYa-Ventures-Corporation/civic-lens-data-connectors)** | **Ingestion edge** — external data-source connectors pulling raw public records into the immutable evidence store. | Connectors · `main` |
| **[civic-lens-docs](https://github.com/SiiYa-Ventures-Corporation/civic-lens-docs)** | Civic Lens **knowledge base & docs** — evidence standards, ADR library, research, prompt library, scoring rules, benchmark cases. | Docs · `main` |
| **[civic-lens-ontology](https://github.com/SiiYa-Ventures-Corporation/civic-lens-ontology)** | The Civic Lens **ontology** — entity definitions, attributes, relationship schemas, entity-resolution rules, versioning. | Ontology · `main` |
| _civic-lens-knowledge_ | Reserved placeholder for the Civic Lens knowledge function — **not yet initialized** (no code). | — |

**Supporting & shared.**

| Repo | What it's used for | Stack · default |
|---|---|---|
| **[siiya-marketing](https://github.com/SiiYa-Ventures-Corporation/siiya-marketing)** | Marketing & brand **source of truth** — brand guidelines, design assets, media, collateral. `siiya-website`/apps consume from here. | Assets · `main` |
| **[siiya-testing](https://github.com/SiiYa-Ventures-Corporation/siiya-testing)** | Reusable **testing + bug-tracking template** for SiiYa repos — CI workflow, issue templates. Self-contained. | Template · `main` |
| **[ai-toolkit-reference](https://github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference)** | Interactive **visual reference** for AI coding tools, agents, and MCP configs. Zero-dependency static site (GitHub Pages). | Static site · `main` |
| **[outcome-intelligence](https://github.com/SiiYa-Ventures-Corporation/outcome-intelligence)** | **Future product** (roadmap) — causal reasoning & scenario-modeling platform. Built on the AI OS; not yet in active development. | Roadmap · `main` |

> Maintained as a single shared block delimited by `SIIYA-ECOSYSTEM-MAP:START/END` markers. To update: edit once and re-mirror the block into each repo's README between the same markers.
<!-- SIIYA-ECOSYSTEM-MAP:END -->


> Interactive visual reference for AI coding tools, agents, and MCP configurations.
> Zero frameworks. Zero npm dependencies. Just open `index.html`.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-brightgreen)](https://siiya-ventures-corporation.github.io/ai-toolkit-reference/)
![Guides](https://img.shields.io/badge/Guides-19-purple)
![Categories](https://img.shields.io/badge/Categories-7-orange)

---

## What Is This?

A single-page interactive reference for 19 AI development tools and configurations. Built for developers working with AI coding agents like Claude Code, Codex, Windsurf, and the Model Context Protocol (MCP) ecosystem.

**No frameworks. No build tools. Just open `index.html` in any browser.**

---

## Features

### Relationship Graph
- **Interactive relationship graph** — drag, zoom, pan nodes
- **Neighbor highlighting** — hover a node to dim unrelated tools
- **Connected-only filtering** — select categories to show only those nodes + their direct connections
- **Hover tooltips** — each node shows description, connections, and a learning tip
- **Category emoji icons** — nodes display icons (🤖 🧠 🔌 🧪 📋 📚 🎨)
- **Weighted edges** — stronger relationships = thicker lines
- **Animated edge pulses** — purple dots flow along connections
- **5 layout modes** — Physics, Tree, Radial, Circle, Grid
- **Physics toggle** — freeze nodes in place, drag to arrange manually
- **Fullscreen mode** — expand graph to fill the screen (ESC to exit)
- **PNG export** — download the current graph view as an image

### Guide Explorer (Right Panel)
- **Expandable cards** — click to reveal full markdown content
- **Full-text search** — filters cards AND highlights matching graph nodes
- **Category dropdown** — checkboxes for AI Agents, Code Intel, MCP, Testing, Rules, Reference, Creative + Apply button
- **AI Provider dropdown** — Claude (active), ChatGPT & Gemini (coming soon placeholders)
- **Connected-only filtering** — Apply filters to show only selected categories and their connections
- **Click graph nodes** — jump to that tool's reference card
- **GitHub links** — each card links directly to the source `.md` file on GitHub
- **Updated dates** — shows last-modified date per guide
- **Live guide count** — header shows how many guides are currently visible

### UI
- **SiiYa logo** — branding in the top-left header
- **Dark / Light theme toggle** — click ☀ in the header (light theme uses darker fonts for contrast)
- **Resizable panels** — drag the center bar to resize graph vs cards
- **Collapsible panels** — arrow buttons to hide graph or cards
- **Matching panel headers** — both panels have consistent styled header bars
- **Responsive** — works on desktop and mobile

---

## Quick Start

### One-command setup (recommended)

```bash
git clone https://github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference.git && cd ai-toolkit-reference && node setup.js
```

That's it. The setup script will:
1. Check that Node.js and Git are installed
2. Build `data.js` from the markdown guides
3. Start a local server on `http://localhost:8888`
4. Open your browser automatically

### Manual setup

```bash
# Clone the repo
git clone https://github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference.git
cd ai-toolkit-reference

# Option 1: Just open it
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# Option 2: Local dev server
npx -y http-server -p 8888
```

**Prerequisites:** Node.js 16+ and Git. Internet needed on first load for CDN scripts (vis-network, marked.js, Google Fonts).

---

## Project Structure

```
ai-toolkit-reference/
├── index.html                    # Interactive UI (all features, self-contained)
├── data.js                       # Auto-generated content (DO NOT edit manually)
├── build.js                      # Build script: reads guides/*.md → generates data.js
├── guides/                       # Source markdown files (EDIT THESE)
│   ├── Everything-Claude-Code.md
│   ├── Claude-Code-Plugins.md
│   ├── Claude-Code-Skills.md
│   ├── Claude-Code-Agents.md
│   ├── Claude-Mem.md
│   ├── Codex-CLI.md
│   ├── GitNexus.md
│   ├── Graphify.md
│   ├── Playwright-MCP.md
│   ├── Obsidian-MCP.md
│   ├── Obsidian-API-Reader.md
│   ├── Sync-To-Obsidian.md
│   ├── MCP-Scripts.md
│   ├── MCP-Tool-Configs.md
│   ├── Windsurf-Rules.md
│   ├── 500-AI-Projects-Reference.md
│   ├── Arcads-AI-Video.md
│   ├── Windsurf-Shortcuts.md
│   └── Claude-Code-Shortcuts.md
├── setup.js                      # One-command setup script (run this!)
├── .github/workflows/
│   └── update-ui.yml             # Auto-rebuilds on push to guides/
├── README.md
└── LICENSE
```

### What each file does

| File | Role | Edit? |
|------|------|-------|
| `guides/*.md` | Source content — one file per tool | **Yes** — this is where you add/edit content |
| `build.js` | Reads all `guides/*.md`, extracts content, gets git dates, writes `data.js` | **Yes** — add new guide entries here |
| `index.html` | The entire UI — graph, cards, search, filters, theme, all features | **Yes** — to add categories, tips, or UI changes |
| `data.js` | Auto-generated by `build.js` — contains all markdown content + metadata | **No** — this file is overwritten on every build |
| `setup.js` | One-command setup — clones, builds, starts server, opens browser | **No** — just run it |
| `update-ui.yml` | GitHub Actions workflow — triggers build + deploy on push | Rarely |

---

## How to Add a New Guide

### Step 1: Create the markdown file

Create `guides/My-New-Tool.md` with your content. Use standard markdown:

```markdown
# My New Tool

**Category:** AI Agent | Version: 1.0

## Overview

Description of the tool...

## Installation

Steps to install...

## Commands

| Command | What It Does |
|---------|-------------|
| `/run`  | Runs the tool |

## Tips

- Tip 1
- Tip 2
```

### Step 2: Register it in `build.js`

Open `build.js` and add an entry to the `SHEET_DEFS` array:

```js
{
  id: 17,                          // Next available ID
  name: "My New Tool",             // Display name
  file: "My-New-Tool",             // Filename WITHOUT .md
  cat: "agent",                    // Category key (see table below)
  catLabel: "AI Agent",            // Category display label
  color: "#fc5c7c",                // Node color (hex)
  desc: "Short one-line summary",  // Shows in card header + tooltip
  links: [1, 7]                    // IDs of related tools (creates graph edges)
}
```

### Step 3: Add a learning tip in `index.html` (optional)

Open `index.html` and find the `TIPS` object. Add a tip for your new tool:

```js
const TIPS = {
  // ... existing tips ...
  17: 'Tip: Quick actionable hint about using this tool effectively.'
};
```

This shows when users hover over the node in the graph.

### Step 4: Build and push

```bash
node build.js        # Regenerates data.js with your new guide
git add -A
git commit -m "feat: add My New Tool guide"
git push origin main
```

GitHub Actions will auto-deploy. If you're running locally, just refresh the browser.

---

## Available Categories

| Key | Label | Color | Hex |
|-----|-------|-------|-----|
| `agent` | AI Agent | Red | `#fc5c7c` |
| `intel` | Code Intel | Orange | `#fcac5c` |
| `mcp` | MCP | Green | `#5cfc9c` |
| `test` | Testing | Purple | `#7c5cfc` |
| `rules` | Rules | Teal | `#5cfcdc` |
| `ref` | Reference | Yellow | `#fcdc5c` |
| `creative` | Creative | Pink | `#fc5ce8` |

### Adding a new category

1. Pick a key, label, and color
2. Add a CSS variable in `index.html`: `--cat-mycat: #hexcolor;`
3. Add a checkbox in the Categories dropdown in `index.html`
4. Use the key in your `SHEET_DEFS` entry

---

## Auto-Update Flow (GitHub Actions)

When you push changes to any `guides/*.md` file on `main`:

```
Push to main
  └─▶ GitHub Actions triggers
       └─▶ Runs: node build.js
            └─▶ Reads all guides/*.md
            └─▶ Extracts markdown content
            └─▶ Gets last-modified dates from git
            └─▶ Writes data.js
       └─▶ Commits updated data.js
       └─▶ Deploys to GitHub Pages
```

The whole process takes ~30 seconds.

---

## Contributing

We welcome contributions! Here's how:

### Quick contributions (edit on GitHub)
1. Navigate to any file in `guides/`
2. Click the pencil icon to edit
3. Make your changes
4. Submit a Pull Request

### Full contributions (local)
```bash
# Fork the repo on GitHub, then:
git clone https://github.com/YOUR-USERNAME/ai-toolkit-reference.git
cd ai-toolkit-reference

# Create a branch
git checkout -b add-my-tool

# Add your guide (see "How to Add a New Guide" above)
# ...

# Build locally to verify
node build.js
# Open index.html in browser to check

# Commit and push
git add -A
git commit -m "feat: add My Tool guide"
git push origin add-my-tool

# Open a Pull Request on GitHub
```

### What you can contribute
- **New guides** — Add reference docs for any AI tool, MCP server, or workflow
- **Fix existing content** — Correct errors, add missing commands, update versions
- **Add learning tips** — Add hover tips in `index.html` for existing tools
- **New categories** — Propose new tool categories with colors
- **UI improvements** — Enhance the interactive features
- **Translations** — Translate guides to other languages

### Guidelines
- One guide per `.md` file in `guides/`
- Keep descriptions concise — this is a reference, not a tutorial
- Use tables for commands and configs
- Link related tools via the `links` array in `build.js`
- Test locally with `node build.js` + open `index.html` before submitting

---

## Fork & Customize

This project is designed to be forked and made your own. You can:

- **Replace all guides** with your own tool references
- **Change categories** — edit colors, labels, and filter buttons
- **Customize the theme** — edit CSS variables in `index.html`
- **Rebrand** — change the header title and links
- **Add your own tools** — the system is completely generic

---

## Tech Stack

| Component | Library | CDN |
|-----------|---------|-----|
| Graph visualization | [vis-network 9.1.6](https://visjs.github.io/vis-network/) | unpkg.com |
| Markdown rendering | [marked.js](https://marked.js.org/) | cdn.jsdelivr.net |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Google Fonts |
| Build | Node.js (vanilla, zero deps) | — |
| CI/CD | GitHub Actions | — |
| Hosting | GitHub Pages | — |

**Zero npm dependencies. Zero frameworks. Pure HTML + vanilla JS.**

---

## License

MIT — free to use, fork, modify, and distribute.

---

**Built by [SiiYa Ventures Corporation](https://siiya.online)**
