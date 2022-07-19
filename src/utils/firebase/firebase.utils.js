import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB9TaNzrtiREGQjP8Y4-EKtaH-GK7MA8GU",
  authDomain: "ecommerce-db-norman.firebaseapp.com",
  projectId: "ecommerce-db-norman",
  storageBucket: "ecommerce-db-norman.appspot.com",
  messagingSenderId: "839623970811",
  appId: "1:839623970811:web:f5ccf6d12e67bb5574c55e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
