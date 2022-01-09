import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axios from "axios";
import { NETWORK_URL } from "../links";
import { linkWithPopup } from "firebase/auth";

const Google = (props) => {
  const googleButtonStyle = {
    color: "#F5F5F5",
    backgroundColor: "#FF5252",
    "&:hover": {
      backgroundColor: "#FF5252",
    },
  };

  const linkphone = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const user = firebase.auth().currentUser;
    linkWithPopup(user, googleProvider)
      .then((result) => {
        // Accounts successfully linked.
        const credential = googleProvider.credentialFromResult(result);
        const new_user = result.user;
        console.log(new_user);
        window.localStorage.setItem("uid", user.uid);
        window.localStorage.setItem("name", user.displayName);
        window.localStorage.setItem("photoURL", user.photoURL);
        // ...
      })
      .catch((error) => {
        console.log("email phone linking problem");
      });
  };

  const verifyEmailUser = (response) => {
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
            console.log(response.data);
            window.localStorage.setItem("uid", user.uid);
            window.localStorage.setItem("name", user.displayName);
            window.localStorage.setItem("photoURL", user.photoURL);
            // console.log(user.uid)
            // window.location.reload();
            if (response.data) {
              props.setIsNew(true);
            } else {
              props.setIsNew(false);
              window.location.reload();
              props.handleDialogClose();
            }
          });
      })

      .catch(function (error) {
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
        // const idToken = window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token
        // console.log(idToken)
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
