// // import firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const config = initializeApp({
//   apiKey: "AIzaSyCyLwjYAwfM9ge17EYOWSVR4zhQmVSJS2g",
//   authDomain: "crwn-db-7bde8.firebaseapp.com",
//   projectId: "crwn-db-7bde8",
//   storageBucket: "crwn-db-7bde8.appspot.com",
//   messagingSenderId: "93889590174",
//   appId: "1:93889590174:web:dc58851bd2cd9c61be9c8f",
//   measurementId: "G-9TQJK4S6R2",
// });

// // firebase.initializeApp(config);

// export const auth = getAuth(config);
// export const firestore = getFirestore(config);

// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () =>
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // ...
//       console.log(user);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });

// // export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCyLwjYAwfM9ge17EYOWSVR4zhQmVSJS2g",
  authDomain: "crwn-db-7bde8.firebaseapp.com",
  projectId: "crwn-db-7bde8",
  storageBucket: "crwn-db-7bde8.appspot.com",
  messagingSenderId: "93889590174",
  appId: "1:93889590174:web:dc58851bd2cd9c61be9c8f",
  measurementId: "G-9TQJK4S6R2",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log("reference", userRef);
  const snapShot = await userRef.get();

  // console.log("snapshot", snapShot);

  // const collectionRef = firestore.collection(`users`);
  // console.log("collectionRef", collectionRef);
  // const collectionRefsnapShot = await collectionRef.get();

  // console.log("collectionRefsnapShot", collectionRefsnapShot.docs[0].data());

  if (!snapShot.exists) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        uid,
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }

  return userRef;
};

//create  collection/document
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    console.log(obj);
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//my code
export const addDocuments = async (uid, objectsToAdd) => {
  const userRef = firestore.doc(`todo/${uid}`);
  console.log("reference", userRef);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // const { todo } = objectsToAdd;
    const createdAt = new Date();

    try {
      await userRef.set({
        uid,
        createdAt,
        todo: [],
      });
    } catch (err) {
      console.log("error creating the todo", err.message);
    }
  }

  return userRef;
};
export const updateDocuments = async (uid, objectsToAdd) => {
  const userRef = firestore.doc(`todo/${uid}`);
  console.log("reference", userRef);
  const snapShot = await userRef.get();

  if (snapShot.exists) {
    try {
      await userRef.set({
        todo: objectsToAdd,
      });
    } catch (err) {
      console.log("error creating the todo", err.message);
    }
  }

  return userRef;
};

//this is to conver the received reference object in to actual data we want
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformaedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  //convert the shop data array to an object
  return transformaedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;

    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
