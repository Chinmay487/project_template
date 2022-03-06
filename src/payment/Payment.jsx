import react, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { NETWORK_URL } from "../links";
import {
  Dialog,
  Button,
  DialogTitle,
  Typography,
  Box,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const Payment = (props) => {

    const [paymentLink,setPaymentLink] = useState("")

  const initiatePayment = useCallback(() => {
    const idToken = window.localStorage.getItem("idToken");
    axios
      .post(`${NETWORK_URL}/payment/initiate`,{
          idToken:idToken
      })
      .then((response) => {setPaymentLink(response.data)}
      )
      .catch((error) => {
        console.log("Error")
      });
  },[]);

  useEffect(()=>{
      initiatePayment()
      return () => {setPaymentLink("")}
  },[])

  console.log(paymentLink)
  return (
    <Dialog fullWidth open={props.paymentOpen}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <DialogTitle>Payment</DialogTitle>
        <Button
          onClick={() => {
            props.setPaymentOpen(false);
          }}
        >
          <CloseIcon />
        </Button>
      </Box>

      <Typography>Total charges : {props.amount.total}</Typography>
    </Dialog>
  );
};

export default Payment;
