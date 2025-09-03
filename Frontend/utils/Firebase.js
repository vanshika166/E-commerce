
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginheandshe.firebaseapp.com",
  projectId: "loginheandshe",
  storageBucket: "loginheandshe.firebasestorage.app",
  messagingSenderId: "2369636519",
  appId: "1:2369636519:web:e36df692dbbecd45107382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export{auth,provider}