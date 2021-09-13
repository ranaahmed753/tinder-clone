import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFG9iNWbUHGVfqiEseSJyV_xDxpv2IY8I",
    authDomain: "tinder-clone-cda94.firebaseapp.com",
    projectId: "tinder-clone-cda94",
    storageBucket: "tinder-clone-cda94.appspot.com",
    messagingSenderId: "518968641509",
    appId: "1:518968641509:web:56eff2d77b36505301910c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;