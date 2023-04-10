// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig ={
  apiKey: "AIzaSyCBQxp6OeX7MVkbesiVRbTTrQhU19PbTNU",
  authDomain: "clone-4349e.firebaseapp.com",
  projectId: "clone-4349e",
  storageBucket: "clone-4349e.appspot.com",
  messagingSenderId: "875808337832",
  appId: "1:875808337832:web:7df5ca022dccff2936779d",
  measurementId: "G-8JLV040BZH"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };