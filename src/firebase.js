import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfRJ7iVZ-xH_1sCGGWEZoWwziES17D1JQ",
    authDomain: "slack-clone-5c838.firebaseapp.com",
    projectId: "slack-clone-5c838",
    storageBucket: "slack-clone-5c838.appspot.com",
    messagingSenderId: "529947455483",
    appId: "1:529947455483:web:078d0efb47660ac6cbe55e",
    measurementId: "G-DD8M781C0E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  {auth, provider};
export default db;