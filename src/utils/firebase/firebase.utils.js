import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASam-B3pim9LKNaYwAX2I5Q2eJjvHJta4",
  authDomain: "superchat-59cde.firebaseapp.com",
  projectId: "superchat-59cde",
  storageBucket: "superchat-59cde.appspot.com",
  messagingSenderId: "730499085620",
  appId: "1:730499085620:web:ef9b0e0ca477d87485a161",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
