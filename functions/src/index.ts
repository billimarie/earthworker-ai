// functions/src/index.ts

import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";
import { initializeApp } from "firebase-admin/app";
import { google } from "googleapis";

initializeApp();

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SPREADSHEET_ID = "1YL97W4EYs4hKvh8O14QjQXRbuuOh_fZdCW9yZsYZmdc";

// --- DEFERRED AUTH INITIALIZATION ---
let sheets: ReturnType<typeof google.sheets> | null = null;
let auth: any = null;
let authInitialized = false;

function ensureSheetsClient() {
  if (authInitialized) {
    return;
  }

  // In Firebase Functions v2, functions.config() variables are
  // automatically converted into standard environment variables.
  // Access them directly using process.env.
  // The name will be the uppercase, dot-to-underscore version:
  // google.service_account_key_b64  -> GOOGLE_SERVICE_ACCOUNT_KEY_B64
  const config = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_B64; // <-- CHANGE IS HERE

  if (!config) {
    logger.error("Service account key (GOOGLE_SERVICE_ACCOUNT_KEY_B64) not found in environment variables. Ensure it's set via 'firebase functions:config:set'.");
    return;
  }

  try {
    const decoded = Buffer.from(config, "base64").toString("utf-8");
    const serviceAccount = JSON.parse(decoded);

    auth = new google.auth.JWT({
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes: SCOPES,
    });

    sheets = google.sheets({ version: "v4", auth });
    authInitialized = true;
    logger.info("Google Sheets API client initialized successfully.");
  } catch (e) {
    logger.error("Failed to initialize Sheets API client:", e);
  }
}

// --- FIRESTORE TRIGGER ---

export const appendFeedbackToSheet = onDocumentCreated(
  "feedback/{feedbackId}",
  async (event) => {
    // Ensure the client is initialized when the function instance starts
    // (or on the first invocation if cold start).
    // This function will only run its initialization logic once.
    ensureSheetsClient();

    if (!auth || !sheets) {
      logger.error("Sheets client not initialized. Skipping feedback append.");
      return null;
    }

    const snap = event.data;
    if (!snap) {
      logger.error("No Firestore snapshot data received.");
      return null;
    }

    const data = snap.data();
    const timestamp =
      data?.createdAt?.toDate?.().toISOString() ?? new Date().toISOString();
    const row = [timestamp, data?.email ?? "", data?.comment ?? ""];

    try {
      await auth.authorize();
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:C",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [row] },
      });
      logger.info(`Feedback appended to Google Sheet: ${row}`);
      return null;
    } catch (err: any) {
      logger.error("Error appending feedback to Google Sheets:", err);
      throw err; // Re-throw to indicate function failure and allow retries (if configured)
    }
  }
);