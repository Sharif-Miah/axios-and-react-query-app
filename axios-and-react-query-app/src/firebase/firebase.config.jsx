// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPuhB4QbUBkOlrOasCOdZFPnapE7ADnt8',
  authDomain: 'react-query-28f3e.firebaseapp.com',
  projectId: 'react-query-28f3e',
  storageBucket: 'react-query-28f3e.firebasestorage.app',
  messagingSenderId: '221447894404',
  appId: '1:221447894404:web:135d207e416b70b93599d1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
