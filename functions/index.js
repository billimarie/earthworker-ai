// functions/index.js
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Initialize Firebase Admin (important: do this only once)
admin.initializeApp();

// Use ES module import for googleapis if you've configured your project for it,
// otherwise, the require() is fine if your compiled JS handles it.
// Given your previous linting error, let's stick to `require` for googleapis
// if you're not fully on ESM for all dependencies.
const { google } = require("googleapis");

const serviceAccountKeyB64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_B64;

// Add a check to ensure the config variable exists at runtime
if (!serviceAccountKeyB64) {
  functions.logger.error("Firebase config variable 'google.service_account_key_b64' is missing.");
  // Consider throwing an error or returning early if this is critical for all calls
  // For now, it will proceed and likely fail on auth
}

// Decode the service account key
let serviceAccount;
try {
  const decodedKey = Buffer.from(serviceAccountKeyB64, "base64").toString("utf-8");
  serviceAccount = JSON.parse(decodedKey);
} catch (e) {
  functions.logger.error("Failed to decode or parse service account key:", e.message);
  // Handle error: e.g., return or throw
  serviceAccount = null; // Ensure serviceAccount is null if parsing fails
}


const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// Initialize auth only if serviceAccount was successfully parsed
let auth;
if (serviceAccount) {
  auth = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    SCOPES
  );
} else {
  functions.logger.error("Service account not initialized due to previous key error.");
  // If auth is null, subsequent calls will fail.
}


// Replace with your Sheet ID
const SPREADSHEET_ID = "1YL97W4EYs4hKvh8O14QjQXRbuuOh_fZdCW9yZsYZmdc";
const sheets = google.sheets({ version: "v4", auth });

exports.appendFeedbackToSheet = functions.firestore
  .document("feedback/{feedbackId}")
  .onCreate(async (snap, context) => {
    // Check if auth was successfully set up
    if (!auth || !auth.credentials || !auth.credentials.client_email) {
      functions.logger.error("Google Sheets API client not authenticated. Check service account key and setup.");
      return null; // Stop execution
    }

    const data = snap.data();
    const timestamp = data.createdAt
      ? data.createdAt.toDate().toISOString()
      : new Date().toISOString();

    const row = [timestamp, data.email, data.comment];

    try {
      // Attempt to authorize the JWT client (recommended before making calls)
      await auth.authorize();

      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:C",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [row],
        },
      });
      functions.logger.info(`Feedback appended to Google Sheet: ${row}`);
      return null; // Cloud Functions should return null or a Promise that resolves to null for background triggers
    } catch (error) {
      functions.logger.error("Error appending feedback to Google Sheet:", error.message);
      // Log the full error object for more details, especially error.response.data from googleapis
      if (error.response && error.response.data) {
        functions.logger.error("Google API Error Response Details:", JSON.stringify(error.response.data, null, 2));
      } else if (error.errors) { // Sometimes errors are structured this way
          functions.logger.error("Google API Error object details:", JSON.stringify(error.errors, null, 2));
      } else {
          functions.logger.error("Full Error Object:", JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
      }
      // Re-throwing the error can make the function retry (default behavior for background functions)
      // or indicate a failure. For background triggers, throwing an error will mark the function failed
      // and potentially retry, which might be what you want for data integrity.
      throw error;
    }
  });