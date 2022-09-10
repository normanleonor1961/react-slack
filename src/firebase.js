import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKKubzjp6rlGfDMT0tw_lYbEyi-xcnmhU",
    authDomain: "react-slack-403ea.firebaseapp.com",
    projectId: "react-slack-403ea",
    storageBucket: "react-slack-403ea.appspot.com",
    messagingSenderId: "400074732951",
    appId: "1:400074732951:web:529897fdcfa6cd2e8bc0d2"
  };

  // Use this to initialize the firebase App
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth & provider
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }