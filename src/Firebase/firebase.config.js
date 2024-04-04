// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCME2zELt4JVG-EKLpDvzBimwt19oEzM2k",
  authDomain: "auth-integration-private-4eeec.firebaseapp.com",
  projectId: "auth-integration-private-4eeec",
  storageBucket: "auth-integration-private-4eeec.appspot.com",
  messagingSenderId: "777286447586",
  appId: "1:777286447586:web:0febd0914b3a0321fa49bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;