
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCm118RqEcc2hh3mWBmGM_CBE7qw3jBn34",
  authDomain: "fajada-50008.firebaseapp.com",
  projectId: "fajada-50008",
  storageBucket: "fajada-50008.appspot.com",
  messagingSenderId: "279378748725",
  appId: "1:279378748725:web:92223094c5b5c7a606987c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);