// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBlRzCGxTG3PsLf61K_yFwJTWRBIvXUj5g",
    authDomain: "vestereng-skov.firebaseapp.com",
    projectId: "vestereng-skov",
    storageBucket: "vestereng-skov.appspot.com",
    messagingSenderId: "687290531302",
    appId: "1:687290531302:web:d4ae055fd756c18549ea27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export af normale firebase funktioner, så vi lettere kan tilgå dem i andre componenter
export const auth = getAuth(app);
export const bookingsRef = collection(db, "bookings");
export const quotesRef = collection(db, "quotes");