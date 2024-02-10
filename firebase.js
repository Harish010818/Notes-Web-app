
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8CkmqEsQH0_2KmMiw85Rm-7lc_kTDDB0",
  authDomain: "react-notes-78375.firebaseapp.com",
  projectId: "react-notes-78375",
  storageBucket: "react-notes-78375.appspot.com",
  messagingSenderId: "47495044546",
  appId: "1:47495044546:web:429afd3f6dbab878804a5b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")