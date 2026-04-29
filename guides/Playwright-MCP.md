# Playwright MCP — Browser Automation Cheat Sheet
**Install:** `npm install -g @anthropic-ai/mcp-playwright`
**Last verified:** April 2026

---

## What It Is

Playwright MCP gives AI agents full browser control via the Model Context Protocol. It enables web automation, testing, scraping, and interaction through AI tools like Claude Code and Windsurf.

## Four Components

| Component | What It Does | Command |
|-----------|-------------|---------|
| **Playwright Test** | E2E testing framework | `npx playwright test` |
| **Playwright CLI** | Browser management | `npx playwright install` |
| **Playwright MCP** | AI agent browser control via MCP | `npx @anthropic-ai/mcp-playwright` |
| **Playwright Library** | Programmatic browser API | `import { chromium } from 'playwright'` |

## Install

```bash
# Install Playwright globally
npm install -g playwright

# Install Playwright MCP server
npm install -g @anthropic-ai/mcp-playwright

# Install browsers
npx playwright install
```

## MCP Configuration

### For Claude Desktop
Add to `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@anthropic-ai/mcp-playwright"]
    }
  }
}
```

### For Windsurf
Add to `mcp_config.json`:
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@anthropic-ai/mcp-playwright"]
    }
  }
}
```

## MCP Tools Available

| Tool | What It Does |
|------|-------------|
| `browser_navigate` | Go to a URL |
| `browser_screenshot` | Take a screenshot |
| `browser_click` | Click an element |
| `browser_type` | Type text into a field |
| `browser_select` | Select dropdown option |
| `browser_evaluate` | Execute JavaScript |
| `browser_wait` | Wait for element/condition |
| `browser_close` | Close the browser |

## Use Cases

| Task | Example |
|------|---------|
| Web scraping | Navigate to news site, extract article data |
| Form filling | Fill out and submit web forms |
| Testing | Verify UI elements and user flows |
| Screenshots | Capture page state for documentation |
| Monitoring | Check if a website is up and functioning |

## Playwright Test Example

```javascript
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://apps.siiya.online');
  await expect(page).toHaveTitle(/SiiYa/);
});
```

## Tri-Lens Usage

- Scrape GDELT news sources for pipeline validation
- Take dashboard screenshots for reports
- Test the Lovable UI at apps.siiya.online
- Monitor portal at trilens.siiya.online
- Automate browser-based data collection

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Browsers not installed | `npx playwright install` |
| MCP not connecting | Restart AI tool after config change |
| Timeout errors | Increase timeout in test config |
| Headless issues | Add `--headed` flag for debugging |

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[MCP-Tool-Configs-Cheatsheet]] | Playwright MCP needs a config entry to connect to AI tools |
| [[Everything-Claude-Code-Cheatsheet]] | ECC includes E2E testing skills that use Playwright |
| [[Windsurf-Rules-Cheatsheet]] | Windsurf can run Playwright for frontend testing |
| [[Cheat-Sheets-Index]] | Back to index |
