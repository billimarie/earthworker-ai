// functions/src/index.ts

// Import initializeApp directly from the 'firebase-admin/app' subpath
import { initializeApp } from 'firebase-admin/app';
// Import other parts of admin as needed, e.g., firestore from 'firebase-admin/firestore'
// import { getFirestore } from 'firebase-admin/firestore'; // For Firestore if you need it later
import { google, sheets_v4 } from 'googleapis';
import { firestore } from 'firebase-functions/v2';
import { logger } from 'firebase-functions';

// Initialize Firebase Admin SDK using the imported initializeApp
initializeApp();

// If you need to access other admin services (like Firestore, Auth, etc.)
// you'd typically get them after initializeApp() is called:
// const db = getFirestore(); // Example for Firestore

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

let auth: any;
let sheets: sheets_v4.Sheets;
let authInitialized = false;

async function ensureSheetsClient() {
  if (authInitialized) {
    return;
  }

  try {
    auth = new google.auth.GoogleAuth({
      scopes: SCOPES,
    });

    sheets = google.sheets({ version: 'v4', auth });
    authInitialized = true;
    logger.info("Google Sheets API client initialized successfully using Default Application Credentials.");
  } catch (e) {
    logger.error("Failed to initialize Sheets API client using Default Application Credentials:", e);
    throw new Error("Failed to initialize Sheets API client."); // Re-throw to indicate critical failure
  }
}

export const appendFeedbackToSheet = firestore.onDocumentCreated(
  { document: 'feedback/{feedbackId}' },
  async (event) => {
    logger.info("appendFeedbackToSheet: Function triggered.");

    await ensureSheetsClient();

    if (!sheets) {
      logger.error("Sheets client not initialized. Skipping feedback append.");
      throw new Error("Sheets client not initialized. Cannot append feedback.");
    }

    const newFeedback = event.data?.data();

    if (!newFeedback) {
      logger.warn("No data found in the Firestore document. Skipping.");
      return;
    }

    const timestamp = newFeedback.timestamp?.toDate().toISOString() || new Date().toISOString();
    const email = newFeedback.email || 'N/A';
    const comment = newFeedback.comment || 'N/A';

    const values = [
      [timestamp, email, comment],
    ];

    const spreadsheetId = '1YL97W4EYs4hKvh8O14QjQXRbuuOh_fZdCW9yZsYZmdc';
    const range = 'Sheet1!A:C';

    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values,
        },
      });
      logger.info('Feedback appended to Google Sheets successfully!', response.data);
    } catch (error: any) {
      logger.error('Error appending feedback to Google Sheets:', error);
      if (error.response && error.response.data) {
        logger.error('Error response data:', error.response.data);
      }
      if (error.cause && error.cause.comment) {
        logger.error('Error cause comment:', error.cause.comment);
      }
      throw new Error(`Failed to append feedback to Google Sheets: ${error.comment || 'Unknown error'}`);
    }
  }
);