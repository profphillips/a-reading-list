import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlQBs9c_TGPhXTrAlodUbN5JKnxVrq0mM",
  authDomain: "readinglistjp.firebaseapp.com",
  projectId: "readinglistjp",
  storageBucket: "readinglistjp.appspot.com",
  messagingSenderId: "188008422900",
  appId: "1:188008422900:web:bef83dd203e3563ad8eda1",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth };
