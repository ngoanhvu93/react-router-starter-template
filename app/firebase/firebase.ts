// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbR2iYyltAHjUtkmIXC4z91plKFgxBZQk",
  authDomain: "test-1ec49.firebaseapp.com",
  projectId: "test-1ec49",
  storageBucket: "test-1ec49.firebasestorage.app",
  messagingSenderId: "889331143803",
  appId: "1:889331143803:web:29ccabf7fb1ac648287ede",
  measurementId: "G-5243Q9XCRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
