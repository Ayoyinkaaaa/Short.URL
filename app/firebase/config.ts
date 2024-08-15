import {getApps, getApp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDKuoUUGVy-zSw-TFpVVwHGbEzmPGp0Xaw",
  authDomain: "scissors-b332a.firebaseapp.com",
  projectId: "scissors-b332a",
  storageBucket: "scissors-b332a.appspot.com",
  messagingSenderId: "890105613846",
  appId: "1:890105613846:web:267fce3cd62da651906f37"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, app, firestore};



