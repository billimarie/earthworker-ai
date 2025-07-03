'use server';

import { db } from '@/lib/firebase';
import { doc, runTransaction, increment } from 'firebase/firestore';

const impactDocRef = doc(db, 'impact', 'global');

export interface ImpactData {
  sqFtRegenerated: number;
  netCarbon: number;
  netWater: number;
  biodiversitySpeciesSupported: number;
  adRevenue: number;
  operationalCosts: number;
}

export async function getImpactData(): Promise<ImpactData> {
  const data = await runTransaction(db, async (transaction) => {
    const docSnap = await transaction.get(impactDocRef);
    if (docSnap.exists()) {
      return docSnap.data() as ImpactData;
    }
    
    // Initial costs to show a starting negative profit
    const initialData: ImpactData = { 
      sqFtRegenerated: 0, 
      netCarbon: 0, 
      netWater: 0, 
      biodiversitySpeciesSupported: 0,
      adRevenue: 0,
      operationalCosts: 500 
    };
    transaction.set(impactDocRef, initialData);
    return initialData;
  });
  return data;
}

export async function updateImpactData(data: Partial<ImpactData>): Promise<void> {
    await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(impactDocRef);

        const updates: {[key: string]: any} = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                updates[key] = increment((data as any)[key]);
            }
        }

        if (!docSnap.exists()) {
            const initialData: ImpactData = { 
                sqFtRegenerated: 0, 
                netCarbon: 0, 
                netWater: 0, 
                biodiversitySpeciesSupported: 0,
                adRevenue: 0,
                operationalCosts: 500 
            };
            const mergedData = { ...initialData, ...data };
            
            // Set the initial document with merged values
            transaction.set(impactDocRef, mergedData);
            return;
        }

        // If the document exists, update it with the increments
        transaction.update(impactDocRef, updates);
    });
}
