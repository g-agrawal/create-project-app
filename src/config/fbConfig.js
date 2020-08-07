import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCeDWfLGSK0nIlnPkDBqE3D7hsVg4ivUas",
    authDomain: "projectplan5.firebaseapp.com",
    databaseURL: "https://projectplan5.firebaseio.com",
    projectId: "projectplan5",
    storageBucket: "projectplan5.appspot.com",
    messagingSenderId: "747183898915",
    appId: "1:747183898915:web:bd913188b0f44230fdcc96",
    measurementId: "G-B0JD6DJ97Q"
  };        

  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;