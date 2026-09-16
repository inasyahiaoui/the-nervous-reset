/**
 * THE NERVOUS RESET — Google Sheets Helper
 *
 * Server-side only. This module is never imported by client components.
 * It authenticates with a Google service account and appends rows
 * to the project's lead-capture spreadsheet.
 *
 * Privacy: only the approved minimal payload is written.
 * No individual question answers, no scores, no fingerprints.
 */

import { google, type sheets_v4 } from "googleapis";

/* ================================================================
   CONFIGURATION
   ================================================================ */

const SHEET_TAB = "Sheet1";

/* ================================================================
   AUTHENTICATED CLIENT
   ================================================================ */

/** Cached singleton — avoids re-authenticating on every request */
let sheetsClient: sheets_v4.Sheets | null = null;

function getSheets(): sheets_v4.Sheets {
  if (sheetsClient) return sheetsClient;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error("Missing Google service account credentials in environment");
  }

  // Normalize escaped newlines from .env.local
  const privateKey = rawKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

/* ================================================================
   APPEND ROW
   ================================================================ */

/**
 * Append a single row to the lead-capture sheet.
 *
 * @param row — a 4-element array: [timestamp, email, resultCategory, recommendedReset]
 * @throws on any Google API error (caller should catch)
 */
export async function appendRow(row: [string, string, string, string]): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID in environment");
  }

  const sheets = getSheets();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${SHEET_TAB}!A:D`,
    valueInputOption: "RAW",
    requestBody: {
      values: [row],
    },
  });
}

/* ================================================================
   VALIDATION HELPERS
   ================================================================ */

/** The five valid Reset slugs — matches data/resets.ts */
export const VALID_RESET_SLUGS = [
  "anxiety",
  "new-mom",
  "burnout",
  "low-energy",
  "heartbreak",
] as const;

export type ValidResetSlug = (typeof VALID_RESET_SLUGS)[number];

export const VALID_RESULT_CATEGORIES = [
  "doing-well",
  "reset-may-help",
  "consider-support",
] as const;

export type ValidResultCategory = (typeof VALID_RESULT_CATEGORIES)[number];
