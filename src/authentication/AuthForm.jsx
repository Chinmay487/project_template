import React, { useState, useCallback, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
  Button,
  Box,
  IconButton,
  TextField,
  CircularProgress,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import { NETWORK_URL } from "../links";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirebaseKeys } from "../user";
import Google from "./Google";
import Phone from "./Phone";
import { linkWithPhoneNumber } from "firebase/auth";

const AuthForm = (props) => {
  const [isNew, setIsNew] = useState(false);
  const [isNewPhone, setIsNewPhone] = useState(false);
  const [progressStatus, setProgressStatus] = useState(false);

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

  console.log(isNew);

  // End of google sign in

  return (
    <>
      <Dialog
        fullWidth
        open={props.dialogOpen}
        // onClose={props.handleDialogClose}
      >
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
              <IconButton onClick={props.handleDialogClose}>
                <CloseIcon />
              </IconButton>
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

            {!isNew && !isNewPhone ? (
              <>
                <DialogActions
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Google
                    setIsNew={setIsNew}
                    firebaseKeys={firebaseKeys}
                    handleDialogClose={props.handleDialogClose}
                    isNewPhone={false}
                  />
                </DialogActions>

                <Phone
                  firebaseKeys={firebaseKeys}
                  isNew={false}
                  setIsNewPhone={setIsNewPhone}
                />
              </>
            ) : (
              <>
                {isNew ? (
                  <Phone
                    firebaseKeys={firebaseKeys}
                    isNew={true}
                    setIsNewPhone={setIsNewPhone}
                  />
                ) : null}
                {isNewPhone ? (
                  <Google
                    setIsNew={setIsNew}
                    firebaseKeys={firebaseKeys}
                    handleDialogClose={props.handleDialogClose}
                    isNewPhone={true}
                  />
                ) : null}
              </>
            )}
          </>
        )}
      </Dialog>
    </>
  );
};

export default AuthForm;
