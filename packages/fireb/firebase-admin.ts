import { getApps, initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

interface FirebaseAdminConfig {
  projectId: string;
  clientEmail: string;
  privateKey: string;
}

function getFirebaseAdminConfig(): FirebaseAdminConfig {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Missing Firebase Admin configuration. Please check your environment variables.');
  }

  return {
    projectId,
    clientEmail,
    privateKey,
  };
}

function initializeFirebaseAdmin() {
  if (getApps().length <= 0) {
    const config = getFirebaseAdminConfig();
    
    const serviceAccount: ServiceAccount = {
      projectId: config.projectId,
      clientEmail: config.clientEmail,
      privateKey: config.privateKey,
    };

    initializeApp({
      credential: cert(serviceAccount),
    });
  }
}

// Initialize Firebase Admin
initializeFirebaseAdmin();

// Export Firestore instance
export const adminDb = getFirestore();

// Export types
export type FirestoreTimestamp = FirebaseFirestore.Timestamp;
export type FirestoreDocument = FirebaseFirestore.DocumentData;

// Example User type
export interface User extends FirestoreDocument {
  id?: string;
  name: string;
  email: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}
