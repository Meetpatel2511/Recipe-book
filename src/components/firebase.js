// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj1nGLUKCnM0fa6BWjuNHWD54P7Uzdevo",
  authDomain: "recipe-book-85791.firebaseapp.com",
  projectId: "recipe-book-85791",
  storageBucket: "recipe-book-85791.appspot.com", // ✅ fixed
  messagingSenderId: "721014476683",
  appId: "1:721014476683:web:e57e9073b27ff31265e98e",
  measurementId: "G-2YG765NQM7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
