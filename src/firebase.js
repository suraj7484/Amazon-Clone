import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMz0RH1pKQDO4yUzQFzrMkty_nW32CRbQ",
    authDomain: "clone-ba82b.firebaseapp.com",
    databaseURL: "https://clone-ba82b.firebaseio.com",
    projectId: "clone-ba82b",
    storageBucket: "clone-ba82b.appspot.com",
    messagingSenderId: "523856295097",
    appId: "1:523856295097:web:215422cbda928422431768",
    measurementId: "G-WSE6ZJ6Y4F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth()

  export {db , auth};