// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBO7l3khcx3cXw8bNs1vg7ab4uusmgzcq4",
  authDomain: "atomic-notes-993d8.firebaseapp.com",
  projectId: "atomic-notes-993d8",
  storageBucket: "atomic-notes-993d8.appspot.com",
  messagingSenderId: "481828827512",
  appId: "1:481828827512:web:55b2794f228da17728988d",
  measurementId: "G-Q8E904NZ9P",
  databaseURL:
    "https://atomic-notes-993d8-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const database = getDatabase(app);
export default app;
