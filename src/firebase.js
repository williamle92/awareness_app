// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAv6__71Q8cjrKjBrFOBV3b_FsLXufxmyg",
    authDomain: "awareness-app-d3135.firebaseapp.com",
    projectId: "awareness-app-d3135",
    storageBucket: "awareness-app-d3135.appspot.com",
    messagingSenderId: "198441776201",
    appId: "1:198441776201:web:f75fed0202f646585f7b98",
    measurementId: "G-M4MRMX5FN9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
