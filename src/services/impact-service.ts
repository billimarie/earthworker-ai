'use server';

import { db } from '@/lib/firebase';
import { doc, runTransaction, increment } from 'firebase/firestore';

const impactDocRef = doc(db, 'impact', 'global');

export interface ImpactData {
  sqFtRegenerated: number;
  netCarbon: number;
  netWater: number;
}

export async function getImpactData(): Promise<ImpactData> {
  const data = await runTransaction(db, async (transaction) => {
    const docSnap = await transaction.get(impactDocRef);
    if (docSnap.exists()) {
      return docSnap.data() as ImpactData;
    }
    
    const initialData: ImpactData = { sqFtRegenerated: 0, netCarbon: 0, netWater: 0 };
    transaction.set(impactDocRef, initialData);
    return initialData;
  });
  return data;
}

export async function updateImpactData(data: { sqFtRegenerated: number; netCarbon: number; netWater: number; }): Promise<void> {
    await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(impactDocRef);
        // This transaction ensures that even if the document doesn't exist for some reason,
        // it gets created before attempting to increment values.
        if (!docSnap.exists()) {
            transaction.set(impactDocRef, data);
            return;
        }

        transaction.update(impactDocRef, {
            sqFtRegenerated: increment(data.sqFtRegenerated),
            netCarbon: increment(data.netCarbon),
            netWater: increment(data.netWater)
        });
    });
}
