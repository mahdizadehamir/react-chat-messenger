import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvOdGsEoOZb2FRrzicnlvN4s8JfM9jlQU",
  authDomain: "namebar-6a29f.firebaseapp.com",
  projectId: "namebar-6a29f",
  storageBucket: "namebar-6a29f.appspot.com",
  messagingSenderId: "16754779154",
  appId: "1:16754779154:web:9d0173b882115daf8764cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export { firebaseConfig };
export default app;
