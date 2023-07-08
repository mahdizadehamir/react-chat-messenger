import React from "react";
import Navbar from "./Navbar";
// import auth from "./firebase";
//styles
import styles from "./Chats.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
const Chats = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const logoutHandler = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };
  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="154005ddd-5a25-4a53-b69f-74e7e95764ce"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
