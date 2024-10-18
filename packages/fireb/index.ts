// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLL3RdvoZC5XRuXgj5IKcFJTggNHTG1V0",
  authDomain: "alnnachir.firebaseapp.com",
  projectId: "alnnachir",
  storageBucket: "alnnachir.appspot.com",
  messagingSenderId: "680902582981",
  appId: "1:680902582981:web:55d656cf5f1f44c5b1c6ac",
  measurementId: "G-JGS4SKCQLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);