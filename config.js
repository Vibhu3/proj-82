import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyC6Fv_AK2B7kz4x9WwIwhoyJlwluPLg50U",
    authDomain: "barter-72b64.firebaseapp.com",
    projectId: "barter-72b64",
    storageBucket: "barter-72b64.appspot.com",
    messagingSenderId: "548932356456",
    appId: "1:548932356456:web:7d4b730f5f16bfc4702edd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.database()