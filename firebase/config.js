// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import * as firebase from 'firebase/app';
import {initializeApp} from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7tLbFWjK1q0KjyFs0EUqP6vxpkzRUpsc',
  authDomain: 'fir-auth-5ee06.firebaseapp.com',
  projectId: 'fir-auth-5ee06',
  storageBucket: 'fir-auth-5ee06.appspot.com',
  messagingSenderId: '408670589389',
  appId: '1:408670589389:web:0af432f7b26d1e3a22b484',
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
// // const app = initializeApp(firebaseConfig);

// const auth = firebase.auth();
// export {auth};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getDatabase(app);
//const analytics = getAnalytics(app);
export {auth};
