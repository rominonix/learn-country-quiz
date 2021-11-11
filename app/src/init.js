import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ref, getDatabase, set, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCANptAfnhW2PA5QIJ-MZWfRElgppT0cRU",
    authDomain: "country-quiz-arn.firebaseapp.com",
    databaseURL:
      "https://country-quiz-arn-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "country-quiz-arn",
    storageBucket: "country-quiz-arn.appspot.com",
    messagingSenderId: "376486672663",
    appId: "1:376486672663:web:e91559dfb24c111d36df52",
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export  const analytics = getAnalytics(app);
export  const db = getDatabase(app); 