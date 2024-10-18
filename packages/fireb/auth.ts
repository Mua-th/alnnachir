// auth.ts
import { auth } from './'; // Adjust this import based on your file structure
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Sign up a new userconst db = getFirestore(); // Initialize Firestore
const db = getFirestore(); // Initialize Firestore

export async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("User created:", user.email);
    
    // Create a corresponding user document in Firestore
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      email: user.email,
      
      createdAt: new Date(), // Add other fields as necessary
    });

    // Optionally, send verification email
    //await user.sendEmailVerification();
    //console.log("Verification email sent.");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Registration error:", errorCode, errorMessage);
  }
}

// Sign in existing user
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Signed in user:", userCredential.user.email);
  } catch (error) {
    console.error("Sign in error:", error.code, error.message);
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Signed in with Google:", user.email);
    // You can also get additional user information here if needed
  } catch (error) {
    console.error("Google sign in error:", error.code, error.message);
  }
};
