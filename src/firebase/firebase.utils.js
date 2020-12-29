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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;