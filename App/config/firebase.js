// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { firebase } from '@react-native-firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr-AQiUepAUAM2DjT6M8Y_ZWUp4iLsGa4",
  authDomain: "stats-app-303da.firebaseapp.com",
  projectId: "stats-app-303da",
  storageBucket: "stats-app-303da.appspot.com",
  messagingSenderId: "373699419833",
  appId: "1:373699419833:web:e3b7c3cc7725ac49a2c568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
