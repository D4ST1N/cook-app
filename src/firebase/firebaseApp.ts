import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB9Uo-zcXhfswDtq4COL8HWV4d1cSSo3WM",
  authDomain: "cook-app-166ad.firebaseapp.com",
  projectId: "cook-app-166ad",
  storageBucket: "cook-app-166ad.appspot.com",
  messagingSenderId: "313583587663",
  appId: "1:313583587663:web:fcd4d398f9b65f549af53a",
  measurementId: "G-TQN1NL9PJJ"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
