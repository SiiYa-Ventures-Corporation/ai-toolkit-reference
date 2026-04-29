# Everything Claude Code (ECC) — Cheat Sheet
**Repo:** [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)
**Version:** v2.0.0-rc.1 (April 2026)
**Stars:** 140K+ | **Forks:** 21K+ | **Contributors:** 170+
**Winner:** Anthropic Hackathon

---

## What It Is

A complete performance optimization system for AI coding agents. Not just configs — it includes skills, agents, hooks, rules, memory, security scanning, continuous learning, and research-first development workflows.

Works across: **Claude Code, Codex, Cursor, OpenCode, Gemini**

---

## Install / Update

```bash
# Plugin install (recommended)
/plugin marketplace add https://github.com/affaan-m/everything-claude-code
/plugin install everything-claude-code@everything-claude-code

# OR manual install via npm
npx ecc-install --profile full

# OR manual install via shell
curl -fsSL https://raw.githubusercontent.com/affaan-m/everything-claude-code/main/install.sh | bash -s -- --profile full
```

**Do NOT stack install methods.** Pick one path only.

### Naming Reference
| Identifier | Use |
|-----------|-----|
| `affaan-m/everything-claude-code` | GitHub repo |
| `everything-claude-code@everything-claude-code` | Plugin install ID |
| `ecc-universal` | npm package |

### Reset / Uninstall
```bash
/plugin uninstall everything-claude-code
```

---

## 36 Agents (Subagents for Delegation)

### Core Workflow
| Agent | What It Does |
|-------|-------------|
| `planner.md` | Feature implementation planning |
| `architect.md` | System design decisions |
| `tdd-guide.md` | Test-driven development |
| `code-reviewer.md` | Quality and security review |
| `security-reviewer.md` | Vulnerability analysis |
| `build-error-resolver.md` | Fix build errors |
| `e2e-runner.md` | Playwright E2E testing |
| `refactor-cleaner.md` | Dead code cleanup |
| `doc-updater.md` | Documentation sync |
| `docs-lookup.md` | Documentation/API lookup |
| `chief-of-staff.md` | Communication triage and drafts |
| `loop-operator.md` | Autonomous loop execution |
| `harness-optimizer.md` | Harness config tuning |

### Language-Specific Reviewers
| Agent | Language |
|-------|---------|
| `python-reviewer.md` | Python |
| `typescript-reviewer.md` | TypeScript/JavaScript |
| `go-reviewer.md` | Go |
| `java-reviewer.md` | Java/Spring Boot |
| `kotlin-reviewer.md` | Kotlin/Android |
| `rust-reviewer.md` | Rust |
| `cpp-reviewer.md` | C++ |
| `database-reviewer.md` | Database/Supabase |

### Build Error Resolvers
| Agent | Language |
|-------|---------|
| `go-build-resolver.md` | Go |
| `java-build-resolver.md` | Java/Maven/Gradle |
| `kotlin-build-resolver.md` | Kotlin/Gradle |
| `rust-build-resolver.md` | Rust |
| `cpp-build-resolver.md` | C++ |
| `pytorch-build-resolver.md` | PyTorch/CUDA |

---

## 80+ Skills (Workflow Definitions)

### Development Patterns
| Skill | What It Covers |
|-------|---------------|
| `coding-standards/` | Language best practices |
| `backend-patterns/` | API, database, caching patterns |
| `frontend-patterns/` | React, Next.js patterns |
| `python-patterns/` | Python idioms and best practices |
| `golang-patterns/` | Go idioms and best practices |
| `postgres-patterns/` | PostgreSQL optimization |
| `api-design/` | REST API design, pagination, errors |
| `docker-patterns/` | Docker Compose, networking, security |
| `deployment-patterns/` | CI/CD, health checks, rollbacks |
| `database-migrations/` | Prisma, Drizzle, Django, Go migrations |

