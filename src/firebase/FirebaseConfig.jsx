// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Ls5WGMvtWi3pF_WgT8meKB0I67TYxcw",
  authDomain: "myecom-ae62d.firebaseapp.com",
  projectId: "myecom-ae62d",
  storageBucket: "myecom-ae62d.appspot.com",
  messagingSenderId: "517044441281",
  appId: "1:517044441281:web:5c135e0946b3ebb7af0440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const fireDB = getFirestore(app);

const auth = getAuth(app);

export {auth, fireDB}