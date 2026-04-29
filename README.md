# AI Toolkit Reference

> Interactive visual reference for AI coding tools, agents, and MCP configurations.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-brightgreen)](https://siiya-ventures-corporation.github.io/ai-toolkit-reference/)

![AI Toolkit Reference Screenshot](https://img.shields.io/badge/Guides-16-purple) ![Categories](https://img.shields.io/badge/Categories-6-orange)

---

## What Is This?

A single-page interactive reference for 16 AI development tools and configurations. Built for developers working with AI coding agents like Claude Code, Codex, Windsurf, and the Model Context Protocol (MCP) ecosystem.

**No frameworks. No build tools. Just open `index.html`.**

### Features

- **Interactive Graph** — Visual relationship map between all tools (vis-network)
- **Searchable Cards** — Full-text search across all content
- **Category Filters** — AI Agents, Code Intel, MCP, Testing, Rules, Reference
- **Click Graph Nodes** — Jump to that tool's reference card
- **GitHub Links** — Each card links to the source markdown
- **Auto-Updated** — GitHub Actions rebuilds when guides change
- **Dark Theme** — Modern UI with Inter + JetBrains Mono

---

## Live Page

After enabling GitHub Pages:

```
https://siiya-ventures-corporation.github.io/ai-toolkit-reference/
```

---

## Quick Start

### Just open it
```bash
# Clone
git clone https://github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference.git

# Open in browser
open index.html
```

### Local server
```bash
npx http-server -p 8888
```

---

## What's Included

### 16 Reference Guides

| # | Guide | Category | What It Covers |
|---|-------|----------|---------------|
| 1 | Everything Claude Code | AI Agent | 36 agents, 80+ skills, 30+ commands, hooks, rules |
| 2 | Claude Code Plugins | AI Agent | Plugin install, update, MCP server configs |
| 3 | Claude Code Skills | AI Agent | Custom skills, GitNexus skills, cluster-based skills |
| 4 | Claude Code Agents | AI Agent | 7 AI roles with permissions and boundaries |
| 5 | Claude-Mem | AI Agent | Persistent memory via SQLite + ChromaDB |
| 6 | Codex CLI | AI Agent | Adversarial reviewer, FIA constraints |
| 7 | GitNexus | Code Intel | Code knowledge graph, impact analysis, MCP tools |
| 8 | Graphify | Code Intel | Knowledge graph generator from any input |
| 9 | Playwright MCP | Testing | Browser automation via MCP |
| 10 | Obsidian MCP | MCP | Vault bridge for AI tools |
| 11 | Obsidian API Reader | MCP | Direct PowerShell/batch REST access |
| 12 | Sync-To-Obsidian | MCP | Project-to-vault sync with routing rules |
| 13 | MCP Scripts | MCP | 7 launcher scripts for MCP server |
| 14 | MCP Tool Configs | MCP | Per-tool JSON configs for 5 AI tools |
| 15 | Windsurf Rules | Rules | Terminal raw mode, role boundaries |
| 16 | 500 AI Projects | Reference | ML/DL project ideas mapped to use cases |

### 6 Categories

| Category | Color | Count |
|----------|-------|-------|
| AI Agents | Red | 6 |
| Code Intel | Orange | 2 |
| MCP & Obsidian | Green | 5 |
| Testing | Purple | 1 |
| Rules | Teal | 1 |
| Reference | Yellow | 1 |

---

## How It Works

```
guides/*.md      <- Source markdown files (edit these)
build.js         <- Reads markdown, generates data.js
data.js          <- Auto-generated content for the UI
index.html       <- Interactive single-page UI
```

### Auto-Update Flow

1. Edit any `.md` file in `guides/`
2. Push to `main`
3. GitHub Actions runs `build.js`
4. `data.js` regenerated with new content + git dates
5. Committed automatically
6. GitHub Pages deploys

---

## Add Your Own Guide

1. Create `guides/My-Tool.md` with your content
2. Add an entry to `SHEET_DEFS` in `build.js`:
   ```js
   { id: 17, name: "My Tool", file: "My-Tool",
     cat: "agent", catLabel: "AI Agent", color: "#fc5c7c",
     desc: "Short description", links: [1, 2] }
   ```
3. Run `node build.js`
4. Commit and push

---

## Fork & Customize

This is designed to be forked. You can:

- **Replace all guides** with your own tool references
- **Change categories** by editing `SHEET_DEFS` colors and labels
- **Customize the theme** by editing CSS variables in `index.html`
- **Add new categories** by adding `data-cat` values to filter buttons

---

## Tech Stack

| Component | Library |
|-----------|---------|
| Graph visualization | [vis-network](https://visjs.github.io/vis-network/) |
| Markdown rendering | [marked.js](https://marked.js.org/) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| Build | Node.js (vanilla, zero dependencies) |
| Deploy | GitHub Actions + GitHub Pages |

**Zero npm dependencies. Zero frameworks. Pure HTML + JS.**

---

## License

MIT — free to use, fork, modify, and distribute.

---

**Built by [SiiYa Ventures Corporation](https://siiya.online)**
