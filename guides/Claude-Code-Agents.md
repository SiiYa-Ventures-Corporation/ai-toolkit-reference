# Claude Code Agents — Cheat Sheet
**Installed on:** Tri-Lens Pipeline
**Governance file:** `Governance/AGENTS.md`
**Last verified:** April 2026

---

## What Are Agents?

Agents are specialized AI roles that operate within the Tri-Lens system. Each has defined responsibilities, permissions, and boundaries.

## Active Agents (7 Roles)

### Strategy & Architecture

| Agent | Role | Owns | Does NOT |
|-------|------|------|----------|
| **Claude (chat)** | Lead Architect | Decisions, missions, roadmap, patent, ClickUp PM | Execute code, deploy, touch files |
| **Gemini** | Architecture Validator | Confirm SQL, scoring logic | Make changes |
| **ChatGPT** | Secondary Confirmer | Patent language, API docs | Make changes |

### Execution

| Agent | Role | Owns | Does NOT |
|-------|------|------|----------|
| **Claude Code** | Backend Dev | Tests, deploys, DB queries, file edits | Make decisions, deploy without test gate |
| **Lovable** | Frontend Dev | UI, React, Firebase apps.siiya.online | Backend, DB, pipeline |
| **Windsurf** | Frontend Execution | React/UI components, frontend deploys | Backend pipeline, DB operations |

### Verification & Security

| Agent | Role | Owns | Does NOT |
|-------|------|------|----------|
| **Codex** | Adversarial Reviewer / FIA | Find violations, red-team, forensic audits | Make changes, suggest architecture |
| **Signal Integrity Statistician** | Independent statistical authority | Distribution analysis, dormant defect detection, ship-blocker calls | Propose architecture, write production code |
| **Verification Agent (Test)** | Verification authority | Read-only verification of every claim, audit reports | Write production code, propose architecture |

## Codex FIA Constraints (CRITICAL)

- CAN execute SELECT queries for verification only
- CANNOT git commit or gcloud deploy
- CANNOT access production secrets
- MANDATE: identify B1-B7 blocking issues only

## Statistician Role

- Read-only DB access via `trilens_statistician_ro` role
- Full CRUD on `statistician_analysis` schema only
- System prompt: `governance/role_definitions/signal_integrity_statistician_system_prompt.md`
- Reports directly to Owner — does not route through Lead Architect
- Universal Callout Authority — flags structural issues regardless of scope

## Verification Agent (Test v5)

- Read-only access to GitHub, ClickUp, and DB
- System prompt: `governance/role_definitions/verification_agent_test_system_prompt.md`
- Operates in two layers (Hybrid Verification Mandate):
  - **Layer 1:** In-session self-check after every task
  - **Layer 2:** Session-end independent audit gate
- Reports directly to Owner

## GitNexus Code Intelligence

GitNexus indexes the repo as `tri-lens-pipeline` (1424 symbols, 1850 relationships, 44 execution flows).

| Tool | Purpose |
|------|---------|
| `gitnexus_query` | Find code by concept |
| `gitnexus_context` | 360-degree symbol view |
| `gitnexus_impact` | Blast radius before editing |
| `gitnexus_detect_changes` | Pre-commit scope check |
| `gitnexus_rename` | Safe multi-file rename |
| `gitnexus_cypher` | Custom graph queries |

## Key Rules for All Agents

1. MUST run impact analysis before editing any symbol
2. MUST run `gitnexus_detect_changes()` before committing
3. MUST warn user if impact analysis returns HIGH or CRITICAL risk
4. NEVER edit without running `gitnexus_impact` first
5. NEVER rename with find-and-replace — use `gitnexus_rename`

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Everything-Claude-Code-Cheatsheet]] | ECC defines the 36 subagents these roles delegate to |
| [[Claude-Code-Skills-Cheatsheet]] | Agents invoke skills — see which skills each role uses |
| [[GitNexus-Cheatsheet]] | All agents must use GitNexus for impact analysis |
| [[Codex-CLI-Cheatsheet]] | Codex is the adversarial reviewer agent — FIA constraints here |
| [[Windsurf-Rules-Cheatsheet]] | Windsurf agent boundaries defined here |
| [[Cheat-Sheets-Index]] | Back to index |
