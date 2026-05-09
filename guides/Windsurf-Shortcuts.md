# Windsurf Keyboard Shortcuts — Cheat Sheet
**Source:** [Windsurf Docs](https://docs.windsurf.com)
**Last verified:** May 2026

---

## What This Is

A complete reference of keyboard shortcuts for Windsurf IDE. Shortcuts are shown for Windows/Linux — Mac users replace `Ctrl` with `Cmd` and `Alt` with `Option`.

---

## Cascade (AI Chat Panel)

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+L` | Open or focus the Cascade chat panel — your main way to talk to the AI |
| `Enter` | Send your message to Cascade |
| `Ctrl+Enter` | Send message with forced codebase context — makes Cascade look at your code before answering |
| `Ctrl+.` | Cycle between Cascade modes (Code → Plan → Ask) — switch what Cascade is allowed to do |

---

## Command (Inline AI Edits)

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+I` | Open Command prompt in the editor — type a natural language instruction to generate or edit code right where your cursor is |
| `Ctrl+I` (in terminal) | Open Command in the terminal — describe what CLI command you need in plain English |
| `Ctrl+Enter` | Submit your Command prompt to the AI |
| `Alt+A` | Accept the AI-generated code suggestion from Command |
| `Alt+R` | Reject the AI-generated code suggestion and discard it |
| `Alt+F` | Follow up on the current Command generation with another instruction |
| `Ctrl+Shift+I` | Alternative way to open Command — useful when `Ctrl+I` conflicts with another shortcut |
| `Ctrl+\` | Another alternative way to open Command |
| `Esc` | Cancel Command and undo any changes it made |

---

## Autocomplete (Windsurf Tab)

| Shortcut | What It Does |
|----------|-------------|
| `Tab` | Accept the current autocomplete suggestion — also used for Tab to Jump and Tab to Import |
| `Esc` | Dismiss the current autocomplete suggestion |
| `Ctrl+Right Arrow` | Accept the suggestion one word at a time — useful when you only want part of it |
| `Alt+]` | Cycle to the next autocomplete suggestion |
| `Alt+[` | Cycle to the previous autocomplete suggestion |
| `Alt+\` | Manually trigger an autocomplete suggestion if one isn't showing |

---

## Editor Context → Cascade

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+L` (with text selected) | Send highlighted code or terminal output to Cascade as context for your next question |
| Right-click → Explain | Send selected code to Cascade for an explanation of what it does |
| Right-click → Refactor | Open Command with the selected code ready to be refactored |

---

## Standard Editor Shortcuts (VS Code Base)

Windsurf inherits all VS Code keyboard shortcuts. Here are the most useful ones:

### File & Navigation

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+P` | Quick Open — search and jump to any file by name |
| `Ctrl+Shift+P` | Command Palette — search and run any Windsurf or VS Code command |
| `Ctrl+Shift+E` | Show the file Explorer sidebar |
| `Ctrl+Shift+F` | Search across all files in your workspace |
| `Ctrl+Shift+G` | Open Source Control (Git) panel |
| `Ctrl+Shift+X` | Open Extensions marketplace |
| `Ctrl+B` | Toggle the sidebar visibility |
| `Ctrl+J` | Toggle the bottom panel (terminal, problems, output) |
| `Ctrl+\` | Split the editor into side-by-side panes |
| `Ctrl+Tab` | Cycle through open editor tabs |
| `Ctrl+W` | Close the current editor tab |
| `Ctrl+Shift+T` | Reopen the last closed editor tab |

### Editing

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+D` | Select the current word, press again to select the next occurrence — great for multi-cursor renaming |
| `Ctrl+Shift+L` | Select all occurrences of the current selection at once |
| `Alt+Up/Down` | Move the current line up or down |
| `Alt+Shift+Up/Down` | Duplicate the current line above or below |
| `Ctrl+Shift+K` | Delete the entire current line |
| `Ctrl+/` | Toggle line comment on the selected lines |
| `Ctrl+Shift+A` | Toggle block comment around the selection |
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |
| `Ctrl+H` | Find and replace in the current file |
| `Ctrl+Shift+H` | Find and replace across all files |

### Code Intelligence

| Shortcut | What It Does |
|----------|-------------|
| `F12` | Go to Definition — jump to where a function or variable is defined |
| `Alt+F12` | Peek Definition — see the definition inline without leaving your current file |
| `Shift+F12` | Find all References — see everywhere a symbol is used |
| `F2` | Rename Symbol — safely rename a variable or function across all files |
| `Ctrl+.` | Quick Fix — show available code actions and fixes |
| `Ctrl+Space` | Trigger IntelliSense suggestions |
| `Ctrl+Shift+Space` | Show parameter hints for the current function call |

### Terminal

| Shortcut | What It Does |
|----------|-------------|
| `` Ctrl+` `` | Toggle the integrated terminal |
| `` Ctrl+Shift+` `` | Open a new terminal instance |
| `Ctrl+Shift+5` | Split the terminal into side-by-side panes |

---

## Windsurf-Specific Features

| Feature | How to Access |
|---------|--------------|
| **Cascade Modes** | `Ctrl+.` in the Cascade panel — toggle Code / Plan / Ask |
| **@-Mentions** | Type `@` in the Cascade input to reference files, functions, terminals, or past conversations |
| **Vibe and Replace** | AI-powered find and replace — access from Command Palette (`Ctrl+Shift+P` → "Vibe and Replace") |
| **AI Commit Message** | Click the sparkle icon in the Git commit panel to auto-generate a commit message |
| **Code Lenses** | Click `Explain`, `Refactor`, or `Docstring` above any function or class |
| **Tab to Jump** | Accept `Tab` when Windsurf predicts your next cursor position |
| **Tab to Import** | Accept `Tab` when Windsurf suggests adding an import statement |
| **Send Problems** | Click "Send to Cascade" in the Problems panel to get AI help fixing errors |
| **In-IDE Preview** | Cascade can open a browser preview tab inside your editor |

---

## Customizing Shortcuts

1. Open **File → Preferences → Keyboard Shortcuts** (or `Ctrl+K Ctrl+S`)
2. Search for any command by name
3. Click the pencil icon to reassign a keybinding
4. Windsurf-specific commands are prefixed with `windsurf.` or `codeium.`

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[Windsurf-Rules-Cheatsheet]] | Rules that govern Cascade behavior in projects |
| [[MCP-Tool-Configs-Cheatsheet]] | MCP server configs used alongside Cascade |
| [[Playwright-MCP-Cheatsheet]] | Browser automation shortcuts used with Cascade |
| [[Cheat-Sheets-Index]] | Back to index |
