import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAM-Yr_Qqjox8v2S3fgkbEOPHoD9v553Pk",
    authDomain: "pushnpull-a.firebaseapp.com",
    databaseURL: "https://pushnpull-a.firebaseio.com",
    projectId: "pushnpull-a",
    storageBucket: "pushnpull-a.appspot.com",
    messagingSenderId: "164356081367"
  };
  firebase.initializeApp(config);

  export const Auth = firebase.auth();
  export const db = firebase.database();