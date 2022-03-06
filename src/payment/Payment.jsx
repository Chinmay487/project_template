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
  let [searchParams, setSearchParams] = useSearchParams();
  const payment_id = searchParams.get("payment_id");
  const payment_status = searchParams.get("payment_status");
  const payment_request_id = searchParams.get("payment_request_id");

  console.log(payment_id)
  console.log(payment_status)
  console.log(payment_request_id)

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
      <Typography>Total charges : {props.amount.total}</Typography>
      <Box component="a" href={paymentLink}>
        Pay Now
      </Box>
    </Dialog>
  );
};

export default Payment;