import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { NETWORK_URL } from "../links";
import firebase from "firebase/compat/app";
import "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  getAdditionalUserInfo,
  linkWithPopup
} from "firebase/auth";

import "firebase/compat/app";
import { checkAuthTimeout } from "../user";


const Google = (props) => {

  let margin = props.isNewPhone ? "2rem" : "auto"

  const googleButtonStyle = {
    color: "#F5F5F5",
    backgroundColor: "#FF5252",
    my:{margin},
    "&:hover": {
      backgroundColor: "#FF5252",
    },
  };

  

  const addUserInfo = () => {
    axios.post(`${NETWORK_URL}/auth/new_user`, {
      idToken: window.localStorage.getItem("idToken")
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log("something went wrong")
    })
  }


  
  const linkGoogleAccountToPhoneNumber = () => {
    console.log(" linking google account to phone number");
    // firebase.initializeApp(firebaseConfig)
    const auth = getAuth()
    const user = auth.currentUser
    const googleProvider = new GoogleAuthProvider()
    // const auth = getAuth()
    linkWithPopup(user,googleProvider)
    .then((result)=>{
      // console.log(result)
      addUserInfo()
      window.location.reload()
    })
    .catch((error)=>{
      // console.log(error)
    })
  }

  const signInWithGoogle = () => {
    console.log("sign in with google called");
    firebase.initializeApp(props.firebaseKeys);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()
    signInWithPopup(auth,googleProvider)
      .then((result) => {
        console.log("results came");
        // Checking if user is new or not
        const details = getAdditionalUserInfo(result)
        const status = details.isNewUser;
        // Getting idToken of user
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const idToken = credential.idToken;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        window.localStorage.setItem("idToken",idToken)
        window.localStorage.setItem("expiration",expirationDate);
        checkAuthTimeout(expirationDate);
        props.setIsNewGoogleUserState(status)
        if(!status){
          window.location.reload()
        } 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onGoogleButtonClick = () => {
    console.log("Google button click")
    if(props.isNewPhoneNumberUser){
      linkGoogleAccountToPhoneNumber();
    } else {
      signInWithGoogle()
    }
  }

    if(props.isNewPhoneNumberUser){
      props.disableClose()
    }

  return (
    <Button onClick={onGoogleButtonClick} variant="contained" sx={googleButtonStyle}>
      <GoogleIcon /> &nbsp; 
      {
        props.isNewPhoneNumberUser ? "Link Account To Contact Number" : "Login with Google"
      }
    </Button>
  );
};

export default Google;
