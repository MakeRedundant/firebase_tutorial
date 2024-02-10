// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWu9sMkdeq5abSfIuC0u8rrfhpZ37CWOQ",
  authDomain: "example-project-1b1fa.firebaseapp.com",
  projectId: "example-project-1b1fa",
  storageBucket: "example-project-1b1fa.appspot.com",
  messagingSenderId: "602325092348",
  appId: "1:602325092348:web:2964618c6416311ffc1479",
  measurementId: "G-EJ4ZQKYPGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

export { auth, db, storage }