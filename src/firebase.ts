// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPsCO1sFxdqGKSASczdnoLZJR9YKiYSmw',
  authDomain: 'auth-rick-and-morty-5777a.firebaseapp.com',
  projectId: 'auth-rick-and-morty-5777a',
  storageBucket: 'auth-rick-and-morty-5777a.appspot.com',
  messagingSenderId: '916306661486',
  appId: '1:916306661486:web:d3eacb2e538796937ad67f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
