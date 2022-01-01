import React, { useState, useCallback, useEffect } from 'react';
import { Dialog, DialogActions, DialogTitle, Typography, Button, Box, IconButton, TextField, CircularProgress } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { NETWORK_URL } from '../links';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";


const AuthForm = (props) => {

    const [progressStatus, setProgressStatus] = useState(false)
    const [otpSent, setOtpSent] = useState(false)

    const [firebaseKeys, setFirebaseKeys] = useState({
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    })


    const fetchKeys = useCallback(() => {
        setProgressStatus(true)
        axios.get(`${NETWORK_URL}/auth/keys`)
            .then((response) => {
                setProgressStatus(false)
                // console.log(response.data)
                setFirebaseKeys({ ...response.data })
                // authUser({...response.data})
            })
            .catch((error) => {
                console.log("something went wrong")
            })
    }, [])


    useEffect(() => {
        fetchKeys()

    }, [fetchKeys])

    const [correctNumber, setCorrectNumber] = useState(false)

    const [mobileNumberForm, setMobileNumberForm] = useState({
        otp: '000000',
        mobileNumber: '',
        countryCode: '+91'
    })

    const onOtpFormChange = (event) => {
        const { name, value } = event.target
        setMobileNumberForm((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }

    const googleButtonStyle = {
        color: "#F5F5F5",
        backgroundColor: "#FF5252",
        "&:hover": {
            backgroundColor: "#FF5252"
        }
    }

    const authUser = (app) => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        app.auth().signInWithPopup(googleProvider)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                alert("something went wrong")
            })
    }

    const googleSignIn = () => {
        const app = firebase.initializeApp(firebaseKeys)
        authUser(app)
        props.handleDialogClose()
    }


    const auth = getAuth();
    const configCaptcha = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            onOtpSubmit();
            }
        }, auth);
    }
    
    const onOtpSubmit = (event) =>{
        event.preventDefault();
        const mobileNumber = mobileNumberForm.mobileNumber;

        const mobileNumberPattern = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/im;
        if (mobileNumberPattern.test(mobileNumber)) {
            setCorrectNumber(false)
            console.log(mobileNumber)

        } else {
            setCorrectNumber(true)
        }

    }


    return (
        <>
            <Dialog fullWidth open={props.dialogOpen} onClose={props.handleDialogClose} >
                {
                    progressStatus ? <CircularProgress /> : <>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                            <DialogTitle>
                                Sign in
                            </DialogTitle>
                            <IconButton
                                onClick={props.handleDialogClose} >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", my: "1rem" }} >
                            <Typography variant="h6">Welcome to ShopHeaven</Typography>
                        </Box>

                        <DialogActions sx={{ height: "100%", display: "flex", flexDirection: "column" }} >
                            <Button onClick={googleSignIn} variant='contained' sx={googleButtonStyle}> <GoogleIcon /> &nbsp;Login with Google  </Button>
                        </DialogActions>

                        <Box id="sign-in-button" />
                        <Box
                            component="form"
                            sx={{
                                width: "100%",
                                padding: {
                                    sm: "1%",
                                    xs: "1%"
                                },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                my: "1rem"
                            }}
                        >
                            <Typography sx={{ my: "1rem" }}>OR</Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: "1rem",
                                    textAlign: 'center',
                                    mx: { sm: '1%', xs: '3%' }
                                }}
                            >
                                Join us with mobile number and OTP
                            </Typography>
                            {correctNumber ? <Typography variant="p" color="error" gutterBottom>PLEASE ENTER VALID PHONE NUMBER</Typography> : null}
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    sx={{ width: "10%", mx: "0.5rem" }}
                                    label="code"
                                    name="countryCode"
                                    value={mobileNumberForm.countryCode}
                                    onChange={onOtpFormChange}
                                    required={true}
                                />
                                <TextField
                                    variant="outlined"
                                    label="Contact Number"
                                    placeholder='9876543210'
                                    name="mobileNumber"
                                    value={mobileNumberForm.mobileNumber}
                                    onChange={onOtpFormChange}
                                    required={true}
                                />
                            </Box>
                            {
                                otpSent ? <TextField
                                    sx={{ my: "0.5rem" }}
                                    variant="outlined"
                                    label="otp"
                                    name="otp"
                                    required={true}
                                    value={mobileNumberForm.otp}
                                    onChange={onOtpFormChange}
                                /> : null
                            }
                            <Box sx={{ width: "100%", display:"flex",justifyContent:"center",alignItems:"center" }}>
                                <Button onClick={()=>{onOtpSubmit()}} sx={{ my: "1rem",mx:"1rem" }} variant="contained">
                                    {
                                        otpSent ? "Resend OTP" : "Send OTP"
                                    }
                                </Button>
                                {
                                    otpSent ?  <Button type="submit" sx={{ my: "1rem",mx:"1rem" }} variant="contained" >
                                        Submit OTP
                                    </Button> : null
                                }
                            </Box>
                        </Box>
                    </>
                }
            </Dialog>
        </>
    )
}

export default AuthForm;