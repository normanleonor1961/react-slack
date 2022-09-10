import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSy0R2fYzvf4pTQ43MNUjl998u3g-U5F8",
    authDomain: "react-slack-968ce.firebaseapp.com",
    projectId: "react-slack-968ce",
    storageBucket: "react-slack-968ce.appspot.com",
    messagingSenderId: "617671588231",
    appId: "1:617671588231:web:753e1b60530f8aa3033b22"
  };

  // Use this to initialize the firebase App
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth & provider
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }