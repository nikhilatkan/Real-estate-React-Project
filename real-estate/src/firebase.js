// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiObwE33d1K42i3F-4bF8OsQ5kgO8UY-M",
    authDomain: "realtor-clone-react-e3cf4.firebaseapp.com",
    projectId: "realtor-clone-react-e3cf4",
    storageBucket: "realtor-clone-react-e3cf4.appspot.com",
    messagingSenderId: "208153497091",
    appId: "1:208153497091:web:05cdba6bfa587a9dd18836"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();