const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAVNxI5GK0AERtBAzKZYgNZDoZ0RVvaIOc",
  authDomain: "confession-app-5fde4.firebaseapp.com",
  databaseURL: "https://confession-app-5fde4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confession-app-5fde4",
  storageBucket: "confession-app-5fde4.appspot.com",
  messagingSenderId: "347249653684",
  appId: "1:347249653684:web:293b7c9da3d6a8ecdaa4e1",
  measurementId: "G-BQ43XSFL6Y"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
module.exports = User;
