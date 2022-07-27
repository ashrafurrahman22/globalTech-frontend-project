// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN3HYnGwYCWEE5bT8_XuZzT4iTKunfbS4",
  authDomain: "global-tech-project.firebaseapp.com",
  projectId: "global-tech-project",
  storageBucket: "global-tech-project.appspot.com",
  messagingSenderId: "80836618731",
  appId: "1:80836618731:web:cbeb87c71c1739e61c51ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;