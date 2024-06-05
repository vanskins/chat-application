// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "chat-application-64f63.firebaseapp.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: "chat-application-64f63.appspot.com",
  messagingSenderId: "850183137869",
  appId: "1:850183137869:web:952f736706ab4214bb0a04",
  measurementId: "G-RBNTKVGQZS",
};
console.log(process.env.GOOGLE_API_KEY);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
