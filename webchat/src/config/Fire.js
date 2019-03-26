import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAt9BS11sPuMkhzvdpArog1KkY1lHWDbec",
    authDomain: "webchat-84556.firebaseapp.com",
    databaseURL: "https://webchat-84556.firebaseio.com",
    projectId: "webchat-84556",
    storageBucket: "webchat-84556.appspot.com",
    messagingSenderId: "24750854157"
  };
  const fire = firebase.initializeApp(config);
  export default fire;