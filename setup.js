#!/usr/bin/env node

/**
 * AI Toolkit Reference — Setup Script
 * Run: npx ai-toolkit-setup  OR  node setup.js
 * 
 * What it does:
 * 1. Checks prerequisites (Node.js, git)
 * 2. Clones the repo (if not already in it)
 * 3. Builds data.js from guides
 * 4. Starts a local dev server
 * 5. Opens the browser
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const REPO = 'https://github.com/SiiYa-Ventures-Corporation/ai-toolkit-reference.git';
const DIR = 'ai-toolkit-reference';
const PORT = 8888;

// Colors for terminal output
const c = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  bold: '\x1b[1m',
  dim: '\x1b[2m'
};

function log(msg) { console.log(`${c.cyan}▸${c.reset} ${msg}`); }
function success(msg) { console.log(`${c.green}✓${c.reset} ${msg}`); }
function warn(msg) { console.log(`${c.yellow}⚠${c.reset} ${msg}`); }
function fail(msg) { console.log(`${c.red}✗${c.reset} ${msg}`); }

function banner() {
  console.log(`
${c.bold}${c.cyan}╔══════════════════════════════════════╗
║   AI Toolkit Reference — Setup       ║
║   Interactive Visual Reference UI     ║
╚══════════════════════════════════════╝${c.reset}
`);
}

function checkCommand(cmd) {
  try {
    execSync(`${cmd} --version`, { stdio: 'pipe' });
    return true;
  } catch { return false; }
}

function run(cmd, cwd) {
  try {
    execSync(cmd, { cwd, stdio: 'inherit' });
    return true;
  } catch { return false; }
}

function openBrowser(url) {
  const platform = process.platform;
  try {
    if (platform === 'win32') execSync(`start ${url}`, { stdio: 'pipe' });
    else if (platform === 'darwin') execSync(`open ${url}`, { stdio: 'pipe' });
    else execSync(`xdg-open ${url}`, { stdio: 'pipe' });
  } catch { warn(`Could not open browser. Visit: ${url}`); }
}

function startServer(dir) {
  const mimeTypes = {
    '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
    '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.md': 'text/markdown'
  };

  const server = http.createServer((req, res) => {
    let filePath = path.join(dir, req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });

  server.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    success(`Server running at ${c.bold}${url}${c.reset}`);
    console.log(`${c.dim}   Press Ctrl+C to stop${c.reset}\n`);
    openBrowser(url);
  });
}

async function main() {
  banner();

  // Step 1: Check prerequisites
  log('Checking prerequisites...');
  
  const hasNode = checkCommand('node');
  const hasGit = checkCommand('git');

  if (!hasNode) { fail('Node.js not found. Install from https://nodejs.org'); process.exit(1); }
  success('Node.js installed');

  if (!hasGit) { fail('Git not found. Install from https://git-scm.com'); process.exit(1); }
  success('Git installed');

  // Step 2: Determine working directory
  let projectDir;
  
  // Check if we're already inside the repo
  if (fs.existsSync(path.join(process.cwd(), 'index.html')) && fs.existsSync(path.join(process.cwd(), 'build.js'))) {
    projectDir = process.cwd();
    success('Already in project directory');
  } else if (fs.existsSync(path.join(process.cwd(), DIR))) {
    projectDir = path.join(process.cwd(), DIR);
    success('Project folder found');
  } else {
    log('Cloning repository...');
    if (!run(`git clone ${REPO}`, process.cwd())) {
      fail('Failed to clone repo');
      process.exit(1);
    }
    projectDir = path.join(process.cwd(), DIR);
    success('Repository cloned');
  }

  // Step 3: Build data.js
  if (fs.existsSync(path.join(projectDir, 'build.js')) && fs.existsSync(path.join(projectDir, 'guides'))) {
    log('Building data.js from guides...');
    if (run('node build.js', projectDir)) {
      success('data.js generated');
    } else {
      warn('Build skipped — using existing data.js');
    }
  } else {
    success('Using pre-built data.js');
  }

  // Step 4: Start server
  log(`Starting local server on port ${PORT}...`);
  startServer(projectDir);
}

main().catch(err => { fail(err.message); process.exit(1); });
