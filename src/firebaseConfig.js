// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARa3F2kIya8N9eEoYCqDW6PdVG70-1WXE",
  authDomain: "netdokproject.firebaseapp.com",
  databaseURL: "https://netdokproject-default-rtdb.firebaseio.com",
  projectId: "netdokproject",
  storageBucket: "netdokproject.appspot.com",
  messagingSenderId: "590796765954",
  appId: "1:590796765954:web:01267e3a420d963c18e01b",
  measurementId: "G-VE8JQWXLZ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot };
