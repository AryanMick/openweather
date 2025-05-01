// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCNILwPIOK7_C_9CxpPCLqmATvbjnG1JA",
  authDomain: "openweather-dee70.firebaseapp.com",
  projectId: "openweather-dee70",
  storageBucket: "openweather-dee70.firebasestorage.app",
  messagingSenderId: "1088742694613",
  appId: "1:1088742694613:web:dbb988b797a54b95948c5c",
  measurementId: "G-2NT8D6FHKZ"
};

// Initialize Firsebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };