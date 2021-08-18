import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTvkWYf108WanoTLeUZ3I-aKhx1gbSm8A",
    authDomain: "react-app-fef81.firebaseapp.com",
    projectId: "react-app-fef81",
    storageBucket: "react-app-fef81.appspot.com",
    messagingSenderId: "735704136728",
    appId: "1:735704136728:web:351e20827b65f247d3576d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
