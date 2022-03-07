import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { NETWORK_URL } from "../links";
import {
  Dialog,
  Button,
  DialogTitle,
  Typography,
  Box,
  // IconButton,
  // CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSearchParams } from "react-router-dom";



const Payment = (props) => {
  const [searchParams] = useSearchParams("");
  const payment_id = searchParams.get("payment_id");
  const payment_status = searchParams.get("payment_status");
  const payment_request_id = searchParams.get("payment_request_id");

  if(payment_id && payment_status && payment_request_id){
    console.log("haha")
  }
  const [paymentLink, setPaymentLink] = useState("");

  const initiatePayment = useCallback(() => {
    const idToken = window.localStorage.getItem("idToken");
    axios
      .post(`${NETWORK_URL}/payment/initiate`, {
        idToken: idToken,
      })
      .then((response) => {
        setPaymentLink(response.data);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  useEffect(() => {
    initiatePayment();
    return () => {
      setPaymentLink("");
    };
  }, []);

  console.log(paymentLink);
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
      <Typography sx={{textAlign:'center',fontSize:'1.5rem'}}>Total charges : {props.amount.total}</Typography>
      <Box component="a" href={paymentLink} 
      sx={{textAlign:"center",
          border:'1px solid blue',
          width:'45%',
          margin:"1rem auto",
          textDecoration:'none'
          }}>
        Pay Now
      </Box>
    </Dialog>
  );
};

export default Payment;