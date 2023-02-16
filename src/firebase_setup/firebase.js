// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getAuth, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCCmIW82Tz_FAz38dNgB56kCJsfPlgSVQ",
  authDomain: "myreactwebsite-f17f5.firebaseapp.com",
  projectId: "myreactwebsite-f17f5",
  storageBucket: "myreactwebsite-f17f5.appspot.com",
  messagingSenderId: "701592227540",
  appId: "1:701592227540:web:a06dc673099ffa64f27541",
  measurementId: "G-40D3Z6N2XW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
export const auth = getAuth(app);
export const user = auth.currentUser;
export const logout = () => {
  signOut(auth);
};
export const db = getFirestore(app);

