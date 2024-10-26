// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTB9e3_tw9ITCBAKyetiE17ud0bFZ20b8",
  authDomain: "fir-kart-9e88e.firebaseapp.com",
  projectId: "fir-kart-9e88e",
  storageBucket: "fir-kart-9e88e.appspot.com",
  messagingSenderId: "225470722292",
  appId: "1:225470722292:web:746429f8b6035bab05aea1",
  measurementId: "G-HTTBSG6Q9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
