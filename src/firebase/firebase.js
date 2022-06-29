import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyCBy113COseUuPy-NJQAGLd_eL1wlJ_Ico",

  authDomain: "payment-rpa.firebaseapp.com",

  projectId: "payment-rpa",

  storageBucket: "payment-rpa.appspot.com",

  messagingSenderId: "4050551087",

  appId: "1:4050551087:web:1613fea9cadcbaa474a1da"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;