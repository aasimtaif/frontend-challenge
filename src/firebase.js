// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "e-commerce-d0d54.firebaseapp.com",
  projectId: "e-commerce-d0d54",
  storageBucket: "e-commerce-d0d54.appspot.com",
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_measurementId,
 darabaseURL: import.meta.env.VITE_DATA_BASE_URL
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);