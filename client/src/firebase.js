import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCK0gn6W8AhPxGS7zyQcWKaHHgBa8tqTrg",
    authDomain: "orgmart-76c5f.firebaseapp.com",
    projectId: "orgmart-76c5f",
    storageBucket: "orgmart-76c5f.firebasestorage.app",
    messagingSenderId: "624230778470",
    appId: "1:624230778470:web:14b70fb5111545d12bcfa7",
    measurementId: "G-2SV8TMEFSN"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
