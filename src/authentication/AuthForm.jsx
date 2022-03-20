import React, { useState, useCallback, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
  Box,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "firebase/compat/auth";
import { getFirebaseKeys } from "../user";
import Google from "./Google";
import Phone from "./Phone";

const AuthForm = (props) => {
  const [progressStatus, setProgressStatus] = useState(false);
  const [closeButtonState, setCloseButtonState] = useState(true);

  const [isNewGoogleUser, setIsNewGoogleUser] = useState(false);
  const [isNewPhoneNumberUser, setIsNewPhoneNumberUser] = useState(false);

  const setIsNewGoogleUserState = (status) => {
    setIsNewGoogleUser(status);
  };

  const setIsNewPhoneNumberUserState = (state) => {
    setIsNewPhoneNumberUser(state);
  };

  const [firebaseKeys, setFirebaseKeys] = useState({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  });

  // linkWithCredential()

  const fetchKeys = useCallback(() => {
    setProgressStatus(true);
    getFirebaseKeys()
      .then((keys) => {
        setProgressStatus(false);
        setFirebaseKeys({ ...keys });
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  }, []);

  useEffect(() => {
    fetchKeys();
  }, [fetchKeys]);

  const disableClose = () => {
    setCloseButtonState(false);
  };

  return (
    <>
      <Dialog fullWidth open={props.dialogOpen}>
        {progressStatus ? (
          <CircularProgress />
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <DialogTitle>Sign in</DialogTitle>
              {closeButtonState ? (
                <IconButton onClick={props.handleDialogClose}>
                  <CloseIcon />
                </IconButton>
              ) : null}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: "1rem",
              }}
            >
              <Typography variant="h6">Welcome to ShopHeaven</Typography>
            </Box>

            {!isNewGoogleUser && !isNewPhoneNumberUser ? (
              <>
                <DialogActions
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Google
                    firebaseKeys={firebaseKeys}
                    disableClose={disableClose}
                    setIsNewGoogleUserState={setIsNewGoogleUserState}
                    isNewPhoneNumberUser={false}
                  />
                </DialogActions>

                <Phone
                  firebaseKeys={firebaseKeys}
                  disableClose={disableClose}
                  setIsNewPhoneNumberUserState={setIsNewPhoneNumberUserState}
                  isNewGoogleUser={false}
                />
              </>
            ) : null}

            {isNewGoogleUser ? (
              <Phone
                firebaseKeys={firebaseKeys}
                disableClose={disableClose}
                setIsNewPhoneNumberUserState={setIsNewPhoneNumberUserState}
                isNewGoogleUser={true}
              />
            ) : null}
            {isNewPhoneNumberUser ? (
              <Google
                firebaseKeys={firebaseKeys}
                disableClose={disableClose}
                setIsNewGoogleUserState={setIsNewGoogleUserState}
                isNewPhoneNumberUser={true}
              />
            ) : null}
          </>
        )}
      </Dialog>
    </>
  );
};

export default AuthForm;
