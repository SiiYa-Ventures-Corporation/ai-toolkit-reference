# Windsurf Rules — Cheat Sheet
**Location:** `.windsurf/rules/`
**Last verified:** April 2026

---

## What These Are

Windsurf rules are always-on instructions that govern how Windsurf (Cascade) behaves in this project. They're defined as markdown files with YAML frontmatter.

## Active Rules

### terminal_raw.md
**Trigger:** `always_on`
**Activation:** When prompt contains `OUTPUT MODE: TERMINAL_RAW`

Forces Windsurf to paste exact terminal output with zero interpretation:
- No summaries
- No bullet points
- No analysis
- No descriptions of output meaning
- No "it worked" — only raw output

**Violation = immediate hard stop on current task.**

## Rule File Format

```markdown
---
trigger: always_on
---

### Rule Name
Rule content here...
```

## Rule Locations

| File | What It Does |
|------|-------------|
| `.windsurf/rules/terminal_raw.md` | Raw terminal output mode |
| `.windsurf/terminal_raw_rules.md` | Backup copy of terminal raw rules |

## Windsurf Role in Tri-Lens

Per `.windsurfrules` and `CLAUDE.md`:

| Responsibility | Allowed |
|---------------|---------|
| React/UI components | ✅ |
| Frontend deploys | ✅ |
| Frontend commands | ✅ |
| Backend pipeline code | ❌ |
| DB operations | ❌ |
| `index.js` or scoring files | ❌ |
| Architecture decisions | ❌ |

**Current phase:** Claude Code handles all backend. Windsurf on standby for frontend only.
**Return trigger:** Pipeline stable + tests 100% green + Claude chat confirms UI build phase.

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Claude-Code-Agents-Cheatsheet]] | Windsurf is one of 7 agents — see full role matrix |
| [[Playwright-MCP-Cheatsheet]] | Windsurf can use Playwright for frontend testing |
| [[Everything-Claude-Code-Cheatsheet]] | ECC rules complement Windsurf rules |
| [[Cheat-Sheets-Index]] | Back to index |
