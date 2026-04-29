# Obsidian MCP — Vault Access Cheat Sheet
**Vault:** `C:\Projects\SiiYa_Obsidian_Vault\SiiYa_Obsidian_Vault\`
**Local REST API:** https://127.0.0.1:27124
**MCP Server Port:** http://127.0.0.1:3010/mcp
**Last verified:** April 2026

---

## What It Is

The Obsidian MCP server bridges AI tools (Claude Code, Windsurf, ChatGPT, Codex, Gemini) to your local Obsidian vault via the Model Context Protocol. It reads, searches, and lists notes.

## Prerequisites

1. Obsidian running with the vault open
2. **Local REST API plugin** enabled (HTTPS on port 27124)
3. MCP server started via `obsidian-mcp.bat`

## Start the MCP Server

```bash
cd c:\Projects\github\tri-lens-pipeline
.\obsidian-mcp.bat
```
Keep this terminal open while using AI tools.

## MCP Tools Available

| Tool | What It Does |
|------|-------------|
| `list_files` | List all files in the vault |
| `read_note` | Read a specific note by path |
| `search_notes` | Search notes by keyword |
| `list_folders` | List vault folder structure |

## Config Files Per Tool

| AI Tool | Config File | Transport |
|---------|------------|-----------|
| Windsurf | `mcp-configs/windsurf-mcp_config.json` | HTTP (serverUrl) |
| Claude Desktop | `mcp-configs/claude-desktop-config.json` | stdio |
| ChatGPT | `mcp-configs/chatgpt-mcp-config.json` | stdio |
| Codex CLI | `mcp-configs/codex-mcp-config.json` | stdio |
| Gemini | `mcp-configs/gemini-mcp-config.json` | stdio |

## Testing Connection

After starting the MCP server and restarting your AI tool:
```
List all files in my Obsidian vault
```
or
```
Search my Obsidian notes for "tri-lens"
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Connection refused | Make sure Obsidian is running and REST API plugin is enabled |
| 401 Unauthorized | Check API key matches in config and bat file |
| MCP not showing in tool | Restart the AI tool after config change |
| HTTPS errors | REST API uses HTTPS (port 27124), MCP proxy uses HTTP (port 3010) |

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[MCP-Scripts-Cheatsheet]] | Launch scripts that start this MCP server |
| [[MCP-Tool-Configs-Cheatsheet]] | JSON configs that tell each AI tool how to connect |
| [[Obsidian-API-Reader-Cheatsheet]] | Direct API access without MCP — alternative approach |
| [[Sync-To-Obsidian-Cheatsheet]] | Syncs project files into the vault this MCP reads |
| [[Cheat-Sheets-Index]] | Back to index |