### Testing & Security
| Skill | What It Covers |
|-------|---------------|
| `tdd-workflow/` | Test-driven development methodology |
| `security-review/` | Security checklist |
| `security-scan/` | AgentShield security auditor |
| `e2e-testing/` | Playwright patterns and Page Object Model |
| `python-testing/` | pytest patterns |
| `golang-testing/` | Go TDD, benchmarks |
| `verification-loop/` | Continuous verification |
| `eval-harness/` | Verification loop evaluation |

### AI & Optimization
| Skill | What It Covers |
|-------|---------------|
| `continuous-learning-v2/` | Instinct-based learning with confidence scoring |
| `iterative-retrieval/` | Progressive context refinement for subagents |
| `strategic-compact/` | Manual compaction suggestions |
| `search-first/` | Research-before-coding workflow |
| `cost-aware-llm-pipeline/` | LLM cost optimization, model routing |
| `autonomous-loops/` | Sequential pipelines, PR loops, DAG orchestration |

### Content & Business
| Skill | What It Covers |
|-------|---------------|
| `article-writing/` | Long-form writing without AI tone |
| `content-engine/` | Multi-platform social content |
| `market-research/` | Source-attributed research |
| `investor-materials/` | Pitch decks, memos, financial models |
| `investor-outreach/` | Personalized fundraising outreach |
| `frontend-slides/` | HTML slide decks and PPTX-to-web |

### Framework-Specific
| Skill | Framework |
|-------|-----------|
| `django-patterns/` | Django models, views |
| `django-security/` | Django security |
| `django-tdd/` | Django TDD workflow |
| `laravel-patterns/` | Laravel architecture |
| `laravel-security/` | Laravel security |
| `springboot-patterns/` | Java Spring Boot |
| `springboot-security/` | Spring Boot security |
| `clickhouse-io/` | ClickHouse analytics |

---

## 30+ Slash Commands

### Core Commands
| Command | What It Does |
|---------|-------------|
| `/plan` | Implementation planning |
| `/tdd` | Test-driven development |
| `/e2e` | E2E test generation |
| `/code-review` | Quality review |
| `/build-fix` | Fix build errors |
| `/refactor-clean` | Dead code removal |
| `/verify` | Run verification loop |
| `/checkpoint` | Save verification state |
| `/eval` | Evaluate against criteria |
| `/test-coverage` | Test coverage analysis |
| `/update-docs` | Update documentation |
| `/update-codemaps` | Update codemaps |

### Learning & Instincts
| Command | What It Does |
|---------|-------------|
| `/learn` | Extract patterns mid-session |
| `/learn-eval` | Extract, evaluate, and save patterns |
| `/instinct-status` | View learned instincts |
| `/instinct-import` | Import instincts |
| `/instinct-export` | Export instincts |
| `/evolve` | Cluster instincts into skills |
| `/prune` | Delete expired pending instincts |
| `/skill-create` | Generate skills from git history |

### Multi-Agent Orchestration
| Command | What It Does |
|---------|-------------|
| `/multi-plan` | Multi-agent task decomposition |
| `/multi-execute` | Orchestrated multi-agent workflows |
| `/multi-backend` | Backend multi-service orchestration |
| `/multi-frontend` | Frontend multi-service orchestration |
| `/multi-workflow` | General multi-service workflows |
| `/orchestrate` | Multi-agent coordination |

### Language-Specific
| Command | What It Does |
|---------|-------------|
| `/go-review` | Go code review |
| `/go-test` | Go TDD workflow |
| `/go-build` | Fix Go build errors |
| `/python-review` | Python code review |
| `/pm2` | PM2 service lifecycle management |
| `/sessions` | Session history management |
| `/setup-pm` | Configure package manager |

---

## Hooks (Auto-Triggers)

