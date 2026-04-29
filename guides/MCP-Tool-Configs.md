# MCP Tool Configs — Per-AI-Tool Configuration Cheat Sheet
**Location:** `mcp-configs/`
**Setup guide:** `mcp-configs/README-MCP-Setup.md`
**Last verified:** April 2026

---

## What These Are

JSON configuration files that tell each AI tool how to connect to the Obsidian MCP server. Each tool has its own config format and install location.

## Config Files

| AI Tool | Config File | Status |
|---------|------------|--------|
| **Windsurf** | `mcp-configs/windsurf-mcp_config.json` | ✅ INSTALLED |
| **Claude Desktop** | `mcp-configs/claude-desktop-config.json` | ✅ INSTALLED |
| **ChatGPT Desktop** | `mcp-configs/chatgpt-mcp-config.json` | Ready (needs app) |
| **Codex CLI** | `mcp-configs/codex-mcp-config.json` | Ready (needs app) |
| **Gemini** | `mcp-configs/gemini-mcp-config.json` | Ready (needs app) |

## Install Locations

| AI Tool | Config Destination |
|---------|-------------------|
| Windsurf | `C:\Users\argen\.codeium\windsurf\mcp_config.json` |
| Claude Desktop | `C:\Users\argen\AppData\Roaming\Claude-3p\claude_desktop_config.json` |
| ChatGPT | `%LOCALAPPDATA%\Packages\OpenAI.ChatGPT_*\LocalState\mcp.json` |
| Codex CLI | `~/.codex/mcp.json` |
| Gemini | Settings in Gemini app or API config |

## Two Transport Types

| Type | How It Works | Used By |
|------|-------------|---------|
| **HTTP** (serverUrl) | Connects to already-running MCP server | Windsurf |
| **stdio** | Launches MCP server directly as child process | Claude Desktop, ChatGPT, Codex, Gemini |

## Installation Steps

1. Start Obsidian and ensure REST API plugin is running
2. Copy the appropriate config file to the tool's config location
3. Restart the AI tool
4. For HTTP transport: start `obsidian-mcp.bat` first
5. For stdio transport: tool launches server automatically

## Verify Connection

After restarting an AI tool, try:
```
List all files in my Obsidian vault
```
If it returns file names from your vault, the connection works.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Tool doesn't see MCP | Restart the AI tool after copying config |
| HTTP transport fails | Make sure `obsidian-mcp.bat` is running |
| stdio transport fails | Check Node.js is in PATH |
| Wrong vault | Verify OBSIDIAN_URL points to correct port |

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[MCP-Scripts-Cheatsheet]] | Scripts that start the server these configs point to |
| [[Obsidian-MCP-Cheatsheet]] | MCP server these configs connect AI tools to |
| [[Claude-Code-Plugins-Cheatsheet]] | Plugins use these configs for MCP connectivity |
| [[Everything-Claude-Code-Cheatsheet]] | ECC includes its own MCP configs — overlap here |
| [[Codex-CLI-Cheatsheet]] | Codex config lives at `mcp-configs/codex-mcp-config.json` |
| [[Cheat-Sheets-Index]] | Back to index |
