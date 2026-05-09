# Claude Code Keyboard Shortcuts — Cheat Sheet
**Source:** [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code) · [Claude Help Center](https://support.claude.com/en/articles/14553413-claude-code-cheatsheet)
**Last verified:** May 2026

---

## What This Is

A complete reference of keyboard shortcuts, slash commands, CLI flags, and quick prefixes for Claude Code — the terminal-based AI coding agent. Shortcuts work across macOS, Linux, and Windows terminals.

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

## Slash Commands

| Command | What It Does |
|---------|-------------|
| `/help` | List all available commands in your setup |
| `/init` | Explore the codebase and generate a starter CLAUDE.md |
| `/clear` | Wipe conversation history and start fresh — project memory stays (aliases: `/reset`, `/new`) |
| `/compact` | Summarize the conversation to free up context — accepts optional focus instructions |
| `/btw` | Ask a quick side question without consuming main conversation context |
| `/rewind` | Roll the conversation and/or your code back to an earlier checkpoint |
| `/model` | View or switch the active model — e.g. `/model opus` or `/model sonnet` |
| `/cost` | Show token usage and spend for this session |
| `/usage` | Show your plan's usage limits and current rate-limit status |
| `/context` | Visualize what's loaded in the context window and where tokens are being spent |
| `/memory` | View or edit the CLAUDE.md files currently in scope |
| `/add-dir` | Grant Claude file access to an additional directory for this session |
| `/permissions` | View or change which tools require approval |
| `/config` | Open configuration settings — theme, defaults, editor mode (alias: `/settings`) |
| `/plan` | Drop straight into Plan Mode, optionally with a task description |
| `/diff` | Open an interactive viewer of uncommitted changes and per-turn diffs |
| `/copy` | Copy the last response (or a selected code block) to clipboard — `/copy N` for block N |
| `/export` | Save the current conversation to a file or clipboard |
| `/mcp` | Manage MCP server connections and authentication |
| `/agents` | List, create, or edit subagents |
| `/hooks` | View hook configuration for tool events |
| `/skills` | List the skills available in this session |
| `/simplify` | Review recently changed files for reuse, quality, and efficiency issues, then fix them |
| `/status` | Show account, model, working directory, and version |
| `/doctor` | Diagnose install and environment issues |
| `/resume` | Reopen a previous session and continue where you left off (alias: `/continue`) |
| `/rename` | Rename the current session — e.g. `/rename feature-auth` |
| `/branch` | Create a new git branch from the current session |
| `/plan` | Enter plan mode with an optional task — e.g. `/plan refactor the auth module` |
| `/voice` | Toggle voice input mode |
| `/loop` | Run a repeating check — e.g. `/loop 5m /foo` |
| `/login` / `/logout` | Authenticate, switch accounts, or sign out |
| `/exit` | Quit the CLI (alias: `/quit`) |

---

## CLI Flags

| Flag | What It Does |
|------|-------------|
| `claude -p "prompt"` | One-shot mode — send a prompt, get a response, exit |
| `claude -c` | Continue the most recent session |
| `claude -r "name"` | Resume a named session |
| `claude -n "name"` | Name the current session for later resuming |
| `claude --model opus` | Start with a specific model (opus, sonnet, haiku) |
| `claude --max-turns 10` | Limit the number of agentic turns |
| `claude --output-format json` | Output as text, json, or stream-json |
| `claude --allowedTools "Edit,Bash(npm:*)"` | Restrict which tools Claude can use |
| `claude --from-pr 123` | Start a session from a GitHub PR |
| `claude --fork-session` | Fork from an existing session |
| `claude -w` | Watch mode — Claude monitors for file changes |
| `claude --bare` | Minimal output — no UI chrome, just the response |
| `claude --debug` | Enable debug logging |
| `claude --init` | Initialize CLAUDE.md for the project |
| `claude --dangerously-skip-permissions` | Skip all permission prompts — CI/sandbox only |

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
| `DISABLE_AUTOUPDATER=1` | Prevent automatic updates |
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

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Everything-Claude-Code-Cheatsheet]] | Master agent toolkit with all 36 agents and 80+ skills |
| [[Claude-Code-Agents-Cheatsheet]] | 7 AI roles with permissions and boundaries |
| [[Claude-Code-Plugins-Cheatsheet]] | Plugin management — install, update, MCP servers |
| [[Windsurf-Shortcuts-Cheatsheet]] | Windsurf IDE shortcuts for comparison |
| [[Cheat-Sheets-Index]] | Back to index |