| Hook | When It Fires | What It Does |
|------|--------------|-------------|
| `session-start.js` | Session begins | Loads context and state |
| `session-end.js` | Session ends | Saves state and patterns |
| `pre-compact.js` | Before compaction | Saves pre-compaction state |
| `suggest-compact.js` | Context window filling | Suggests strategic compaction |
| `evaluate-session.js` | Session evaluation | Extracts patterns from sessions |

---

## Rules (Always-On Guidelines)

| Rule File | What It Enforces |
|-----------|-----------------|
| `coding-style.md` | Immutability, file organization |
| `git-workflow.md` | Commit format, PR process |
| `testing.md` | TDD, 80% coverage requirement |
| `performance.md` | Model selection, context management |
| `patterns.md` | Design patterns, skeleton projects |
| `hooks.md` | Hook architecture, TodoWrite |
| `agents.md` | When to delegate to subagents |
| `security.md` | Mandatory security checks |

Language-specific rule sets: TypeScript, Python, Go, Swift, PHP

---

## Context Modes

| Mode | File | When to Use |
|------|------|-------------|
| Development | `dev.md` | Building features, writing code |
| Review | `review.md` | Code review, quality checks |
| Research | `research.md` | Exploring, investigating, learning |

---

## Most Relevant for Tri-Lens

| ECC Feature | Tri-Lens Use Case |
|-------------|-------------------|
| `security-scan/` | AgentShield — automated secret detection (like our gitleaks scan) |
| `database-reviewer.md` | Review scoring engine DB queries |
| `python-reviewer.md` | Review Python pipeline scripts |
| `postgres-patterns/` | Optimize PostgreSQL queries for signals_raw, score_history |
| `deployment-patterns/` | CI/CD for GCP Cloud Functions |
| `continuous-learning-v2/` | Learn Tri-Lens patterns over time |
| `tdd-workflow/` | Add test coverage to scoring engine |
| `verification-loop/` | Continuous verification of pipeline changes |
| `/plan` | Planning new features like the dashboard |
| `/code-review` | Review before merging to staging/main |

---

## Dashboard GUI

ECC includes a desktop dashboard:
```bash
python ecc_dashboard.py
```
Opens a Tkinter GUI to manage skills, agents, hooks, and commands visually.

---

## Example CLAUDE.md Configs

ECC provides real-world example configs:
| Example | Stack |
|---------|-------|
| `saas-nextjs-CLAUDE.md` | Next.js + Supabase + Stripe |
| `go-microservice-CLAUDE.md` | Go gRPC + PostgreSQL |
| `django-api-CLAUDE.md` | Django REST API + Celery |
| `laravel-api-CLAUDE.md` | Laravel + PostgreSQL + Redis |
| `rust-api-CLAUDE.md` | Rust Axum + SQLx + PostgreSQL |

---

## MCP Configs Included

Pre-built MCP server configs for: GitHub, Supabase, Vercel, Railway, and more.
File: `mcp-configs/mcp-servers.json`

---

## Links

- **Repo:** https://github.com/affaan-m/everything-claude-code
- **Releases:** https://github.com/affaan-m/everything-claude-code/releases
- **Marketplace:** `everything-claude-code@everything-claude-code`
- **npm:** `ecc-universal`

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Claude-Code-Plugins-Cheatsheet]] | ECC is installed as a plugin — this covers plugin management |
| [[Claude-Code-Skills-Cheatsheet]] | ECC provides the skills framework — this lists all installed skills |
| [[Claude-Code-Agents-Cheatsheet]] | ECC agents delegate to these roles — this maps the role matrix |
| [[Claude-Mem-Cheatsheet]] | ECC hooks trigger memory saves — this covers the memory system |
| [[Codex-CLI-Cheatsheet]] | ECC supports Codex as a harness — this covers Codex-specific usage |
| [[MCP-Tool-Configs-Cheatsheet]] | ECC includes MCP configs — this covers per-tool setup |
| [[Cheat-Sheets-Index]] | Back to index |
