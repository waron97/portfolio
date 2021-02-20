import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVfpHbOL0H4q8Eyu1EjAL24Ojbo-oeKBs",
  authDomain: "winkler-portfolio.firebaseapp.com",
  projectId: "winkler-portfolio",
  storageBucket: "winkler-portfolio.appspot.com",
  messagingSenderId: "157102665206",
  appId: "1:157102665206:web:5625f8543a0eec3b166bd7",
  measurementId: "G-7MGXRW1SJN",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
