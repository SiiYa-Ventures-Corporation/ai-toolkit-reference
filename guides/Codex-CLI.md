# Codex CLI — OpenAI Agent Cheat Sheet
**Install:** `npm install -g @openai/codex`
**Version:** v0.120.0+
**Role in Tri-Lens:** Adversarial Reviewer / FIA (Forensic Integrity Auditor)
**Last verified:** April 2026

---

## What It Is

OpenAI Codex CLI is an AI coding agent that reads your codebase, creates branches, writes code, and submits changes. In Tri-Lens, it's used as the adversarial reviewer (FIA) — it red-teams and audits code for violations.

## Install

```bash
npm install -g @openai/codex
```

## Usage

```bash
# Start Codex in a repo
codex

# Start with a specific task
codex "review the scoring engine for vulnerabilities"

# Use with MCP config
codex --mcp-config mcp-configs/codex-mcp-config.json
```

## Codex FIA Constraints in Tri-Lens (CRITICAL)

| Can Do | Cannot Do |
|--------|-----------|
| ✅ Execute SELECT queries for verification | ❌ git commit |
| ✅ Read files and code | ❌ gcloud deploy |
| ✅ Create branches for review | ❌ Access production secrets |
| ✅ Identify B1-B7 blocking issues | ❌ Make architecture changes |
| ✅ Write audit reports | ❌ Suggest architecture alternatives |

## Branches Codex Creates

Codex creates branches with the `codex/` prefix:
```
codex/recommend-skills-for-scoring-engine-agent
codex/review-alignment-of-scoring-architecture-changes
codex/run-adversary-handoff-on-last-changes
```

These should be reviewed, merged to dev, then deleted.

## MCP Config

File: `mcp-configs/codex-mcp-config.json`

Install location: `~/.codex/mcp.json`

## Tri-Lens Usage

| Task | How |
|------|-----|
| Red-team scoring logic | `codex "adversarial review of scoring formula"` |
| Audit governance compliance | `codex "check all files against CLAUDE.md rules"` |
| Find security issues | `codex "scan for hardcoded credentials"` |
| Verify test coverage | `codex "identify untested code paths"` |

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Everything-Claude-Code-Cheatsheet]] | ECC supports Codex as a harness — same skills/hooks work |
| [[Claude-Code-Agents-Cheatsheet]] | Codex is the FIA agent role — see full role matrix |
| [[MCP-Tool-Configs-Cheatsheet]] | Codex MCP config at `mcp-configs/codex-mcp-config.json` |
| [[Claude-Code-Plugins-Cheatsheet]] | Codex uses the same plugin ecosystem |
| [[Cheat-Sheets-Index]] | Back to index |
