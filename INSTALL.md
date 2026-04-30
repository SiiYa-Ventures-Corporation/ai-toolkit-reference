# Installation Guide

> Get the AI Toolkit Reference running locally in under 2 minutes.

---

## Prerequisites

You need two things installed:

| Tool | Version | Check | Install |
|------|---------|-------|---------|
| **Node.js** | 16 or higher | `node --version` | [nodejs.org](https://nodejs.org) |
| **Git** | Any recent version | `git --version` | [git-scm.com](https://git-scm.com) |

---

## Option 1: One-Command Setup (Recommended)

Open a terminal and run:

```bash
git clone https://github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference.git && cd ai-toolkit-reference && node setup.js
```

That's it. The script will:
- Verify Node.js and Git are installed
- Build the content from markdown guides
- Start a local server on `http://localhost:8888`
- Open your browser automatically

Press `Ctrl+C` to stop the server when you're done.

---

## Option 2: Manual Setup

### Step 1 — Clone the repo

```bash
git clone https://github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference.git
cd ai-toolkit-reference
```

### Step 2 — Build the data (optional)

If you want to regenerate `data.js` from the markdown guides:

```bash
node build.js
```

> Skip this step if you just want to view the UI — `data.js` is already included in the repo.

### Step 3 — Open in browser

**Option A: Direct file open (simplest)**

| OS | Command |
|----|---------|
| Windows | `start index.html` |
| macOS | `open index.html` |
| Linux | `xdg-open index.html` |

**Option B: Local dev server (recommended for full features)**

```bash
npx -y http-server -p 8888
```

Then open `http://localhost:8888` in your browser.

---

## Viewing the Live Version (No Install)

If you don't want to install anything, visit the hosted version:

```
https://siiya-ventures-corporation.github.io/ai-toolkit-reference/
```

---

## Troubleshooting

### "node is not recognized" or "node: command not found"

Node.js is not installed or not in your PATH.

- **Windows:** Download and run the installer from [nodejs.org](https://nodejs.org). Check "Add to PATH" during install.
- **macOS:** Run `brew install node` or download from [nodejs.org](https://nodejs.org).
- **Linux:** Run `sudo apt install nodejs npm` (Ubuntu/Debian) or `sudo dnf install nodejs` (Fedora).

### "git is not recognized"

Git is not installed.

- **Windows:** Download from [git-scm.com](https://git-scm.com). Use the default install options.
- **macOS:** Run `xcode-select --install` or `brew install git`.
- **Linux:** Run `sudo apt install git` (Ubuntu/Debian).

### Graph not showing

- Make sure you're using a local server (`node setup.js` or `npx http-server`), not opening the file directly. Some browsers block local JavaScript files.
- Check the browser console (`F12` → Console tab) for errors.

### Port 8888 already in use

Another process is using that port. Either stop it or use a different port:

```bash
npx -y http-server -p 9999
```

### Data looks outdated

Rebuild from the markdown sources:

```bash
node build.js
```

Then refresh your browser (`Ctrl+R` or `Cmd+R`).

---

## What's Included

After cloning, your folder looks like this:

```
ai-toolkit-reference/
├── index.html       ← The interactive UI (open this)
├── data.js          ← Auto-generated content
├── build.js         ← Builds data.js from guides
├── setup.js         ← One-command setup script
├── guides/          ← Markdown source files (16 guides)
├── README.md        ← Full project documentation
├── INSTALL.md       ← You are here
└── LICENSE          ← MIT license
```

---

## Next Steps

- **Browse the UI** — search, filter, click nodes, explore tools
- **Add your own guide** — see [README.md](README.md#how-to-add-a-new-guide)
- **Contribute** — see [README.md](README.md#contributing)
- **Fork & customize** — make it your own reference for any toolset

---

## Questions?

Open an issue at [github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference/issues](https://github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference/issues)
