// import { getAuth } from "f/irebase/auth/cordova";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBtFEEHDkleO_d05TY56ZiYWK0IQjCOZiE",
  authDomain: "jp-software-7e7e1.firebaseapp.com",
  projectId: "jp-software-7e7e1",
  storageBucket: "jp-software-7e7e1.appspot.com",
  messagingSenderId: "203138744802",
  appId: "1:203138744802:web:382ecbe537cdbc212db9bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
export {auth,database}