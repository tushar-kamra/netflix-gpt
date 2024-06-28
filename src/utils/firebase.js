// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcdNJRUnSWuVzZ6VcacFuMzR7RsZUDgRM",
    authDomain: "netflixgpt-8ad1f.firebaseapp.com",
    projectId: "netflixgpt-8ad1f",
    storageBucket: "netflixgpt-8ad1f.appspot.com",
    messagingSenderId: "643194763622",
    appId: "1:643194763622:web:64aa0c9a060a62a269f0a7",
    measurementId: "G-JF1HR8FVC7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
