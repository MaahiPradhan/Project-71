import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDSIm092SCsepM3eVBV7kYVEr4jtXIMTL8",
    authDomain: "projwect-71.firebaseapp.com",
    projectId: "projwect-71",
    storageBucket: "projwect-71.appspot.com",
    messagingSenderId: "112336946602",
    appId: "1:112336946602:web:7ae15173a9119d06e117d3"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

export default firebase.firestore();
