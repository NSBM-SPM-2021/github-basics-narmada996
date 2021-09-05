// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "./firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnwcer27qNT1rV7xRtePE7IMFzek-nW1k",
  authDomain: "spm-reactjs-registration-form.firebaseapp.com",
  projectId: "spm-reactjs-registration-form",
  storageBucket: "spm-reactjs-registration-form.appspot.com",
  messagingSenderId: "1014896522789",
  appId: "1:1014896522789:web:9eb30fffa8f9256bc471cc",
  measurementId: "G-6LS94B98HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;