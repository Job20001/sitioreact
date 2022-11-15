// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD6im9rroRHjl1o8_vTsbTmbq3ibsjLJnc',
    authDomain: 'react23-7675e.firebaseapp.com',
    projectId: 'react23-7675e',
    storageBucket: "react23-7675e.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
