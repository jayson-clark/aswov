// Firebase Imports
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    connectFirestoreEmulator,
    doc,
    getDoc,
    DocumentData
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

/**
 * Firebase configuration object.
 * Uses environment variables for sensitive keys to ensure security.
 */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID as string,
    appId: process.env.REACT_APP_FIREBASE_APP_ID as string,
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app); // Firestore database instance
const auth = getAuth(app); // Firebase Authentication instance
const storage = getStorage(app); // Firebase Storage instance

// Connect to emulators if running in a local development environment
if (process.env.REACT_APP_USE_EMULATOR === 'true') {
    console.log('Connecting to Firestore Emulator on localhost:8080');
    connectFirestoreEmulator(db, 'localhost', 8080);

    console.log('Connecting to Storage Emulator on localhost:9199');
    connectStorageEmulator(storage, 'localhost', 9199);
}

/**
 * Fetches a Firestore document and returns its data as a typed object.
 * 
 * @template T - The expected data type of the Firestore document.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} documentId - The ID of the document to retrieve.
 * @returns {Promise<T | null>} The document data as a typed object, or null if not found.
 *
 * @example
 * const data = await getDocumentAsJSON<MyType>('users', 'user_123');
 * if (data) {
 *   console.log(data.name);
 * }
 */
export async function getDocumentAsJSON<T>(
    collectionName: string,
    documentId: string
): Promise<T | null> {
    try {
        // Reference to the Firestore document
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef); // Fetch the document snapshot

        if (docSnap.exists()) {
            // Return the document data as the specified type
            return docSnap.data() as T;
        } else {
            console.warn(`Document "${documentId}" not found in collection "${collectionName}".`);
            return null;
        }
    } catch (error) {
        console.error('Error retrieving document:', error);
        return null;
    }
}

// Export the initialized Firebase services for external usage
export { db, auth, storage };
