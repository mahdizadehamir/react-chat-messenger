import React from "react";
//CSS
import styles from "./Login.module.css";
//Assets
import google from "../assets/google.svg";
//firebase
import "firebase/compat/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const handleSignIn = async () => {
    // Sign in using a redirect.
    const provider = new GoogleAuthProvider();
    // Start a sign in process for an unauthenticated user.
    // provider.addScope("profile");
    // provider.addScope("email");
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to NameBar!</h2>

        <div className={styles.button} onClick={handleSignIn}>
          <img src={google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
