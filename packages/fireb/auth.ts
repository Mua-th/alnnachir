// auth.ts
import { auth } from './';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Sign up a new user

export function registerUser(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user.email);
     // user.sendEmailVerification().then(() => {
      //  console.log("Verification email sent.");
      //});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Registration error:", errorCode, errorMessage);
    });
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
