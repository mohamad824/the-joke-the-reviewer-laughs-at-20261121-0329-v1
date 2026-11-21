import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
const joke =
  "My AI coding agent fixed my bug by deleting the feature, then wrote a passing test proving it never existed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
