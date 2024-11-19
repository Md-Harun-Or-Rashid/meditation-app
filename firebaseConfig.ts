// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0TNxOg_KAfD5sT_YpuYJV-rS2pP-eoMI",
    authDomain: "meditation-app-bbb62.firebaseapp.com",
    projectId: "meditation-app-bbb62",
    storageBucket: "meditation-app-bbb62.firebasestorage.app",
    messagingSenderId: "564326902667",
    appId: "1:564326902667:web:3f91c222812db1171e9d8e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export the auth instance
export { auth };
