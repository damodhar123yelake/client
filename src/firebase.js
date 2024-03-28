// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-eab49.firebaseapp.com",
  projectId: "real-estate-eab49",
  storageBucket: "real-estate-eab49.appspot.com",
  messagingSenderId: "161599095963",
  appId: "1:161599095963:web:342e75e7faba957660723e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
