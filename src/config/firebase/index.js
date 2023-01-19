// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO7l3khcx3cXw8bNs1vg7ab4uusmgzcq4",
  authDomain: "atomic-notes-993d8.firebaseapp.com",
  projectId: "atomic-notes-993d8",
  storageBucket: "atomic-notes-993d8.appspot.com",
  messagingSenderId: "481828827512",
  appId: "1:481828827512:web:55b2794f228da17728988d",
  measurementId: "G-Q8E904NZ9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
