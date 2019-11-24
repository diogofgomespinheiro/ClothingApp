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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error creationg user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;