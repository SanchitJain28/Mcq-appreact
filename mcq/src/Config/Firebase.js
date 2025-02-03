// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkthvFbX70WNKCVMucUtXmWQMe7tC1BvI",
  authDomain: "reactiqtest.firebaseapp.com",
  projectId: "reactiqtest",
  storageBucket: "reactiqtest.appspot.com",
  messagingSenderId: "167668876772",
  appId: "1:167668876772:web:c2f6cbcc6ea9d727b3b3f1",
  measurementId: "G-KFSCVZD9HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth =getAuth(app)
const analytics = getAnalytics(app);
export const gooogleProvider=new GoogleAuthProvider();
export const db=getFirestore(app)