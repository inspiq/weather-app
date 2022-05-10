import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDfUwuzY5poPHiEAUiWThOrbG89CYDckhw",
  authDomain: "weatherapp-7c9e7.firebaseapp.com",
  projectId: "weatherapp-7c9e7",
  storageBucket: "weatherapp-7c9e7.appspot.com",
  messagingSenderId: "685057548828",
  appId: "1:685057548828:web:48b68d40f1d8f4a278b5d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()