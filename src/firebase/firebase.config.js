// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhYI17iqddkaGJEFEXhvtGgdVJzhg_Fow",
  authDomain: "dragon-news-code2.firebaseapp.com",
  projectId: "dragon-news-code2",
  storageBucket: "dragon-news-code2.firebasestorage.app",
  messagingSenderId: "873946134011",
  appId: "1:873946134011:web:770d646eb8cf729746475e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;