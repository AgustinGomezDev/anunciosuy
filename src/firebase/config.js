import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD99GewpFbeEVbRphWeBeLi4T4OPgJngMY",
  authDomain: "anunciosuy-eba5a.firebaseapp.com",
  projectId: "anunciosuy-eba5a",
  storageBucket: "anunciosuy-eba5a.appspot.com",
  messagingSenderId: "235450122965",
  appId: "1:235450122965:web:4eb8d63823b82aafa5d85c",
  measurementId: "G-X919DS19YG"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
