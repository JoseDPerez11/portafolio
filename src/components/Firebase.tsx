
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCebNxTt_AyaiqjFVnNOtIRCPnXpDYENB0",
  authDomain: "portafolio-38d4e.firebaseapp.com",
  projectId: "portafolio-38d4e",
  storageBucket: "portafolio-38d4e.firebasestorage.app",
  messagingSenderId: "406197102446",
  appId: "1:406197102446:web:b0fb6df337d7aeb375837f",
  measurementId: "G-N0VT2FSE25"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);