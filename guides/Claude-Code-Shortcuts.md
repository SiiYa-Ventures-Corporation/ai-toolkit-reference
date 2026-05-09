# Claude Code Keyboard Shortcuts — Cheat Sheet
**Source:** [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code) · [Claude Help Center](https://support.claude.com/en/articles/14553413-claude-code-cheatsheet)
**Last verified:** May 2026

---

## What This Is

A complete reference of keyboard shortcuts, slash commands, CLI flags, quick prefixes, environment variables, and real workflows for Claude Code — the terminal-based AI coding agent. Shortcuts work across macOS, Linux, and Windows terminals.

---

## General Controls

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+C` | Cancel the current input — on an empty prompt, exits Claude Code entirely |
| `Ctrl+D` | Exit Claude Code (same as typing `/exit`) |
| `Ctrl+L` | Clear the terminal screen while keeping conversation history intact |
| `Ctrl+R` | Reverse search through your prompt history — type to find a previous command |
| `Ctrl+O` | Expand to the verbose, full transcript view — see everything Claude is doing |
| `Ctrl+V` | Paste an image from your clipboard directly into the prompt |
| `Ctrl+B` | Scroll the transcript view backward through conversation history |
| `Ctrl+S` | Open a fuzzy file search to quickly reference files |
| `Ctrl+G` | Open a fuzzy symbol search to jump to functions or classes |
| `Ctrl+X Ctrl+K` | Open a context editor to manage what's loaded in the context window |
| `Esc` | Interrupt Claude mid-response so you can type again |
| `Esc Esc` | Open the rewind/checkpoint menu — roll back to an earlier point in the session |
| `Up / Down` | Scroll through your prompt history |
| `Tab` | Autocomplete file paths and command names |
| `Shift+Tab` | Cycle permission mode: default → acceptEdits → plan (includes auto if enabled) |
| `Shift+Down` | Select text in the response |
| `v` | Visual mode (Vim users) |
| `V` | Visual-line mode (Vim users) |
| `?` | Show all shortcuts available in your current terminal or IDE |

---

## Quick Prefixes

| Prefix | What It Does |
|--------|-------------|
| `#` | Add a memory note to CLAUDE.md — e.g. `# Always use TypeScript` |
| `/` | Open the slash command menu — type to filter available commands |
| `!` | Run a shell command directly — e.g. `! git status` |
| `@` | Reference a file or directory in your prompt — e.g. `@src/index.ts` |
| `&` | Spawn a background subagent task — e.g. `& Build the API` |

---

## Multiline Input

| Shortcut | What It Does |
|----------|-------------|
| `\` at end of line | Continue typing on the next line — backslash escapes the Enter key |
| `Option+Enter` (macOS) | Insert a newline without sending the prompt |
| `Shift+Enter` | Insert a newline — requires terminal configuration (run `/terminal-setup`) |
| `Ctrl+J` | Alternative newline insertion in some terminals |

---

## Permission Modes

| Shortcut | What It Does |
|----------|-------------|
| `Shift+Tab` | Cycle through modes: **default** → **acceptEdits** → **plan** |
| `claude --enable-auto-mode` | Enable auto mode (model decides safety) — adds "auto" to the Shift+Tab cycle |
| `claude --permission-mode auto` | Start with auto permissions from the command line |

| Mode | What It Means |
|------|--------------|
| **default** | Claude asks permission for every file edit and command |
| **acceptEdits** | File edits are auto-approved — shell commands still prompt |
| **auto** | Model decides what's safe — read-only and edits auto-approved, risky actions blocked |
| **plan** | Read-only mode — Claude can explore and explain but cannot edit files or run commands |
| **bypassPermissions** | Everything auto-approved — use only in CI/sandboxed environments |

---

## Slash Commands — Session & Navigation

| Command | What It Does | Notes |
|---------|-------------|-------|
| `/branch [name]` | Branch or fork the current conversation | `/fork` is an alias in some versions |
| `/btw <question>` | Ask a side question without pulling in full task context | Useful for quick clarifications |
| `/clear` | Wipe conversation history and start fresh | Aliases: `/reset`, `/new` |
| `/compact [focus]` | Compress the session to save context tokens | Example: `/compact keep API decisions only` |
| `/context` | Show how the context window is being used | Useful before compacting |
| `/copy [N]` | Copy the latest response or a selected response | Common for code and generated text |
| `/cost` | Open cost information | Merged into `/usage` in v2.1.118; still works as shortcut |
| `/diff` | Open an interactive diff viewer | Useful before review or commit |
| `/exit` | Quit Claude Code | Alias: `/quit` |
| `/export [filename]` | Export the conversation | Commonly used for Markdown exports |
| `/help` | Show help and available commands | Good fallback when commands change |
| `/rename [name]` | Rename the current session | Useful when juggling multiple tasks |
| `/resume [session]` | Reopen an earlier session | Supports named sessions; press `Ctrl+A` to show all projects |
| `/rewind` | Rewind to an earlier checkpoint or state | Alias: `/undo` |
| `/status` | Show current session and environment status | Good command to run first |

---

## Slash Commands — Setup, Config & Environment

| Command | What It Does | Notes |
|---------|-------------|-------|
| `/add-dir <path>` | Add another directory to the working scope | Useful for monorepos and adjacent projects |
| `/color [color]` | Change the session accent color | Syncs to claude.ai/code when Remote Control is connected |
| `/config` | Open Claude Code settings | Editor mode now lives here. Alias: `/settings` |
| `/doctor` | Run diagnostics | Press `f` to let Claude fix reported issues |
| `/effort [low\|medium\|high\|xhigh\|max\|auto]` | Control reasoning effort | `xhigh` added for Opus 4.7+; running without args opens interactive slider |
| `/fast [on\|off]` | Toggle fast mode | Useful for rapid iteration |
| `/hooks` | Manage hook scripts and hook events | Hooks can invoke MCP tools directly with `type: "mcp_tool"` |
| `/init` | Create CLAUDE.md for project instructions | One of the most important setup commands |
| `/keybindings` | Customize keyboard shortcuts | Useful for heavy daily use |
| `/login` / `/logout` | Sign in or sign out | Supports current auth flows |
| `/memory` | Open or edit Claude memory files | Includes CLAUDE.md workflows |
| `/model [model]` | Switch the active model | Gateway `/v1/models` discovery opt-in via env var |
| `/output-style [style]` | Change response formatting style | Useful for concise vs detailed output |
| `/permissions` | Manage permission mode and recent denials | Useful when commands are blocked |
| `/team-onboarding` | Generate a teammate ramp-up guide from your local usage | Added in v2.1.101 |
| `/terminal-setup` | Configure terminal integration | Enables Shift+Enter multiline |
| `/theme` | Change or create themes | Supports auto (match terminal), custom JSON themes, plugin themes |
| `/tui` | Switch the terminal UI mode | Use `/tui fullscreen` for flicker-free rendering |
| `/usage` | Show plan limits, quota usage, cost, and statistics | `/cost` and `/stats` open relevant tabs inside `/usage` |

---

## Slash Commands — Skills, Agents, Plugins & MCP

| Command | What It Does | Notes |
|---------|-------------|-------|
| `/agents` | Manage subagents | Newer versions add running-agent indicators and tabbed layout |
| `/advisor` | Architecture or design advice workflow | Uses a smarter model for complex tasks |
| `/claude-api` | Load the Claude API or SDK helper workflow | Updated to cover Managed Agents in recent versions |
| `/less-permission-prompts` | Scan transcripts and propose a prioritized allowlist | Added in v2.1.111 |
| `/mcp` | Manage MCP servers | Also unlocks dynamic MCP slash commands |
| `/plugin` | Open plugin management | Warns on stale plugin versions; surfaces items needing attention |
| `/reload-plugins` | Hot-reload installed plugins | Also picks up plugin-provided skills; v2.1.110 adds Remote Control support |
| `/skills` | List available skills | Includes built-in and plugin-provided skills |
| `/skill-creator` | Meta skill building — automatically create and test new skills | |

**MCP Dynamic Command Pattern:**
```
/mcp__[server]__[prompt] [args]
```
Examples: `/mcp__github__list_prs`, `/mcp__github__create_pr`, `/mcp__jira__create_issue`, `/mcp__linear__get_sprint`

---

## Slash Commands — Coding, Review & Planning

| Command | What It Does | Notes |
|---------|-------------|-------|
| `/batch` | Apply one change across many files or worktrees | Good for repetitive project-wide edits |
| `/debug [desc]` | Run a guided debugging workflow | Good for tracing bugs step by step |
| `/feedback` | Send feedback | Public command |
| `/focus` | Toggle Focus view | Focus view is no longer tied to Ctrl+O |
| `/insights` | Analyze past sessions and tell you how to use Claude better | Public command |
| `/loop [interval]` | Run a recurring or scheduled workflow | Alias: `/proactive` |
| `/plan [desc]` | Switch into plan mode | Useful before larger changes |
| `/powerup` | Open interactive feature lessons | Added in 2026 |
| `/pr-comments [PR]` | Fetch GitHub PR comments | |
| `/release-notes` | Open release notes | |
| `/review` | Review current code changes | One of the most-used coding commands |
| `/schedule` | Run tasks on the cloud even when your laptop is closed | |
| `/security-review` | Run a security-focused review | Useful before merge or release |
| `/simplify` | Run a multi-agent refactor workflow | Good for structural improvements |
| `/stats` | Open usage statistics | Merged into `/usage` in v2.1.118 |
| `/ultraplan` | Run a more detailed planning workflow | Remote-session flows auto-create default cloud environment |
| `/ultrareview [PR#]` | Comprehensive cloud code review using parallel multi-agent analysis | Use with no args to review current branch, or pass a PR number |

---

## Slash Commands — Git, PR & Release

| Command | What It Does | Notes |
|---------|-------------|-------|
| `/branch [name]` | Create a new git branch from the current session | |
| `/commit` | Generate a commit message and commit changes | |
| `/commit-push-pr` | Commit, push, and open a PR in one flow | |
| `/fix-pipeline` | Try to repair a failing CI pipeline | |
| `/install-github-app` | Set up GitHub app integration | |
| `/lint` | Run linting commands | |
| `/merge-to-main` | Handle merge-to-main workflow | |
| `/pr` | Create a pull request | |
| `/push` | Push the current branch | |
| `/vitest` | Run Vitest-based test workflows | |

---

## Slash Commands — Integration, Remote & Device

| Command | What It Does | Notes |
|---------|-------------|-------|
| `/chrome` | Open Chrome integration | Availability varies |
| `/desktop` | Hand off to the desktop app | |
| `/ide` | Open or manage IDE integration | |
| `/rc` | Start remote control | Short form of `/remote-control` |
| `/remote-control` | Full remote-control command | Remote-session features continue to expand |
| `/remote-env` | Configure remote environments | Can auto-create default cloud environment |
| `/schedule` | Manage cloud scheduled tasks | |
| `/teleport` | Transfer or bridge sessions | |
| `/voice` | Enable push-to-talk voice mode | |

---

## CLI Commands & Flags

### Core CLI Commands

| Command | What It Does |
|---------|-------------|
| `claude` | Start interactive Claude Code |
| `claude "prompt"` | Start with an initial prompt |
| `claude -p "prompt"` | Non-interactive single prompt — get a response and exit |
| `claude -c` | Continue the last conversation |
| `claude -r "name"` | Resume a named session |
| `claude update` | Update Claude Code |
| `claude mcp list` | List configured MCP servers |
| `claude mcp serve` | Run Claude Code as an MCP server |
| `claude plugin tag` | Create release git tags for plugins with version validation |

### Important CLI Flags

| Flag | What It Does |
|------|-------------|
| `--model` | Set the model |
| `-w`, `--worktree` | Use a git worktree |
| `-n`, `--name` | Name the session |
| `--add-dir` | Add a directory to scope |
| `--agent` | Select an agent |
| `--allowedTools` | Pre-approve tools |
| `--output-format` | Set machine-readable output (e.g. JSON) |
| `--json-schema` | Request structured output |
| `--max-turns` | Limit agentic turns |
| `--max-budget-usd` | Cap spend |
| `--console` | Use Anthropic Console auth |
| `--verbose` | Enable more verbose output |
| `--bare` | Minimal headless mode |
| `--channels` | Enable channel or MCP push permission relay |
| `--remote` | Start a remote or web-backed session |
| `--effort` | Set reasoning effort level |
| `--permission-mode` | Set permission behavior (e.g. `plan`) |
| `--dangerously-skip-permissions` | Skip permission prompts — CI/sandbox only |
| `--chrome` | Enable Chrome integration mode |
| `--plugin-url <url>` | Fetch a plugin `.zip` from a URL for the session |
| `--transport http\|stdio\|sse` | Select MCP transport |
| `--remote-control-session-name-prefix` | Prefix Remote Control session names |

---

## Custom Commands

| Feature | How to Set Up |
|---------|--------------|
| **Project commands** | Create `.claude/commands/my-command.md` — invoked with `/my-command` |
| **Personal commands** | Create `~/.claude/commands/my-command.md` — available in all projects |
| **Arguments** | Use `$ARGUMENTS` or positional `$1`, `$2` in the markdown template |
| **Frontmatter** | Add YAML frontmatter for `description`, `allowed-tools`, `model`, `argument-hint` |

Example `.claude/commands/fix-issue.md`:
```yaml
---
description: Fix a GitHub issue
allowed-tools: Read, Edit, Bash(git:*)
model: opus
argument-hint: [issue-number]
---
Fix GitHub issue #$ARGUMENTS following our coding standards.
```
Usage: `/fix-issue 123`

---

## Subagents

| Feature | How to Access |
|---------|--------------|
| **Spawn inline** | Ask Claude: "Use the explore agent to find all auth-related files" |
| **Background task** | Prefix with `&` — e.g. `& Build the API` |
| **Custom agents** | Create `.claude/agents/name.md` (project) or `~/.claude/agents/name.md` (personal) |
| **Parallel limit** | Up to 10 subagents can run simultaneously |
| **List agents** | `/agents` to see all available subagents |

---

## MCP Quick Setup

| Command | What It Does |
|---------|-------------|
| `claude mcp add --transport http github https://...` | Add a remote HTTP MCP server |
| `claude mcp add --transport stdio name -- command` | Add a local stdio MCP server |
| `claude mcp add --scope project ...` | Share the server config with the team (`.mcp.json`) |
| `claude mcp add --scope user ...` | Personal config only (`~/.claude.json`) |
| `/mcp` | Manage connections in-session |

---

## Environment Variables

| Variable | What It Does |
|----------|-------------|
| `ANTHROPIC_API_KEY` | API key for authentication |
| `ANTHROPIC_MODEL` | Override the default model |
| `CLAUDE_CODE_SUBAGENT_MODEL` | Set the model used by subagents |
| `MAX_THINKING_TOKENS` | Control how many tokens Claude uses for thinking |
| `CLAUDE_CODE_USE_BEDROCK=1` | Route through AWS Bedrock |
| `CLAUDE_CODE_USE_VERTEX=1` | Route through Google Vertex AI |
| `CLAUDE_CODE_USE_MANTLE=1` | Enable Amazon Bedrock powered by Mantle |
| `CLAUDE_CODE_CERT_STORE=bundled` | Use bundled CAs only instead of OS certificate store |
| `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL` | Re-enable session quality survey for OTEL enterprises |
| `CLAUDE_CODE_PERFORCE_MODE=1` | Fail on read-only Perforce files with a `p4 edit` hint |
| `CLAUDE_CODE_SCRIPT_CAPS` | Limit per-session script invocations |
| `CLAUDE_CODE_USE_POWERSHELL_TOOL` | Opt into/out of PowerShell tool rollout |
| `CLAUDE_CODE_FORCE_SYNC_OUTPUT=1` | Force synchronized output on terminals with detection issues |
| `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` | Opt out of fullscreen alternate-screen renderer |
| `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` | Let Homebrew/WinGet run package-manager upgrades |
| `CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1` | Enable gateway `/v1/models` discovery for `/model` picker |
| `CLAUDE_CODE_SESSION_ID` | Set or read session ID |
| `DISABLE_AUTOUPDATER=1` | Prevent automatic updates |
| `DISABLE_UPDATES` | Completely block all update paths including manual |
| `DISABLE_TELEMETRY=1` | Opt out of telemetry |
| `BASH_DEFAULT_TIMEOUT_MS` | Set default timeout for shell commands |
| `HTTP_PROXY` / `HTTPS_PROXY` | Configure network proxy |

---

## Hook Events

| Event | When It Fires |
|-------|--------------|
| `PreToolUse` | Before any tool runs — can block or modify |
| `PostToolUse` | After a tool finishes — great for auto-formatting |
| `UserPromptSubmit` | When you send a message |
| `SessionStart` / `SessionEnd` | When a session opens or closes |
| `Stop` | When Claude finishes responding |
| `SubagentStart` / `SubagentStop` | When subagents spawn or complete |
| `Notification` | When Claude sends a notification |

---

## Customizing Shortcuts

1. Run `/keybindings` inside Claude Code to open the keybinding editor
2. Keybindings are stored in `~/.claude/keybindings.json`
3. Supports standard readline-style key notation

---

## Real Workflows

### Start a New Repository
```
/init → /status → /model
```
Initialize CLAUDE.md, check environment, set the model.

### Onboard a New Teammate
```
/team-onboarding → /init → /memory
```
Turn local usage into a ramp-up guide, pair with CLAUDE.md and memory files.

### Understand an Unfamiliar Codebase
```
/status → /context → /plan map the project structure and main entry points
```
Quick environment check, show loaded context, build a plan before editing.

### Review a Pull Request
```
/review → /security-review → /pr-comments → /diff
```
Review, security, feedback, and final diff inspection.

### Prepare a Safe Refactor
```
/review → /plan refactor the auth flow without changing behavior → /diff
```
Good sequence before touching critical code paths.

### Manage a Long Session
```
/context → /compact keep decisions only → /cost
```
Check context size, compact it, show cost impact.

### Run a Multi-File Refactor
```
/review → /simplify → /batch rename OldThing NewThing
```
Review, simplification, and broad edits.

### Fix a Bug in Stages
```
/debug trace the failing checkout flow → /review → /diff
```
Inspect when the issue is unclear, then verify the final change.

### Work With PR Feedback
```
/pr-comments 123 → /review → /diff
```
Address reviewer comments and re-check the final patch.

### Switch Between Tasks
```
/rename feature-auth → /clear → /resume feature-auth
```
Keep sessions separate and return to a task later.

### Set Up MCP and Use Immediately
```
/mcp → /mcp__github__list_prs → /mcp__jira__create_issue
```
From MCP setup to actual server commands quickly.

### Work Across Devices
```
/remote-control → /remote-env → /teleport
```
Main remote workflow commands in one place.

### Run a Deep Cloud Review
```
/review → /ultrareview → /pr-comments
```
When a normal review isn't enough — deeper cloud-based review pass.

### Reduce Repetitive Permission Prompts
```
/less-permission-prompts → /permissions → /hooks
```
Identify safe read-only commands and build a cleaner allowlist.

### Start a Headless One-Off Task
```
claude -p "review this diff and list risks"
```
One result, no interactive session needed.

### Check What Changed After an Update
```
/powerup → /help → /release-notes
```
Check release changes, diagnose environment, review affected settings.

### Review Usage and Limits
```
/usage → /cost → /stats
```
Quickest way to check activity, plan limits, and session cost.

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Everything-Claude-Code-Cheatsheet]] | Master agent toolkit with all 36 agents and 80+ skills |
| [[Claude-Code-Agents-Cheatsheet]] | 7 AI roles with permissions and boundaries |
| [[Claude-Code-Plugins-Cheatsheet]] | Plugin management — install, update, MCP servers |
| [[Windsurf-Shortcuts-Cheatsheet]] | Windsurf IDE shortcuts for comparison |
| [[Cheat-Sheets-Index]] | Back to index |
