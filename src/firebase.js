import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTFlISuAL1r9szlqhNZxgGwZyemiba2Io",
  authDomain: "react-slack-c1254.firebaseapp.com",
  projectId: "react-slack-c1254",
  storageBucket: "react-slack-c1254.appspot.com",
  messagingSenderId: "542679660600",
  appId: "1:542679660600:web:9530edb9aff8d9dc5a8ecd",
  measurementId: "G-PGS8PEMC2P",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
