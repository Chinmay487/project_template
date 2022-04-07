import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
// import axios from "axios";
// import { NETWORK_URL } from "../links";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  linkWithPhoneNumber,
  getAdditionalUserInfo,
} from "firebase/auth";
import { checkAuthTimeout } from "../user";

const Phone = (props) => {
  const [otpSent, setOtpSent] = useState(false);

  const [correctNumber, setCorrectNumber] = useState(false);

  const [mobileNumberForm, setMobileNumberForm] = useState({
    otp: 0,
    mobileNumber: "",
  });

  const [buttonProgressStatus, setButtonProgressState] = useState(false);

  const onOtpFormChange = (event) => {
    const { name, value } = event.target;
    setMobileNumberForm((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };


  const configureCaptcha = () => {
    firebase.initializeApp(props.firebaseKeys);
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          if (props.isNewGoogleUser) {
            linkPhoneNumberToGoogleAccount();
          } else {
            onPhoneNumberSubmit();
          }
        },
      },
      auth
    );
  };

  const linkPhoneNumberToGoogleAccount = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    configureCaptcha();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+91" + mobileNumberForm.mobileNumber;
    linkWithPhoneNumber(user, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("OTP has been sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // console.log("something went wrong");
        // ...
      });
  };

  const onPhoneNumberSubmit = () => {
    const phoneNumber = "+91" + mobileNumberForm.mobileNumber;
    configureCaptcha();
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("OTP SENT");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  const loginSuccess = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then((idToken) => {
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      window.localStorage.setItem("idToken", idToken);
      window.localStorage.setItem("expiration", expirationDate);
      checkAuthTimeout(expirationDate);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const onOtpSubmit = (event) => {
    event.preventDefault();
    props.disableClose();
    setButtonProgressState(true);
    const code = mobileNumberForm.otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const details = getAdditionalUserInfo(result);
        const status = details.isNewUser;
        props.setIsNewPhoneNumberUserState(status);
        if (!status) { 
          loginSuccess();
          // const idToken = result._tokenResponse.idToken;
          // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
          // window.localStorage.setItem("idToken", idToken);
          // window.localStorage.setItem("expiration", expirationDate);
          // window.location.reload()
          // checkAuthTimeout(expirationDate);
        }

      })
      .catch((error) => {
        alert("Wrong OTP")
        setButtonProgressState(false)
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  const onSendOptClick = () => {
    const mobileNumber = "+91" + mobileNumberForm.mobileNumber;
    // const auth = getAuth();
    const mobileNumberPattern =
      /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/im;
    if (mobileNumberPattern.test(mobileNumber)) {
      if (props.isNewGoogleUser) {
        linkPhoneNumberToGoogleAccount();
      } else {
        onPhoneNumberSubmit();
      }
      setOtpSent(true);
    } else {
      setCorrectNumber(true);
      setOtpSent(false);
    }
  };

  if (props.isNewGoogleUser) {
    props.disableClose();
  }

  return (
    <>
      <Box id="sign-in-button" />
      <Box
        component="form"
        onSubmit={onOtpSubmit}
        sx={{
          width: "100%",
          padding: {
            sm: "1%",
            xs: "1%",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: "1rem",
        }}
      >
        {!props.isNewGoogleUser ? (
          <>
            <Typography sx={{ my: "1rem" }}>OR</Typography>
            <Typography
              variant="h6"
              sx={{
                mb: "1rem",
                textAlign: "center",
                mx: { sm: "1%", xs: "3%" },
              }}
            >
              Join us with mobile number and OTP
            </Typography>
          </>
        ) : (
          <Typography
            variant="h6"
            sx={{
              mb: "1rem",
              textAlign: "center",
              mx: { sm: "1%", xs: "3%" },
            }}
          >
            Please Enter your mobile number
          </Typography>
        )}
        {correctNumber ? (
          <Typography variant="p" color="error" gutterBottom>
            PLEASE ENTER VALID PHONE NUMBER
          </Typography>
        ) : null}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            label="Contact Number"
            placeholder="9876543210"
            name="mobileNumber"
            value={mobileNumberForm.mobileNumber}
            onChange={onOtpFormChange}
            required={true}
          />
        </Box>
        {otpSent ? (
          <TextField
            sx={{ my: "0.5rem" }}
            variant="outlined"
            label="OTP"
            name="otp"
            required={true}
            value={mobileNumberForm.otp}
            onChange={onOtpFormChange}
          />
        ) : null}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {buttonProgressStatus ? (
            <CircularProgress />
          ) : (
            <>
              <Button
                onClick={onSendOptClick}
                sx={{ my: "1rem", mx: "1rem" }}
                variant="contained"
              >
                {otpSent ? "Resend OTP" : "Send OTP"}
              </Button>
              {otpSent ? (
                <Button
                  type="submit"
                  sx={{ my: "1rem", mx: "1rem" }}
                  variant="contained"
                >
                  Submit OTP
                </Button>
              ) : null}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Phone;
