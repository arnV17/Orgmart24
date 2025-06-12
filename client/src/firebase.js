import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnGIdFomYS2EjGzCm9XUgyjZhTdksUguA",
    authDomain: "orgmart-3dee9.firebaseapp.com",
    projectId: "orgmart-3dee9",
    storageBucket: "orgmart-3dee9.firebasestorage.app",
    messagingSenderId: "797841726946",
    appId: "1:797841726946:web:7383e382faa69e1ed06dbb",
    measurementId: "G-BRYK16ZQM4"
  };
  


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
