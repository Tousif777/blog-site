import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFFJ_x5bdwOcS4cSmd4ItMKTzvc1bGcf0",
    authDomain: "blog-site-1ea18.firebaseapp.com",
    projectId: "blog-site-1ea18",
    storageBucket: "blog-site-1ea18.appspot.com",
    messagingSenderId: "101167675970",
    appId: "1:101167675970:web:5dba648971c8b3ae128bdb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export {db};
export {storage}