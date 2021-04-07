import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userReference = database.doc(`users/${userAuth.uid}`);
  const snapshot = await userReference.get();
  console.log(snapshot.exists);
  console.log(snapshot.id); // id of the authenticated user

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(displayName);
    console.log(email);
    console.log(createdAt);
  }
}

firebase.initializeApp({
  apiKey: "AIzaSyCmaX7SufViYW6PBbw0O_Me3xTiKVj_ECk",
  authDomain: "crwn-db-4d2eb.firebaseapp.com",
  projectId: "crwn-db-4d2eb",
  storageBucket: "crwn-db-4d2eb.appspot.com",
  messagingSenderId: "528743558196",
  appId: "1:528743558196:web:4703305c2705fd78daae61",
  measurementId: "G-XH0M5Z3E32"
});

export const auth = firebase.auth();
export const database = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
