// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvdEd72V9BHYyUENVp-fYpmuH3buexz00",
  authDomain: "gym-trainer-f57af.firebaseapp.com",
  projectId: "gym-trainer-f57af",
  storageBucket: "gym-trainer-f57af.appspot.com",
  messagingSenderId: "866939023827",
  appId: "1:866939023827:web:1f81a6f8756e9d20f7bf26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;