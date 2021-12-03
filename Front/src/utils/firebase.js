import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgdxBzpudKAWTEE9-zka7vMs6rsofeQ-E",
  authDomain: "camillepaul-8656d.firebaseapp.com",
  projectId: "camillepaul-8656d",
  storageBucket: "camillepaul-8656d.appspot.com",
  messagingSenderId: "1036128713901",
  appId: "1:1036128713901:web:a5260054c19fc7bc685a24"
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
export default storage;
