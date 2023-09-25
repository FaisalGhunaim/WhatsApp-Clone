import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAGzdVNKsTtJZMFmcR65PkPjivdU5XAf7c",
  authDomain: "whats-app-clone-ecf4b.firebaseapp.com",
  projectId: "whats-app-clone-ecf4b",
  storageBucket: "whats-app-clone-ecf4b.appspot.com",
  messagingSenderId: "335426106818",
  appId: "1:335426106818:web:5037ef1f5539816fae925b",
  measurementId: "G-DK3T1V8FW6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
