// import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5HKFn6zFJe_p_kpE6T37uYXfktqHKFnM",
  authDomain: "project-dish.firebaseapp.com",
  projectId: "project-dish",
  storageBucket: "project-dish.appspot.com",
  messagingSenderId: "154168601130",
  appId: "1:154168601130:web:f569c8fe1ad8fb1baf3153"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const google = new GoogleAuthProvider();
// const db = firebaseApp.firestrore();

export { 
    app, 
    google, 
    db 
};