import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD8K_M3njjWbr1anxD0W8uYJbe-FxPX2xk",
  authDomain: "gadgetory-4734c.firebaseapp.com",
  projectId: "gadgetory-4734c",
  storageBucket: "gadgetory-4734c.appspot.com",
  messagingSenderId: "694949578630",
  appId: "1:694949578630:web:a02e37ee682399b0b78e07",
  measurementId: "G-K85G81J4VV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
