# Sync-to-Obsidian — Vault Sync Script Cheat Sheet
**Script:** `sync-to-obsidian.ps1`
**Vault:** `C:\Projects\SiiYa_Obsidian_Vault\SiiYa_Obsidian_Vault\`
**Last verified:** April 2026

---

## What It Does

`sync-to-obsidian.ps1` dynamically scans the Tri-Lens project, classifies files using routing rules, and copies them into the Obsidian vault organized by category.

## How It Works

1. Scans the project directory recursively
2. Classifies each file based on routing rules (path patterns → vault folders)
3. Copies matched files to the appropriate Obsidian vault subfolder
4. Skips excluded folders (node_modules, .git, etc.)

## Usage

```powershell
cd c:\Projects\github\tri-lens-pipeline
.\sync-to-obsidian.ps1
```

## Routing Rules

Files are routed based on their path:

| Source Pattern | Vault Destination |
|---------------|-------------------|
| `governance/**` | `Tri-Lens/Governance/` |
| `docs/**` | `Tri-Lens/Docs/` |
| `functions/**/*.js` | `Tri-Lens/Functions/` |
| `scoring-engine/**` | `Tri-Lens/Scoring/` |
| `migrations/**` | `Tri-Lens/Migrations/` |
| `*.md` (root) | `Tri-Lens/` |

## Included Extensions

`.md`, `.js`, `.py`, `.sql`, `.json`, `.yaml`, `.yml`, `.sh`, `.bat`, `.ps1`, `.txt`

## Skipped Folders

`node_modules`, `.git`, `.firebase`, `__pycache__`, `.venv`, `venv`, `dist`, `build`, `graphify-out`

## Vault Location

```
C:\Projects\SiiYa_Obsidian_Vault\SiiYa_Obsidian_Vault\Tri-Lens\
```

## Tri-Lens Usage

Run after major changes to keep Obsidian vault in sync:
- After new governance docs are added
- After scoring engine changes
- After migration scripts are created
- Before doing research in Obsidian

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Obsidian-MCP-Cheatsheet]] | MCP reads the vault this script populates |
| [[Obsidian-API-Reader-Cheatsheet]] | API scripts read the vault this script populates |
| [[MCP-Scripts-Cheatsheet]] | Start MCP server after syncing to make new files available |
| [[Cheat-Sheets-Index]] | Back to index |
