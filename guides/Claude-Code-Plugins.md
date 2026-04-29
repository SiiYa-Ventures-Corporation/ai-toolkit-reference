# Claude Code Plugins — Cheat Sheet
**Installed on:** Tri-Lens Pipeline
**Last verified:** April 2026

---

## Installed Plugins

| Plugin | Version | What It Does |
|--------|---------|-------------|
| **everything-claude-code** | v2.0.0-rc.1 | Full agent harness — skills, agents, hooks, rules, memory |
| **claude-mem** | Latest | Persistent memory across sessions (SQLite + ChromaDB) |
| **superpowers** | Latest | Extended capabilities for Claude Code |

## Plugin Commands

```bash
# List installed plugins
/plugin list

# Install a plugin
/plugin install <name>

# Uninstall a plugin
/plugin uninstall <name>

# Add marketplace source
/plugin marketplace add <url>
```

## MCP Servers Configured

| Server | Transport | Config Location |
|--------|-----------|----------------|
| Obsidian | HTTP (serverUrl) | `mcp-configs/windsurf-mcp_config.json` |
| Obsidian (Claude Desktop) | stdio | `mcp-configs/claude-desktop-config.json` |
| Obsidian (ChatGPT) | stdio | `mcp-configs/chatgpt-mcp-config.json` |
| Obsidian (Codex) | stdio | `mcp-configs/codex-mcp-config.json` |
| Obsidian (Gemini) | stdio | `mcp-configs/gemini-mcp-config.json` |

## Settings File

Claude Code settings: `~/.claude/settings.json`

To enable/disable plugins, edit the `plugins` array in settings.

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Everything-Claude-Code-Cheatsheet]] | ECC is the primary plugin — full deep dive |
| [[Claude-Code-Skills-Cheatsheet]] | Plugins provide skills — see what's installed |
| [[Claude-Mem-Cheatsheet]] | Memory plugin — persistent session recall |
| [[MCP-Tool-Configs-Cheatsheet]] | Plugins connect via MCP — see all configs |
| [[Codex-CLI-Cheatsheet]] | Codex uses plugin configs — adversarial reviewer |
| [[Cheat-Sheets-Index]] | Back to index |
