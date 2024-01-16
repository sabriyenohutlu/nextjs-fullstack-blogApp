// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBSlHBwR3L5Dd9KC_FCjBgcbSmz6BYN-SQ",
//   authDomain: "blogapp-e1e9e.firebaseapp.com",
//   projectId: "blogapp-e1e9e",
//   storageBucket: "blogapp-e1e9e.appspot.com",
//   messagingSenderId: "801268371270",
//   appId: "1:801268371270:web:442e4ffb5d08bbec4e9f47",
//   measurementId: "G-K7ERZYM9N8"
// };

// //firebase.initializeApp(firebaseConfig); app

// const app = initializeApp(firebaseConfig);
// export const db=getFirestore() //firebase.firestore

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUaL7FwXB5fFGs1WX0xUHm3CUcYQipfpc",
  authDomain: "podcast-b5b29.firebaseapp.com",
  projectId: "podcast-b5b29",
  storageBucket: "podcast-b5b29.appspot.com",
  messagingSenderId: "375135968437",
  appId: "1:375135968437:web:bdfced59826bbfed41f2fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);