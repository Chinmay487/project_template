import React,{useState} from 'react';
import {Box,Typography,Button,TextField} from '@mui/material';
import axios from 'axios';
import { NETWORK_URL } from '../links';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber ,PhoneAuthProvider} from "firebase/auth";


const Phone = (props) =>{

    const [otpSent, setOtpSent] = useState(false)

    const [correctNumber, setCorrectNumber] = useState(false)

    const [mobileNumberForm, setMobileNumberForm] = useState({
        otp: 0,
        mobileNumber: ''
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

    const verifyPhoneNumberUser = (response) => {
        const user = firebase.auth().currentUser
        user.getIdToken(/* forceRefresh */ true)
        .then((idToken)=>{
            axios.post(`${NETWORK_URL}/auth/phone`,{
                idToken: idToken, 
                userData : response
            })
            .then((response)=>{
                console.log(response)
            })
        })
        .catch((error)=>{
            console.log("something went wrong")
        })
    }

    
    const configCaptcha = () => {
        const auth = getAuth();
        firebase.initializeApp(props.firebaseKeys)
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onOtpSubmit();
            },
            defaultCountry: "IN"
        }, auth);
    }


    const onOtpSubmit = (event) => {
        firebase.initializeApp(props.firebaseKeys)
        const mobileNumber = "+91" + mobileNumberForm.mobileNumber;
        const auth = getAuth();
        const mobileNumberPattern = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/im;
        if (mobileNumberPattern.test(mobileNumber)) {
            setCorrectNumber(false)
            console.log(mobileNumber)
            setOtpSent(true)
            configCaptcha()
            const appVerifier = window.recaptchaVerifier;

            // sendOtp(mobileNumber)
            signInWithPhoneNumber(auth, mobileNumber, appVerifier)
                .then((confirmationResult) => {
                    
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    console.log("OTP has been sent")
                    // ...
                }).catch((error) => {
                    // Error; SMS not sent
                    console.log("something went wrong")
                    // ...
                });

        } else {
            setCorrectNumber(true)
            setOtpSent(false)
        }

    }


    const onOtpFormSubmit = (event) => {
        event.preventDefault()
        firebase.initializeApp(props.firebaseKeys)
        const code = mobileNumberForm.otp;
        window.confirmationResult.confirm(code)
            .then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user)
                // verifyUser(result)
                verifyPhoneNumberUser(result)
                // console.log(PhoneAuthProvider.verifyPhoneNumber())

                props.handleDialogClose()

                // ...
            }).catch((error) => {
                console.log("otp form error")
            });
    }
    return (
        <>

            
            <Box id="sign-in-button" />
                        <Box
                            component="form"
                            onSubmit={onOtpFormSubmit}
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
                            {correctNumber ?
                                <Typography
                                    variant="p"
                                    color="error"
                                    gutterBottom>
                                    PLEASE ENTER VALID PHONE NUMBER
                                </Typography>
                                :
                                null}
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
                                    label="OTP"
                                    name="otp"
                                    required={true}
                                    value={mobileNumberForm.otp}
                                    onChange={onOtpFormChange}
                                /> : null
                            }
                            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button onClick={onOtpSubmit} sx={{ my: "1rem", mx: "1rem" }} variant="contained">
                                    {
                                        otpSent ? "Resend OTP" : "Send OTP"
                                    }
                                </Button>
                                {
                                    otpSent ? <Button type="submit" sx={{ my: "1rem", mx: "1rem" }} variant="contained" >
                                        Submit OTP
                                    </Button> : null
                                }
                            </Box>
                        </Box>
        </>
    )
}

export default Phone;