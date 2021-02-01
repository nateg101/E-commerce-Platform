import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDh5HuA1-xdhgMhH48hX_3ibDyD-DtYpSA",
    authDomain: "e-commerce-3090b.firebaseapp.com",
    projectId: "e-commerce-3090b",
    storageBucket: "e-commerce-3090b.appspot.com",
    messagingSenderId: "892997671341",
    appId: "1:892997671341:web:512392fb1085dacae6e924",
    measurementId: "G-EJP7XHLCY8"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

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
            console.log('error creating user', error.message)
        }
    }

    return userRef;

  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionkey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocref = collectionRef.doc();
      batch.set(newDocref, obj);
    });

    return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(
      doc => {
        const { title, items } = doc.data()

        return {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title,
          items
        }
      })

      return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      }, {})
  }
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;