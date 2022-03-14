import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { NETWORK_URL } from "../links";
import {
  Dialog,
  Button,
  DialogTitle,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSearchParams,useNavigate } from "react-router-dom";



const Payment = (props) => {

  const navigate = useNavigate()
    
  const [paymentInfo, setPaymentInfo] = useState({
    id : "",
    longurl:""
  });

  const [searchParams] = useSearchParams("");
  const payment_id = searchParams.get("payment_id");
  const payment_status = searchParams.get("payment_status");
  const payment_request_id = searchParams.get("payment_request_id");

  const sendPaymentInfoToServer = () => {
    // console.log(payment_request_id)
    axios.post(`${NETWORK_URL}/payment/success`,{
      idToken:window.localStorage.getItem("idToken"),
      payment_id : payment_request_id,
      payment_id_local : window.localStorage.getItem("payment_id_local"),
      shipping_address : props.addressList
    })
    .then((response)=>{
      console.log(response.data)
      navigate("/viewcart")
      props.loadData(true)
    })
    .catch((error)=>{
      console.log("something went wrong")
    })
  }

  if(payment_id && payment_status && payment_request_id){
    sendPaymentInfoToServer()
  }

  const initiatePayment = useCallback(() => {
    const idToken = window.localStorage.getItem("idToken");
    axios
      .post(`${NETWORK_URL}/payment/initiate`, {
        idToken: idToken,
      })
      .then((response) => {
        setPaymentInfo((oldInfo)=>{
          return {
            id : response.data.id,
            longurl : response.data.longurl
          }
        });
        window.localStorage.setItem("payment_id_local",response.data.id)
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  useEffect(() => {
    if(!payment_id && !payment_status && !payment_request_id){
      initiatePayment();
    }
    return () => {
      window.localStorage.removeItem("payment_id_local")
      setPaymentInfo({
        id : "",
        longurl:""
      });
    };
  }, []);

  // console.log(paymentInfo);
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
      <Typography 
        sx={{
          textAlign:'center',
          fontSize:'1.5rem'
          }}>
            Total charges : {props.amount.total}
      </Typography>
      <Box component="a" href={paymentInfo.longurl} 
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