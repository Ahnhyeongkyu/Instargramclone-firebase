import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// here i want to import the seed file

// import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyBXf9UpBLC5L53KVChfgtRysR0pcej8SEQ",
    authDomain: "instagram-yt-33a36.firebaseapp.com",
    projectId: "instagram-yt-33a36",
    storageBucket: "instagram-yt-33a36.appspot.com",
    messagingSenderId: "255644920997",
    appId: "1:255644920997:web:a7f369ae17b93a46acf14c",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);



export { firebase, FieldValue };
