// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebaseAuths from "firebase/auth";
import { collection, doc, setDoc, getFirestore, query, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFdox5c6V4jTBlOwIy2u1x9PcfTIfWatE",
  authDomain: "task-manager-5a7bf.firebaseapp.com",
  projectId: "task-manager-5a7bf",
  storageBucket: "task-manager-5a7bf.appspot.com",
  messagingSenderId: "210241520412",
  appId: "1:210241520412:web:69920e55215cd068bff0d9",
  measurementId: "G-S2018ZGYLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const usersRef = doc(db, "users", "lphn9bB6UveKDjzjCWEVt3zsuhv2");

export { firebaseAuths, app, usersRef, db };
// export const firebaseAuth = getAuth();
// export const firebaseCreateUser = createUserWithEmailAndPassword
// export { app, analytics };