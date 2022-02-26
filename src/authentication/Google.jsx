import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axios from "axios";
import { NETWORK_URL } from "../links";
import { linkWithPopup } from "firebase/auth";
import {checkAuthTimeout} from '../user';

const Google = (props) => {
  const googleButtonStyle = {
    color: "#F5F5F5",
    backgroundColor: "#FF5252",
    "&:hover": {
      backgroundColor: "#FF5252",
    },
  };

  const linkphone = () => {
    const expirationDate = new Date(new Date().getTime() + 3600 *1000);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const user = firebase.auth().currentUser;
    linkWithPopup(user, googleProvider)
      .then((result) => {
        // Accounts successfully linked.
        // const credential = googleProvider.credentialFromResult(result);
        const new_user = result._tokenResponse;
        window.localStorage.setItem("idToken", new_user.idToken);
        window.localStorage.setItem('expiration',expirationDate);
        checkAuthTimeout()
        window.location.reload()
        // ...
      })
      .catch((error) => {
        console.log("email phone linking problem");
      });
  };

  const verifyEmailUser = (response) => {
    const expirationDate = new Date(new Date().getTime() + 3600 *1000);
    const user = firebase.auth().currentUser;
    user
      .getIdToken(/* forceRefresh */ true)
      .then((idToken) => {
        axios
          .post(`${NETWORK_URL}/auth/email`, {
            idToken: idToken,
            userData: response,
          })
          .then((response) => {
            window.localStorage.setItem("idToken",idToken);
            window.localStorage.setItem('expiration',expirationDate);
            checkAuthTimeout()
            if (response.data) {
              props.setIsNew(true);
            } else {
              props.setIsNew(false);
              window.location.reload();
              props.handleDialogClose();
            }
          });
      })

      .catch((error) => {
        alert("something went wrong");
      });
  };
  const authUser = () => {
    const app = firebase.initializeApp(props.firebaseKeys);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    app
      .auth()
      .signInWithPopup(googleProvider)
      .then((response) => {
        console.log(response);
        verifyEmailUser(response);
      })
      .catch((error) => {
        alert("something went wrong");
      });
  };

  const googleSignIn = () => {
    if (props.isNewPhone) {
      linkphone();
    } else {
      authUser();
    }
  };
  return (
    <Button onClick={googleSignIn} variant="contained" sx={googleButtonStyle}>
      <GoogleIcon />
      &nbsp;Login with Google
    </Button>
  );
};

export default Google;
