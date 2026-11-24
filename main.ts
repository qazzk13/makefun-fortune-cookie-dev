process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";

// One original fortune-cookie line for a software developer.
// Gate: /output/entry.txt must be UTF-8 text of 1-120 characters,
// not only whitespace. No trailing newline: the file is the line.
const LINE =
  "Every estimate is a fortune told twice: once to the manager, once to the mirror.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
