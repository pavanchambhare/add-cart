// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGk_AArivHiW8o7r1sCHFJoNtviG1uXCw",
  authDomain: "food-auth-3c667.firebaseapp.com",
  projectId: "food-auth-3c667",
  storageBucket: "food-auth-3c667.appspot.com",
  messagingSenderId: "566005768641",
  appId: "1:566005768641:web:ae1b0f565624552c7b4f40",
  measurementId: "G-29SBSHK2KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export default app