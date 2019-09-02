import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA1ODavSzlnHAq2BEN8Sy0EGQiENhIiS2U",
    authDomain: "crwn-db-b3bfb.firebaseapp.com",
    databaseURL: "https://crwn-db-b3bfb.firebaseio.com",
    projectId: "crwn-db-b3bfb",
    storageBucket: "",
    messagingSenderId: "54000599937",
    appId: "1:54000599937:web:ce2871ccd2d17bf3"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;