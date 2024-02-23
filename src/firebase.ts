// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const { VITE_API_KEY, VITE_MESSANGING_SENDER_ID, VITE_APP_ID } = import.meta
  .env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: 'auth-rick-and-morty-5777a.firebaseapp.com',
  projectId: 'auth-rick-and-morty-5777a',
  storageBucket: 'auth-rick-and-morty-5777a.appspot.com',
  messagingSenderId: VITE_MESSANGING_SENDER_ID,
  appId: VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
