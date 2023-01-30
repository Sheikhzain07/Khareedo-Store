import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwgou7vSS3u7D1XsGHJRQvilrgBJicriE",
  authDomain: "khareedo-store.firebaseapp.com",
  projectId: "khareedo-store",
  storageBucket: "khareedo-store.appspot.com",
  messagingSenderId: "281726974233",
  appId: "1:281726974233:web:df703a7892bf5d4cff6d88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
