import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { DatabaseSync as DatabaseSyncType } from "node:sqlite";
import { seedBuiltinBooks } from "./seed";

// Use process.getBuiltinModule so the bundler never tries to resolve node:sqlite.
const { DatabaseSync } = process.getBuiltinModule("node:sqlite") as typeof import("node:sqlite");

export type DB = DatabaseSyncType;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('parent','child')),
  display_name TEXT NOT NULL,
  avatar TEXT NOT NULL DEFAULT '🐼',
  color TEXT NOT NULL DEFAULT '#4FA3FF',
  daily_goal INTEGER NOT NULL DEFAULT 20,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  builtin INTEGER NOT NULL DEFAULT 0,
  sort INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS units (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  grade INTEGER NOT NULL,
  term TEXT NOT NULL DEFAULT '上',
  name TEXT NOT NULL,
  sort INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_units_book ON units(book_id, grade, term, sort);

CREATE TABLE IF NOT EXISTS words (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  unit_id INTEGER NOT NULL REFERENCES units(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  meaning TEXT NOT NULL DEFAULT '',
  phonetic TEXT NOT NULL DEFAULT '',
  pos TEXT NOT NULL DEFAULT '',
  example TEXT NOT NULL DEFAULT '',
  example_cn TEXT NOT NULL DEFAULT '',
  synonyms TEXT NOT NULL DEFAULT '',
  word_family TEXT NOT NULL DEFAULT '',
  ai_explain TEXT NOT NULL DEFAULT '',
  emoji TEXT NOT NULL DEFAULT '',
  sort INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_words_unit ON words(unit_id, sort);

CREATE TABLE IF NOT EXISTS tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  color TEXT NOT NULL DEFAULT '#4FA3FF',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS word_tags (
  word_id INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (word_id, tag_id)
);
CREATE INDEX IF NOT EXISTS idx_word_tags_tag ON word_tags(tag_id);

CREATE TABLE IF NOT EXISTS progress (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  word_id INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
  box INTEGER NOT NULL DEFAULT 0,
  next_review_at TEXT NOT NULL DEFAULT (datetime('now')),
  correct INTEGER NOT NULL DEFAULT 0,
  wrong INTEGER NOT NULL DEFAULT 0,
  last_seen_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (user_id, word_id)
);
CREATE INDEX IF NOT EXISTS idx_progress_review ON progress(user_id, next_review_at);

CREATE TABLE IF NOT EXISTS study_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  word_id INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
  mode TEXT NOT NULL,
  correct INTEGER NOT NULL,
  day TEXT NOT NULL DEFAULT (date('now','localtime')),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_logs_user_day ON study_logs(user_id, day);
CREATE INDEX IF NOT EXISTS idx_logs_user_word_mode ON study_logs(user_id, word_id, mode, correct);
`;

declare global {
  var __wordsDb: DB | undefined;
}

function ensureWordColumns(db: DB) {
  const cols = (db.prepare("PRAGMA table_info(words)").all() as { name: string }[]).map((c) => c.name);
  if (!cols.includes("synonyms")) db.exec("ALTER TABLE words ADD COLUMN synonyms TEXT NOT NULL DEFAULT ''");
  if (!cols.includes("word_family")) db.exec("ALTER TABLE words ADD COLUMN word_family TEXT NOT NULL DEFAULT ''");
  if (!cols.includes("ai_explain")) db.exec("ALTER TABLE words ADD COLUMN ai_explain TEXT NOT NULL DEFAULT ''");
}

function open(): DB {
  const file = process.env.DATABASE_PATH || path.join(process.cwd(), "data", "words.db");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;");
  db.exec(SCHEMA);

  ensureWordColumns(db);
  seedBuiltinBooks(db);
  return db;
}

export function getDb(): DB {
  if (!globalThis.__wordsDb) {
    globalThis.__wordsDb = open();
  } else {
    ensureWordColumns(globalThis.__wordsDb);
    seedBuiltinBooks(globalThis.__wordsDb);
  }
  return globalThis.__wordsDb;
}

/** Run fn inside a transaction. */
export function tx<T>(fn: (db: DB) => T): T {
  const db = getDb();
  db.exec("BEGIN");
  try {
    const r = fn(db);
    db.exec("COMMIT");
    return r;
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
}

export function getSetting(key: string): string | undefined {
  const row = getDb().prepare("SELECT value FROM settings WHERE key = ?").get(key) as { value: string } | undefined;
  return row?.value;
}

export function setSetting(key: string, value: string) {
  getDb()
    .prepare("INSERT INTO settings(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value")
    .run(key, value);
}
