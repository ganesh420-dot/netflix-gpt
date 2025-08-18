// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9eOW-O7TZUSHrNKCVR6O403WliDmkrrs",
  authDomain: "netflix-gpt-e3b3e.firebaseapp.com",
  projectId: "netflix-gpt-e3b3e",
  storageBucket: "netflix-gpt-e3b3e.firebasestorage.app",
  messagingSenderId: "1063073393905",
  appId: "1:1063073393905:web:18194885c3e0c9eb16cd50",
  measurementId: "G-DMDWJEE2CE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
