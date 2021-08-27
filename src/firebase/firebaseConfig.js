import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyBajJeQJAerkakJ65hke-ONpt2mgaPA6sU",
//     authDomain: "testing-cf358.firebaseapp.com",
//     projectId: "testing-cf358",
//     storageBucket: "testing-cf358.appspot.com",
//     messagingSenderId: "925665831151",
//     appId: "1:925665831151:web:77b8d6ab8df541c3c6131a"
//   };

// if(process.env.NODE_ENV === 'test') {
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
//     firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
