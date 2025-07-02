import { firestore } from 'firebase-functions/v2';
export declare const appendFeedbackToSheet: import("firebase-functions/core").CloudFunction<firestore.FirestoreEvent<firestore.QueryDocumentSnapshot | undefined, {
    feedbackId: string;
}>>;
