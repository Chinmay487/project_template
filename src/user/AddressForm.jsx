import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { NETWORK_URL } from "../links";
import axios from "axios";

const AddressForm = (props) => {
  const addressForm = {
    height: "27rem",
    px: "12%",
    pb: "3%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const [addressFormData, setAddressForm] = useState({
    line1: "",
    line2: "",
    city: "",
    district: "",
    state: "",
    pin: "",
  });

  const [pin, setPin] = useState("");
  const [wrongPin, setWrongPin] = useState(false);

  const onAddressFormInputChange = (event) => {
    const { name, value } = event.target;
    setAddressForm((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const updateAddress = () => {
    axios
      .post(`${NETWORK_URL}/auth/update_address`, {
        address: addressFormData,
        idToken: window.localStorage.getItem("idToken"),
        add : true,
        index : ''
      })
      .then((response) => {
        console.log(response.data);
        props.fetchData();
      })
      .catch((error) => {
        console.log("something went wrong");
      });
  };

  const onAddressFormSubmit = (event) => {
    event.preventDefault();
    if (props.length >= 2) {
      alert("u cant add more than 2 addresses");
    } else {
      const pinPattern = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/im;
      console.log(pinPattern.test(addressFormData.pin));
      if (pinPattern.test(addressFormData.pin)) {
        updateAddress();
      } else {
        alert("please enter correct pin");
      }
    }
  };

  return (
    <Box component="form" onSubmit={onAddressFormSubmit} sx={addressForm}>
      <Typography>Address Form</Typography>
      <TextField
        onChange={onAddressFormInputChange}
        value={addressFormData.line1}
        name="line1"
        variant="outlined"
        label="Address line 1"
        required={true}
      />

      <TextField
        onChange={onAddressFormInputChange}
        value={addressFormData.line2}
        name="line2"
        variant="outlined"
        label="Address line 2"
        required={true}
      />

      <TextField
        onChange={onAddressFormInputChange}
        value={addressFormData.city}
        name="city"
        variant="outlined"
        label="City"
        required={true}
      />

      <TextField
        onChange={onAddressFormInputChange}
        value={addressFormData.district}
        variant="outlined"
        label="District"
        name="district"
        required={true}
      />

      <TextField
        onChange={onAddressFormInputChange}
        value={addressFormData.state}
        variant="outlined"
        label="State"
        name="state"
        required={true}
      />

      <TextField
        variant="outlined"
        name="pin"
        onChange={onAddressFormInputChange}
        value={addressFormData.pin}
        label="Pin code"
        required={true}
      />

      <Button
        variant="outlined"
        sx={{
          display: "block",
          width: "60%",
          mx: "auto",
          mt: "2%",
        }}
        type="submit"
      >
        Add
      </Button>
    </Box>
  );
};

export default AddressForm;
