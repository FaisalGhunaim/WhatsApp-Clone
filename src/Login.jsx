import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="data:image/png;base64,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" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
};

export default Login;
