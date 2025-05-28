// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "delivra-7a9d1.firebaseapp.com",
  projectId: "delivra-7a9d1",
  storageBucket: "delivra-7a9d1.firebasestorage.app",
  messagingSenderId: "738552005790",
  appId: "1:738552005790:web:828468c0a5ee61b9b0a78f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
