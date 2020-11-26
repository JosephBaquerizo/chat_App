import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBuSPFcZ0_F6iZ7JRT8_kh7GQePSKXWv7w",
    authDomain: "chat-b4e4a.firebaseapp.com",
    databaseURL: "https://chat-b4e4a.firebaseio.com",
    projectId: "chat-b4e4a",
    storageBucket: "chat-b4e4a.appspot.com",
    messagingSenderId: "371661622016",
    appId: "1:371661622016:web:c6723a993ffa7c888e41e5"
  };

  export default firebase.initializeApp(firebaseConfig);