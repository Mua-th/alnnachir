// lib/firebaseAdmin.ts
import * as admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import { ServiceAccount } from 'firebase-admin';

const serviceAccount = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string
) as ServiceAccount;

console.log("---------- API KEY HERE -------------"+process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export { admin };
