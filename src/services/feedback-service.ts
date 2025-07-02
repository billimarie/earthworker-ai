'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface FeedbackData {
  email: string;
  comment?: string;
}

export async function saveFeedback(data: FeedbackData): Promise<string> {
  const feedbackCollectionRef = collection(db, 'feedback');
  const docRef = await addDoc(feedbackCollectionRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
