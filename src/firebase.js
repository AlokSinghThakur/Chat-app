// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtAbj-7EKC5UQkB2BF6BDPyXiRG_YD77U",
    authDomain: "chat-56069.firebaseapp.com",
    projectId: "chat-56069",
    storageBucket: "chat-56069.appspot.com",
    messagingSenderId: "194463604670",
    appId: "1:194463604670:web:8c71037082e3273558a3ef",
    measurementId: "G-3FMSHRGF1K"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();