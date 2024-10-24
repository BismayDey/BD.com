// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOWPsnbD-BV03wVnF0_X8STtd9dNY3X18",
  authDomain: "better-30b47.firebaseapp.com",
  projectId: "better-30b47",
  storageBucket: "better-30b47.appspot.com",
  messagingSenderId: "353925650871",
  appId: "1:353925650871:web:ca8f263f457c45ad78b032",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
