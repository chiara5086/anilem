// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDlzrl4bWxtzYpiR1Q7HL0p5OwHwKJGYpY",

  authDomain: "anilem-caea9.firebaseapp.com",

  projectId: "anilem-caea9",

  storageBucket: "anilem-caea9.appspot.com",

  messagingSenderId: "842343439190",

  appId: "1:842343439190:web:8516c2b595cd70dfd394f7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;