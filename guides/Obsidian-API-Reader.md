# Obsidian API Reader — PowerShell Scripts Cheat Sheet
**Scripts:** `obsidian-api-reader.ps1`, `simple-obsidian-reader.bat`
**API Endpoint:** https://127.0.0.1:27124
**Last verified:** April 2026

---

## What It Is

PowerShell and batch scripts that read Obsidian vault notes directly via the Local REST API, without needing the MCP server running. Useful for quick access and scripting.

## Scripts

| Script | What It Does |
|--------|-------------|
| `obsidian-api-reader.ps1` | PowerShell — list files, read notes, search vault |
| `simple-obsidian-reader.bat` | Batch — simple curl-based note reader |

## Usage — PowerShell

```powershell
# List all files in vault
.\obsidian-api-reader.ps1 -action list

# Read a specific note
.\obsidian-api-reader.ps1 -action read -path "folder/note.md"

# Search for a term
.\obsidian-api-reader.ps1 -action search -query "tri-lens"
```

## Usage — Batch

```batch
simple-obsidian-reader.bat "folder/note.md"
```

## Direct curl Commands

```bash
# List all files
curl -k -H "Authorization: Bearer YOUR_API_KEY" https://127.0.0.1:27124/vault/

# Read a specific note
curl -k -H "Authorization: Bearer YOUR_API_KEY" https://127.0.0.1:27124/vault/folder/note.md

# Search
curl -k -H "Authorization: Bearer YOUR_API_KEY" "https://127.0.0.1:27124/search/simple/?query=tri-lens"
```

## Requirements

- Obsidian running with vault open
- Local REST API plugin enabled (HTTPS on port 27124)
- `-k` flag on curl to accept self-signed SSL cert

## Troubleshooting

| Issue | Fix |
|-------|-----|
| SSL certificate error | Use `-k` flag (self-signed cert) |
| 401 Unauthorized | Check API key in script matches REST API plugin |
| Connection refused | Ensure Obsidian is running with REST API enabled |
| Empty response | Verify the note path exists in the vault |

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Obsidian-MCP-Cheatsheet]] | MCP approach to vault access — uses same REST API underneath |
| [[MCP-Scripts-Cheatsheet]] | Scripts that start the MCP server these scripts bypass |
| [[Sync-To-Obsidian-Cheatsheet]] | Syncs files into the vault these scripts read from |
| [[Cheat-Sheets-Index]] | Back to index |
