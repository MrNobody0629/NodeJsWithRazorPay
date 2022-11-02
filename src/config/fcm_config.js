// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4oTsz4Rs7skVGy5MhVt_q1NyS1fOXjGQ",
  authDomain: "nodewithfirebase-db52c.firebaseapp.com",
  projectId: "nodewithfirebase-db52c",
  storageBucket: "nodewithfirebase-db52c.appspot.com",
  messagingSenderId: "106839319654",
  appId: "1:106839319654:web:870ca17e93eaae54c539a7",
  measurementId: "G-HSTP3HHVX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);