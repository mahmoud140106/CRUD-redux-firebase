// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4zMl-LBGq3UezToKgib0rQI55MvbUU64",
  authDomain: "crud-books-redux.firebaseapp.com",
  projectId: "crud-books-redux",
  storageBucket: "crud-books-redux.appspot.com",
  messagingSenderId: "185052986626",
  appId: "1:185052986626:web:f7d8861aee686fd060d61b",
  measurementId: "G-1GNC5ZN8P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);
export { db };
