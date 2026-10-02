import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, "accounts.json");

export async function getAccounts() {
  const data = await readFile(DB_PATH, "utf8");
  return JSON.parse(data);
}

export async function saveAccounts(accounts) {
  await writeFile(DB_PATH, JSON.stringify(accounts, null, 2));
}