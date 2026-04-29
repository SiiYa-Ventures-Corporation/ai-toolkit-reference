# MCP Scripts — Server Launchers Cheat Sheet
**Location:** Root of `tri-lens-pipeline/`
**Primary launcher:** `obsidian-mcp.bat`
**Last verified:** April 2026

---

## What These Are

Batch and PowerShell scripts that start the MCP (Model Context Protocol) server, which bridges AI tools to your Obsidian vault.

## Script Inventory

| Script | Transport | What It Does |
|--------|-----------|-------------|
| `obsidian-mcp.bat` | HTTP | **Primary launcher** — starts MCP server on port 3010 |
| `start-mcp.bat` | HTTP | Alternative launcher with extra env vars |
| `start-mcp.ps1` | HTTP | PowerShell version of the launcher |
| `start-mcp-clean.bat` | HTTP | Clean start (kills existing processes first) |
| `start-mcp-http.bat` | HTTP | Explicit HTTP transport |
| `start-mcp-stdio.bat` | stdio | For tools that launch MCP directly (Claude Desktop) |
| `start-mcp-simple.bat` | HTTP | Minimal config launcher |

## When to Use Which

| Scenario | Script |
|----------|--------|
| Normal daily use | `obsidian-mcp.bat` |
| MCP seems stuck | `start-mcp-clean.bat` |
| Claude Desktop (launches its own) | `start-mcp-stdio.bat` |
| Debugging connection issues | `start-mcp-simple.bat` |

## Environment Variables Set

| Variable | Value | Purpose |
|----------|-------|---------|
| `OBSIDIAN_API_KEY` | (from .mcp-env) | Obsidian REST API authentication |
| `OBSIDIAN_URL` | https://127.0.0.1:27124 | Obsidian REST API endpoint |
| `MCP_PORT` | 3010 | MCP server HTTP port |

## Usage

```bash
# Start the primary MCP server
cd c:\Projects\github\tri-lens-pipeline
.\obsidian-mcp.bat

# Keep the terminal open — server runs until you close it
```

## Testing Connectivity

After starting the server:
```bash
# Test MCP server is running
curl http://127.0.0.1:3010/mcp

# Test Obsidian REST API directly
curl -k -H "Authorization: Bearer YOUR_KEY" https://127.0.0.1:27124/vault/
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Port 3010 already in use | Run `start-mcp-clean.bat` to kill existing process |
| Connection refused | Make sure Obsidian is running first |
| API key mismatch | Check `.mcp-env` matches Obsidian REST API plugin settings |
| Node not found | Ensure Node.js is installed and in PATH |

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[MCP-Tool-Configs-Cheatsheet]] | Configs that tell AI tools where these scripts are serving |
| [[Obsidian-MCP-Cheatsheet]] | These scripts start the MCP server documented here |
| [[Obsidian-API-Reader-Cheatsheet]] | Alternative access that bypasses these scripts |
| [[Sync-To-Obsidian-Cheatsheet]] | Run sync before starting MCP to ensure vault is current |
| [[Cheat-Sheets-Index]] | Back to index |
