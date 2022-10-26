import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTxphLaiWE5-doycxYnejf7JMbv2bVuI0",
    authDomain: "audiophile-store-7d6c7.firebaseapp.com",
    projectId: "audiophile-store-7d6c7",
    storageBucket: "audiophile-store-7d6c7.appspot.com",
    messagingSenderId: "377931243409",
    appId: "1:377931243409:web:d125f1ea6b7f9fafb14430",
    measurementId: "G-ZWVS8ERZ7H"
};

const app = initializeApp (firebaseConfig);
export const db = getFirestore(app);