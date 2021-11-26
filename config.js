import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyChkC6N7R3n3_JhiXnKAk75Rrlki4oHbiU",
  authDomain: "project-30ccb.firebaseapp.com",
  projectId: "project-30ccb",
  storageBucket: "project-30ccb.appspot.com",
  messagingSenderId: "4152453216",
  appId: "1:4152453216:web:f1db86a6cdfeb3ad5ffb05"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

