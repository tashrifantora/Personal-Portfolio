// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8dJxauZ-SJbJ0gE49-01aJ0XI1BnDfc0",
  authDomain: "portfolio-d79bc.firebaseapp.com",
  projectId: "portfolio-d79bc",
  storageBucket: "portfolio-d79bc.appspot.com",
  messagingSenderId: "1082222549589",
  appId: "1:1082222549589:web:c0085d41fbb4a0c31c12dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app