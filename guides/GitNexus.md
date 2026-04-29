# GitNexus — Code Intelligence Cheat Sheet
**Repo index:** tri-lens-pipeline (1424 symbols, 1850 relationships, 44 execution flows)
**Skills location:** `.claude/skills/gitnexus/`
**Governance:** `Governance/AGENTS.md`
**Last verified:** April 2026

---

## What It Is

GitNexus is a code intelligence engine that builds a knowledge graph of your codebase. It maps every function, class, import, and execution flow so AI agents can understand code structure, assess change impact, and navigate safely.

## Install / Update Index

```bash
# Analyze codebase and build index
npx gitnexus analyze

# Analyze with embeddings (for semantic search)
npx gitnexus analyze --embeddings

# Check index freshness
# Read gitnexus://repo/tri-lens-pipeline/context
```

## MCP Tools

| Tool | Command | When to Use |
|------|---------|-------------|
| **query** | `gitnexus_query({query: "auth validation"})` | Find code by concept |
| **context** | `gitnexus_context({name: "validateUser"})` | 360-degree symbol view |
| **impact** | `gitnexus_impact({target: "X", direction: "upstream"})` | Blast radius before editing |
| **detect_changes** | `gitnexus_detect_changes({scope: "staged"})` | Pre-commit scope check |
| **rename** | `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` | Safe multi-file rename |
| **cypher** | `gitnexus_cypher({query: "MATCH ..."})` | Custom graph queries |
| **list_repos** | `gitnexus_list_repos()` | Discover indexed repos |

## MCP Resources (Read-Only)

| Resource | Content |
|----------|---------|
| `gitnexus://repo/tri-lens-pipeline/context` | Stats, staleness check |
| `gitnexus://repo/tri-lens-pipeline/clusters` | All functional areas |
| `gitnexus://repo/tri-lens-pipeline/processes` | All execution flows |
| `gitnexus://repo/tri-lens-pipeline/process/{name}` | Step-by-step trace |
| `gitnexus://repo/tri-lens-pipeline/schema` | Graph schema |

## Impact Risk Levels

| Depth | Meaning | Action |
|-------|---------|--------|
| d=1 | WILL BREAK — direct callers | MUST update |
| d=2 | LIKELY AFFECTED — indirect deps | Should test |
| d=3 | MAY NEED TESTING — transitive | Test if critical path |

## Skills Reference

| Task | Skill File |
|------|-----------|
| Understand architecture | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius analysis | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Refactoring | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools & schema | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

## Mandatory Rules

1. **MUST** run `gitnexus_impact` before editing any function/class/method
2. **MUST** run `gitnexus_detect_changes()` before committing
3. **MUST** warn user if impact returns HIGH or CRITICAL risk
4. **NEVER** rename with find-and-replace — use `gitnexus_rename`
5. **NEVER** ignore HIGH/CRITICAL risk warnings

## Debugging Workflow

1. `gitnexus_query({query: "<error or symptom>"})` — find related flows
2. `gitnexus_context({name: "<suspect function>"})` — see callers/callees
3. Read `gitnexus://repo/tri-lens-pipeline/process/{name}` — trace full flow
4. For regressions: `gitnexus_detect_changes({scope: "compare", base_ref: "main"})`

## Keeping Index Fresh

```bash
# After committing code changes
npx gitnexus analyze

# With embeddings preserved
npx gitnexus analyze --embeddings

# Check if embeddings exist
# Inspect .gitnexus/meta.json → stats.embeddings field
```

A PostToolUse hook auto-refreshes after `git commit` and `git merge` in Claude Code.

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Claude-Code-Skills-Cheatsheet]] | 6 GitNexus skills are installed — see full skill inventory |
| [[Claude-Code-Agents-Cheatsheet]] | All agents must run GitNexus impact before edits |
| [[Graphify-Cheatsheet]] | Both are code intelligence tools — GitNexus for graph queries, Graphify for visualization |
| [[Everything-Claude-Code-Cheatsheet]] | ECC hooks auto-refresh GitNexus index after commits |
| [[Cheat-Sheets-Index]] | Back to index |
