import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
// import auth from "./firebase";
//styles
import styles from "./Chats.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
//context
import { AuthContext } from "../Context/AuthContextProvider";
import axios from "axios";
const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const logoutHandler = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    axios
      .get("https://api.chatEngine.io/users/me", {
        headers: {
          "project-id": "54005ddd-5a25-4a53-b69f-74e7e95764ce",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => setLoading(false))
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "PRIVATE-KEY": "4f087207-a3e1-4034-bc8f-308cee331a9a",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigate]);

  const getFile = async (url) => {
    const data = await fetch(url);
    const response = await data.blob();
    const avatar = new File([response], "avatar.jpg", { type: "image/jpeg" });
    return avatar;
  };
  if (!user || loading) return <h1>loading...</h1>;
  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="54005ddd-5a25-4a53-b69f-74e7e95764ce"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
