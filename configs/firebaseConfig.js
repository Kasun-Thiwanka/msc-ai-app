// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXmBwT1NVqVJ8VV_LP-MxDrnFeGKxdctw",
  authDomain: "msc-ai-app.firebaseapp.com",
  projectId: "msc-ai-app",
  storageBucket: "msc-ai-app.appspot.com",
  messagingSenderId: "859159426101",
  appId: "1:859159426101:web:8a4eeef8e9a9b07f162d7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
