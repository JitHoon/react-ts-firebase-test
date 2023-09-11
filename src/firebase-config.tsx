import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXIwvd9be15vSnvd20ueJATT_JVMeeXSc",
  authDomain: "techschool-wiki.firebaseapp.com",
  projectId: "techschool-wiki",
  storageBucket: "techschool-wiki.appspot.com",
  messagingSenderId: "979662569232",
  appId: "1:979662569232:web:13c25ea2c3eaf928242f95",
  measurementId: "G-6YSVH86LFH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

/*
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTED_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_Id,
  appId: process.env.REACT_APP_APP_Id,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
*/
