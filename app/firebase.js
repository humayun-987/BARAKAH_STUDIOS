import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Correct imports

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzT8Q1r9sO_wvNNnSI5PD9CMDEn19PEws",
  authDomain: "barakah-studios-database.firebaseapp.com",
  projectId: "barakah-studios-database",
  storageBucket: "barakah-studios-database.firebasestorage.app",
  messagingSenderId: "198097195334",
  appId: "1:198097195334:web:940d27ef4ba9a58b299547",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };