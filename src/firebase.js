import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgryJWUZrALHvcU8Hb6bZnCdtKYlCuMlw",
  authDomain: "disney-plus-clone-reactjs.firebaseapp.com",
  projectId: "disney-plus-clone-reactjs",
  storageBucket: "disney-plus-clone-reactjs.appspot.com",
  messagingSenderId: "518138186495",
  appId: "1:518138186495:web:9466861f56d6037e269aca",
  measurementId: "G-49GX5LQJNJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
