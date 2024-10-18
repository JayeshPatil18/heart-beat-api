const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAKIGyAVnVDDY6HSCnKpP-xOVG4rOqnrfA",
  authDomain: "kakshak-ccezkm.firebaseapp.com",
  projectId: "kakshak-ccezkm",
  storageBucket: "kakshak-ccezkm.appspot.com",
  messagingSenderId: "477151675027",
  appId: "1:477151675027:web:e97b8de0eaacb684b5c366"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
module.exports = User;
