import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const entry =
  "Error: the file is not missing. It is in the folder you swore you checked, named 'final_FINAL_v2_REAL.docx'.";

async function main(): Promise<void> {
  const lines = entry.split("\n");
  if (lines.length !== 1 || entry.length < 1 || entry.length > 200) {
    throw new Error(`entry fails gate: ${entry.length} chars, ${lines.length} lines`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "entry.txt"), entry, "utf8");
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
