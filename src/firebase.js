// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWvWDCjDgxRhVHI1tO9KYf8m6a-xQ3wu8",
  authDomain: "laundryhub-899b4.firebaseapp.com",
  projectId: "laundryhub-899b4",
  storageBucket: "laundryhub-899b4.appspot.com",
  messagingSenderId: "470908333028",
  appId: "1:470908333028:web:011fb9760a6a095533f5f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { db, auth, provider };
