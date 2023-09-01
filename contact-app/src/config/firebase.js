

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpNNYmPr3VrRvoeC80-2LXh3jOltVXHTw",
  authDomain: "vyla-catact.firebaseapp.com",
  projectId: "vyla-catact",
  storageBucket: "vyla-catact.appspot.com",
  messagingSenderId: "885060317924",
  appId: "1:885060317924:web:32f2c05e14daada9d4f2f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const de = getFirestore(app);