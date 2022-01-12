import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5pCb8vqwualJGuXpHqIcGRyyFOM1GGqA",
  authDomain: "projet-peintre.firebaseapp.com",
  projectId: "projet-peintre",
  storageBucket: "projet-peintre.appspot.com",
  messagingSenderId: "391977575187",
  appId: "1:391977575187:web:499a064b99707ccd5170e6",
  measurementId: "G-SX5YVMTR89"
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
export default storage;
