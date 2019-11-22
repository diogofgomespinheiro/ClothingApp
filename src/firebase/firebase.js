import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjqXcIJhqEatJIRsyCOk3_zQRhyx01Spk",
  authDomain: "clothing-app-2de60.firebaseapp.com",
  databaseURL: "https://clothing-app-2de60.firebaseio.com",
  projectId: "clothing-app-2de60",
  storageBucket: "clothing-app-2de60.appspot.com",
  messagingSenderId: "819468978022",
  appId: "1:819468978022:web:e0df9d395c08f7811e6aa7",
  measurementId: "G-PBSD4NWZQQ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;