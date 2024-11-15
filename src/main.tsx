import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBiDweKSqsg4tT88qvPWb3LjLWbbXJOk10",

  authDomain: "duris-lifetime.firebaseapp.com",

  projectId: "duris-lifetime",

  storageBucket: "duris-lifetime.firebasestorage.app",

  messagingSenderId: "358712493677",

  appId: "1:358712493677:web:d35c22bb3da0765c61e164",

  measurementId: "G-W78SW990VS"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
