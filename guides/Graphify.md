# Graphify — Knowledge Graph Generator Cheat Sheet
**Output folder:** `graphify-out/`
**Last verified:** April 2026

---

## What It Is

Graphify takes any input (code, docs, papers, images) and generates a knowledge graph with clustered communities. It produces HTML visualizations, JSON data, and audit reports.

## How to Use

Graphify is available as a Windsurf skill. Invoke it when you want to:
- Visualize code architecture as a knowledge graph
- Cluster related concepts from documentation
- Generate interactive HTML graph visualizations
- Create audit reports from complex data

## Output

| File | What It Contains |
|------|-----------------|
| `graphify-out/graph.html` | Interactive HTML visualization |
| `graphify-out/graph.json` | Raw graph data (nodes + edges) |
| `graphify-out/audit.md` | Audit report of clusters |
| `graphify-out/cache/` | Cached intermediate data |

## Trigger Phrases

- "Create a knowledge graph of..."
- "Visualize the architecture..."
- "Map the relationships between..."
- "Generate a graph from..."

## Tri-Lens Usage

Useful for:
- Visualizing scoring engine dependencies
- Mapping pipeline execution flows
- Creating architecture diagrams from code
- Documenting component relationships

---

## Related Cheat Sheets

| Sheet | Relationship |
|-------|-------------|
| [[GitNexus-Cheatsheet]] | Both are code intelligence — GitNexus for queries, Graphify for visual output |
| [[Claude-Code-Skills-Cheatsheet]] | Graphify is available as a Windsurf skill |
| [[Cheat-Sheets-Index]] | Back to index |
