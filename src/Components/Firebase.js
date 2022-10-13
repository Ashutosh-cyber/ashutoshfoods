// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc7pbPnXQLIEaKry4XmgfOe88oHQdGIYI",
  authDomain: "ashutoshfoods-8cd3f.firebaseapp.com",
  projectId: "ashutoshfoods-8cd3f",
  storageBucket: "ashutoshfoods-8cd3f.appspot.com",
  messagingSenderId: "376803581066",
  appId: "1:376803581066:web:c7fc4d4419ef5f6d2d2173",
  measurementId: "G-N5XYD0JWE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
