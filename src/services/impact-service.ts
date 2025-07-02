'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';

const impactDocRef = doc(db, 'impact', 'global');

export interface ImpactData {
  sqFtRegenerated: number;
  netCarbon: number;
  netWater: number;
}

export async function getImpactData(): Promise<ImpactData> {
  const docSnap = await getDoc(impactDocRef);

  if (docSnap.exists()) {
    return docSnap.data() as ImpactData;
  } else {
    // Initialize if it doesn't exist
    const initialData: ImpactData = { sqFtRegenerated: 0, netCarbon: 0, netWater: 0 };
    await setDoc(impactDocRef, initialData);
    return initialData;
  }
}

export async function updateImpactData(data: { sqFtRegenerated: number; netCarbon: number; netWater: number; }): Promise<void> {
    const docSnap = await getDoc(impactDocRef);
    if (!docSnap.exists()) {
        await setDoc(impactDocRef, { sqFtRegenerated: 0, netCarbon: 0, netWater: 0 });
    }
    
    await updateDoc(impactDocRef, {
        sqFtRegenerated: increment(data.sqFtRegenerated),
        netCarbon: increment(data.netCarbon),
        netWater: increment(data.netWater)
    });
}
