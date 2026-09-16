/**
 * THE NERVOUS RESET — Subscribe API Route
 *
 * POST /api/subscribe
 *
 * Receives the minimal Check-In payload from the client,
 * validates it, and appends a row to Google Sheets.
 *
 * Server-side only — no secrets are exposed to the browser.
 * The Check-In result is never dependent on this endpoint's success.
 */

import { NextResponse, type NextRequest } from "next/server";
import {
  appendRow,
  VALID_RESET_SLUGS,
  VALID_RESULT_CATEGORIES,
} from "@/lib/google-sheets";

/* ================================================================
   TYPES
   ================================================================ */

interface SubscribePayload {
  email: string;
  resultCategory: string;
  recommendedReset: string | null;
}

/** The exact keys the client is allowed to send */
const ALLOWED_KEYS = new Set(["email", "resultCategory", "recommendedReset"]);

const VALID_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ================================================================
   HANDLERS
   ================================================================ */

/** Only POST is accepted */
export async function GET() {
  return NextResponse.json(
    { ok: false },
    { status: 405 }
  );
}

export async function POST(request: NextRequest) {
  /* ── 1. Parse JSON body ── */
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  /* ── 2. Validate it's a plain object ── */
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  /* ── 3. Check for unexpected extra fields ── */
  const keys = Object.keys(body);
  for (const key of keys) {
    if (!ALLOWED_KEYS.has(key)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  }

  const { email, resultCategory, recommendedReset } = body as SubscribePayload;

  /* ── 4. Validate email ── */
  if (typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();
  if (!VALID_EMAIL_RE.test(normalizedEmail)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  /* ── 5. Validate resultCategory ── */
  if (
    typeof resultCategory !== "string" ||
    !(VALID_RESULT_CATEGORIES as readonly string[]).includes(resultCategory)
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  /* ── 6. Validate recommendedReset ── */
  if (recommendedReset !== null) {
    if (
      typeof recommendedReset !== "string" ||
      !(VALID_RESET_SLUGS as readonly string[]).includes(recommendedReset)
    ) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  }

  /* ── 7. Build the row (server-generated timestamp) ── */
  const timestamp = new Date().toISOString();
  const row: [string, string, string, string] = [
    timestamp,
    normalizedEmail,
    resultCategory,
    recommendedReset ?? "",
  ];

  /* ── 8. Append to Google Sheets ── */
  try {
    await appendRow(row);
    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log a concise, non-sensitive error identifier
    const code = error instanceof Error ? error.message : "unknown";
    console.error("[subscribe] Sheets append failed:", code.split("\n")[0]);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
