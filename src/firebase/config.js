// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'contain-r.firebaseapp.com',
  projectId: 'contain-r',
  storageBucket: 'contain-r.appspot.com',
  messagingSenderId: '612076694943',
  appId: '1:612076694943:web:24e58e1e45004a729de1aa',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
