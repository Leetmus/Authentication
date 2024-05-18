// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore}  from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW2oyqsQCxBU3ol4QKjXu4YBeaZHzHhSI",
  authDomain: "second-auth-387c7.firebaseapp.com",
  projectId: "second-auth-387c7",
  storageBucket: "second-auth-387c7.appspot.com",
  messagingSenderId: "1083938390422",
  appId: "1:1083938390422:web:ad2ebbfa70d0beba6c1db7",
  measurementId: "G-H2NC8EHV05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore()