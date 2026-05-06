# Arcads AI Video — Agent Skill Pack

## Overview

AI video and image generation for marketing using the Arcads API. Powered by Sora 2, Veo 3.1, Kling 3.0, and Nano Banana. Works as a Claude Code skill or Cursor skill.

## Quick Start

```bash
git clone https://github.com/krusemediallc/arcads-claude-code.git
cd arcads-claude-code
./scripts/setup.sh
```

Setup will:
- Ask for your Arcads API key (get it at app.arcads.ai/settings/api)
- Save it securely in `.env` (never committed)
- Verify your connection
- Create your `MASTER_CONTEXT.md` workspace file

## Key Workflows

### Create an AI Influencer
```
"Create a new AI influencer — a 22-year-old college student with freckles"
```
Generates a full-body hero image + 9 additional angles saved to `references/influencers/`.

### Generate UGC Product Selfie Stills
```
"Generate a UGC selfie of Sofia holding the Arcads Cola can in her bedroom"
```
Combines character + product photo + style references into authentic-looking iPhone selfie.

### Animate a Still into Video
```
"Turn that image into a video — have her talk about the product"
```
Uses Veo 3.1 with startFrame to animate your approved UGC still with natural human motion.

### Quick UGC Video (No Starting Frame)
```
"Generate a UGC video ad for this product" + drop a product photo
```
Uses Sora 2 with product photo as style reference — faster but less control.

## Project Structure

| Path | Purpose |
|------|---------|
| `skills/arcads-external-api/` | Canonical skill source (edit here) |
| `MASTER_CONTEXT.md` | Living workspace memory (gitignored) |
| `.env` | API key storage (gitignored) |
| `scripts/setup.sh` | One-time setup |
| `scripts/sync-skill.sh` | Copies skill edits to .claude/ and .cursor/ |
| `references/influencers/` | People photos for AI recreation |
| `references/products/` | Product photos for videos |
| `references/aesthetics/` | Style references (ugc-selfie/, cinematic/) |

## Supported Models

- **Sora 2** — Quick video generation with style references
- **Veo 3.1** — Animated stills with startFrame, natural motion + dialogue
- **Kling 3.0** — Video generation
- **Nano Banana** — Google's latest generation model

## MASTER_CONTEXT.md

The agent reads this at session start and writes learnings back:
- Default product (auto-populated on first use)
- Credit costs
- Brand voice (tone, audience, word preferences)
- API learnings
- Dated changelog

## Security

- `.env` is gitignored — never committed
- `MASTER_CONTEXT.md` is gitignored — contains product IDs
- Never paste API keys in public chats

## API & Docs

- [Arcads Swagger UI](https://external-api.arcads.ai/docs)
- [Sora 2 Prompting Guide](https://developers.openai.com/cookbook/examples/sora/sora2_prompting_guide)
- [Veo 3.1 Guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- [Kling User Guide](https://kling.ai/quickstart/klingai-video-3-model-user-guide)
- [Nano Banana Guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana)

## Tips

- Drop reference images into `references/` folders — the agent uses them automatically
- After editing skills, run `./scripts/sync-skill.sh` to update .claude/ and .cursor/
- The agent handles API calls, polling, prompt engineering, and file organization
- Works with Claude Code, Cursor, Manus, and Copilot (point at AGENTS.md)
