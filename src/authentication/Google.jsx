import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import firebase from "firebase/compat/app";
import "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  getAdditionalUserInfo,
  linkWithPopup,
} from "firebase/auth";

import "firebase/compat/app";
import { checkAuthTimeout } from "../user";

const Google = (props) => {
  let margin = props.isNewPhone ? "2rem" : "auto";

  const googleButtonStyle = {
    color: "#F5F5F5",
    backgroundColor: "#FF5252",
    my: { margin },
    "&:hover": {
      backgroundColor: "#FF5252",
    },
  };

  // const createNewUser = () => {}

  // const linkGoogleAccountToPhoneNumber = () => {
  //   const auth = getAuth();
  //   const user = auth.currentUser;
  //   const googleProvider = new GoogleAuthProvider();
  //   linkWithPopup(user, googleProvider)
  //     .then((result) => {
  //       window.location.reload();
  //     })
  //     .catch((error) => {});
  // };

  // const getToken = () => {
  //   firebase
  //     .auth()
  //     .currentUser.getIdToken(/* forceRefresh */ true)
  //     .then((idToken) => {
  //       const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
  //       window.localStorage.setItem("idToken", idToken);
  //       window.localStorage.setItem("expiration", expirationDate);
  //       checkAuthTimeout(expirationDate);
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //     });
  // };

  // const signInWithGoogle = () => {
  //   console.log("sign in with google");
  //   firebase.initializeApp(props.firebaseKeys);
  //   const googleProvider = new GoogleAuthProvider();
  //   const auth = getAuth();
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       // Checking if user is new or not
  //       const details = getAdditionalUserInfo(result);
  //       const status = details.isNewUser;
  //       // console.log(status);
  //       // Getting idToken of user
  //       props.setIsNewGoogleUserState(status);
  //       if (!status){
  //         getToken();
  //       }
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //     });
  // };

  // const onGoogleButtonClick = () => {
  //   if (props.isNewPhoneNumberUser) {
  //     linkGoogleAccountToPhoneNumber();
  //   } else {
  //     signInWithGoogle();
  //   }
  // };

  // if (props.isNewPhoneNumberUser) {
  //   props.disableClose();
  // }

  const loginUserWithGoogle = () => {
    firebase.initializeApp(props.firebaseKeys);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        // console.log(result._tokenResponse.idToken);
        const details = getAdditionalUserInfo(result);
        const idToken = result._tokenResponse.idToken;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        window.localStorage.setItem("idToken", idToken);
        window.localStorage.setItem("expiration", expirationDate);
        checkAuthTimeout(expirationDate);
        window.location.reload();
        // console.log(details.profile.name);
        // saveInfo();
        // getToken();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <Button
    //   onClick={onGoogleButtonClick}
    //   variant="contained"
    //   sx={googleButtonStyle}
    // >
    //   <GoogleIcon /> &nbsp;
    //   {props.isNewPhoneNumberUser
    //     ? "Link Account To Contact Number"
    //     : "Login with Google"}
    // </Button>
    <Button sx={googleButtonStyle} onClick={loginUserWithGoogle}>
      <GoogleIcon /> &nbsp; Login with Google
    </Button>
  );
};

export default Google;
