// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkuEpRZOIrILMzUCw6aNrsFdgcguqvzmE",
  authDomain: "sveltekitboxx.firebaseapp.com",
  projectId: "sveltekitboxx",
  storageBucket: "sveltekitboxx.appspot.com",
  messagingSenderId: "709755463873",
  appId: "1:709755463873:web:a671278a19a858fdd5cc40"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
