import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDmWxJ8U0vm-AinAXZ-rXvH3-Vn_-k4Sak",
  authDomain: "polyaider.firebaseapp.com",
  projectId: "polyaider",
  storageBucket: "polyaider.appspot.com",
  messagingSenderId: "142895388850",
  appId: "1:142895388850:web:dd0b1488988ca23e6591ab",
  measurementId: "G-FQ90CY412Q",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
