import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgv0sOCsDvHy-vGrrnYFPoUaJK-qgLjHM",
  authDomain: "proyecto-22d1d.firebaseapp.com",
  projectId: "proyecto-22d1d",
  storageBucket: "proyecto-22d1d.appspot.com",
  messagingSenderId: "251534626021",
  appId: "1:251534626021:web:a0b0b9fc8ee2ccf529580c"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}