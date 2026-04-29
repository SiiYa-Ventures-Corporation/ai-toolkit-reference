#!/usr/bin/env node
/**
 * build.js — Auto-generates data.js from guide markdown files
 *
 * Reads all .md files in guides/, extracts content, gets last-modified
 * dates from git, and writes data.js for the interactive UI.
 *
 * Usage:  node build.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = __dirname;
const GUIDES_DIR = path.join(REPO_ROOT, 'guides');
const OUTPUT_FILE = path.join(REPO_ROOT, 'data.js');

const SHEET_DEFS = [
  { id:1, name:"Everything Claude Code", file:"Everything-Claude-Code", cat:"agent", catLabel:"AI Agent", color:"#fc5c7c", desc:"Master agent toolkit — 36 agents, 80+ skills, 30+ commands", links:[2,3,4,5,6,14] },
  { id:2, name:"Claude Code Plugins", file:"Claude-Code-Plugins", cat:"agent", catLabel:"AI Agent", color:"#fc5c7c", desc:"Plugin management — install, update, MCP servers", links:[1,3,5,14,6] },
  { id:3, name:"Claude Code Skills", file:"Claude-Code-Skills", cat:"agent", catLabel:"AI Agent", color:"#fc5c7c", desc:"Skill definitions — 1 custom, 6 GitNexus, 14 cluster", links:[1,2,7,4] },
  { id:4, name:"Claude Code Agents", file:"Claude-Code-Agents", cat:"agent", catLabel:"AI Agent", color:"#fc5c7c", desc:"7 AI roles with permissions and boundaries", links:[1,3,7,6,15] },
  { id:5, name:"Claude-Mem", file:"Claude-Mem", cat:"agent", catLabel:"AI Agent", color:"#fc5c7c", desc:"Persistent memory — SQLite + ChromaDB", links:[1,2,4] },
  { id:6, name:"Codex CLI", file:"Codex-CLI", cat:"agent", catLabel:"AI Agent", color:"#fc5c7c", desc:"Adversarial reviewer / FIA — SELECT only", links:[1,4,14,2] },
  { id:7, name:"GitNexus", file:"GitNexus", cat:"intel", catLabel:"Code Intel", color:"#fcac5c", desc:"Knowledge graph — 1,424 symbols, impact analysis", links:[3,4,8,1] },
  { id:8, name:"Graphify", file:"Graphify", cat:"intel", catLabel:"Code Intel", color:"#fcac5c", desc:"Visual graph generator — code to HTML+JSON", links:[7,3] },
  { id:9, name:"Playwright MCP", file:"Playwright-MCP", cat:"test", catLabel:"Testing", color:"#7c5cfc", desc:"Browser automation — navigate, click, screenshot", links:[14,1,15] },
  { id:10, name:"Obsidian MCP", file:"Obsidian-MCP", cat:"mcp", catLabel:"MCP", color:"#5cfc9c", desc:"Vault MCP bridge — port 3010 to REST API 27124", links:[13,14,11,12] },
  { id:11, name:"Obsidian API Reader", file:"Obsidian-API-Reader", cat:"mcp", catLabel:"MCP", color:"#5cfc9c", desc:"Direct PowerShell/batch REST vault access", links:[10,13,12] },
  { id:12, name:"Sync-To-Obsidian", file:"Sync-To-Obsidian", cat:"mcp", catLabel:"MCP", color:"#5cfc9c", desc:"Project-to-vault sync with routing rules", links:[10,11,13] },
  { id:13, name:"MCP Scripts", file:"MCP-Scripts", cat:"mcp", catLabel:"MCP", color:"#5cfc9c", desc:"7 launcher scripts — HTTP, stdio, clean restart", links:[14,10,11,12] },
  { id:14, name:"MCP Tool Configs", file:"MCP-Tool-Configs", cat:"mcp", catLabel:"MCP", color:"#5cfc9c", desc:"Per-tool JSON configs — Windsurf, Claude, ChatGPT, Codex", links:[13,10,2,1,6] },
  { id:15, name:"Windsurf Rules", file:"Windsurf-Rules", cat:"rules", catLabel:"Rules", color:"#5cfcdc", desc:"Terminal raw mode, frontend-only boundaries", links:[4,9,1] },
  { id:16, name:"500 AI Projects Reference", file:"500-AI-Projects-Reference", cat:"ref", catLabel:"Reference", color:"#fcdc5c", desc:"500+ ML/DL projects mapped to Tri-Lens", links:[] }
];

function getLastModified(filePath) {
  try {
    const gitDate = execSync(
      `git log -1 --format="%ai" -- "${path.relative(REPO_ROOT, filePath)}"`,
      { cwd: REPO_ROOT, encoding: 'utf-8', stdio: ['pipe','pipe','pipe'] }
    ).trim();
    if (gitDate) {
      return new Date(gitDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  } catch (e) { /* fallback */ }
  const stat = fs.statSync(filePath);
  return stat.mtime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function stripMarkdown(raw) {
  let lines = raw.split('\n');
  if (lines[0] && lines[0].trim() === '---') {
    const endIdx = lines.indexOf('---', 1);
    if (endIdx > 0) lines = lines.slice(endIdx + 1);
  }
  const titleIdx = lines.findIndex(l => /^# /.test(l));
  if (titleIdx >= 0) lines.splice(titleIdx, 1);
  while (lines.length && /^\*\*/.test(lines[0].trim())) lines.shift();
  const relIdx = lines.findIndex(l => /^#{1,3}\s+Related/i.test(l));
  if (relIdx >= 0) {
    let cutStart = relIdx;
    if (relIdx > 0 && lines[relIdx - 1].trim() === '---') cutStart = relIdx - 1;
    lines = lines.slice(0, cutStart);
  }
  while (lines.length && lines[0].trim() === '') lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
  return lines.join('\n');
}

function escapeForTemplate(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

console.log('Building data.js from guide markdown files...\n');
const entries = [];
let found = 0, missing = 0;

for (const def of SHEET_DEFS) {
  const filePath = path.join(GUIDES_DIR, def.file + '.md');
  if (!fs.existsSync(filePath)) {
    console.warn(`  SKIP: ${def.file}.md not found`);
    entries.push(`"${def.file}": \`Content not available.\``);
    missing++;
    continue;
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  const content = stripMarkdown(raw);
  const updated = getLastModified(filePath);
  def.updated = updated;
  entries.push(`"${def.file}": \`${escapeForTemplate(content)}\``);
  console.log(`  OK: ${def.file}.md (${updated})`);
  found++;
}

const output = `// Auto-generated by build.js — do not edit manually
// Last built: ${new Date().toISOString()}
// Source: guides/*.md

const SHEET_DEFS_META = ${JSON.stringify(SHEET_DEFS, null, 2)};

const MD_CONTENT = {

${entries.join(',\n\n')}

};
`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');
console.log(`\nDone: ${found} files processed, ${missing} missing.`);
console.log(`Output: ${OUTPUT_FILE}`);
