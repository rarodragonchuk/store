import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAYFj4fq96Et42mO3N1JgwY1uqrpW6UPO0",
  authDomain: "store-e15b6.firebaseapp.com",
  databaseURL: "https://store-e15b6.firebaseio.com",
  projectId: "store-e15b6",
  storageBucket: "store-e15b6.appspot.com",
  messagingSenderId: "901742002605",
  appId: "1:901742002605:web:8e254f8359254301386124",
  measurementId: "G-DQ3096X71D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
