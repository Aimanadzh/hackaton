import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyByi6zS43wMk4VVRpIKmffgvHsfei0to6I",
    authDomain: "swarovski-hackathon.firebaseapp.com",
    projectId: "swarovski-hackathon",
    storageBucket: "swarovski-hackathon.appspot.com",
    messagingSenderId: "703832494790",
    appId: "1:703832494790:web:5d07e7c25755b0078efdc7",
    measurementId: "G-Y6ZQW5XLHG"
});

export default app;