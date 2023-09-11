import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCxywNuz5oUDsqvwzCYGFU7QoIHZUSxhAY",
  authDomain: "maoverde-31895.firebaseapp.com",
  projectId: "maoverde-31895",
  storageBucket: "maoverde-31895.appspot.com",
  messagingSenderId: "680127437902",
  appId: "1:680127437902:web:09626668f7b8e2bf00371f"
};

// Initialize Firebase
 export const firebase = initializeApp(firebaseConfig);
 export const auth = getAuth(firebase);