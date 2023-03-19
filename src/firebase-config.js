// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqXfwPwjlMvFs1xYce9_9D3cYKE_Jd1Gs",
  authDomain: "chatapp-f7956.firebaseapp.com",
  projectId: "chatapp-f7956",
  storageBucket: "chatapp-f7956.appspot.com",
  messagingSenderId: "276446184362",
  appId: "1:276446184362:web:4a69fea0c04baf0ffda1d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);