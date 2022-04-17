// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbchboxAHsxo89DuDdA7_63oyHDr3J6rk",
  authDomain: "asignment-10.firebaseapp.com",
  projectId: "asignment-10",
  storageBucket: "asignment-10.appspot.com",
  messagingSenderId: "343945711501",
  appId: "1:343945711501:web:dc16933e84c03ad986f7c4",
  measurementId: "G-ZL0PG6ZY34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;