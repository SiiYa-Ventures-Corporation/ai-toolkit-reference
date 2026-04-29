# Claude-Mem — Persistent Memory Plugin Cheat Sheet
**Plugin:** claude-mem
**Purpose:** Persistent memory for Claude Code across sessions
**Last verified:** April 2026

---

## What It Does

Claude-Mem gives Claude Code long-term memory that persists between sessions. It stores facts, decisions, and context in a local database so Claude Code can recall previous conversations and decisions.

## How It Works

1. **Lifecycle Hooks** — Automatically saves context at session start/end
2. **Storage** — SQLite for structured data, ChromaDB for vector search
3. **Retrieval** — MCP search tools for querying stored memories

## Install / Update

```bash
# Install as Claude Code plugin
claude plugin install claude-mem

# Or via npm
npm install -g claude-mem
```

## Storage Locations

| Store | Location | Purpose |
|-------|----------|---------|
| SQLite DB | `~/.claude-mem/memory.db` | Structured facts, decisions |
| ChromaDB | `~/.claude-mem/chroma/` | Vector embeddings for semantic search |

## MCP Search Tools

| Tool | What It Does |
|------|-------------|
| `memory_search` | Semantic search across stored memories |
| `memory_add` | Add a new memory entry |
| `memory_list` | List recent memories |
| `memory_delete` | Remove a memory entry |

## Web Viewer

Claude-Mem includes a web UI to browse stored memories:
```bash
claude-mem viewer
```
Opens a local web interface to search, browse, and manage memories.

## Configuration

Config file: `~/.claude-mem/config.json`

```json
{
  "storage": "sqlite",
  "embedding_model": "default",
  "auto_save": true,
  "max_memories": 10000
}
```

## System Requirements

- Node.js 18+
- Claude Code CLI installed
- ~100MB disk space for databases

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Memory not saving | Check `auto_save: true` in config |
| Search returns nothing | Run `claude-mem reindex` to rebuild vectors |
| DB corrupted | Delete `~/.claude-mem/` and restart |
| Plugin not loading | Run `claude plugin list` to verify installation |

## Tri-Lens Usage

Claude-Mem stores:
- Architecture decisions (ADRs)
- Scoring formula changes
- Database schema state
- Session context for handoffs between agents

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Everything-Claude-Code-Cheatsheet]] | ECC hooks trigger memory saves at session boundaries |
| [[Claude-Code-Plugins-Cheatsheet]] | Claude-Mem is installed as a plugin — see plugin management |
| [[Claude-Code-Agents-Cheatsheet]] | Memory is shared across all agent roles for handoffs |
| [[Cheat-Sheets-Index]] | Back to index |
