// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPpASt9p4CAjknpM3sPT0Qy1Y3MQHiiqc",
  authDomain: "joy-wedding-1a543.firebaseapp.com",
  projectId: "joy-wedding-1a543",
  storageBucket: "joy-wedding-1a543.appspot.com",
  messagingSenderId: "687932633934",
  appId: "1:687932633934:web:1f03d8774e39c1fb5ae41f",
  measurementId: "G-38T1X4D20Q",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Only initialize analytics in browser environment
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const getCurrentUser = () => {
  return auth.currentUser;
};
