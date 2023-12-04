import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyD0mC6S3iKhl0hbP_pnS7i2yPjcMsMeB04",
    authDomain: "linkedin-5994f.firebaseapp.com",
    projectId: "linkedin-5994f",
    storageBucket: "linkedin-5994f.appspot.com",
    messagingSenderId: "357325790605",
    appId: "1:357325790605:web:1dad781d31ab94194fb1c4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};



