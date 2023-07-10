// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTWA4413UWGEBaCtP0mqKSuU1btFJT-sI",
  authDomain: "bunker-store-2dbd4.firebaseapp.com",
  projectId: "bunker-store-2dbd4",
  storageBucket: "bunker-store-2dbd4.appspot.com",
  messagingSenderId: "854250186616",
  appId: "1:854250186616:web:98c5193d424ba23fca8a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);