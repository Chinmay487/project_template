import React, { useState, useCallback, useEffect } from "react";
import {
  Typography,
  Grid,
  Button,
  useTheme,
  NativeSelect,
  Box,
  CircularProgress,
} from "@mui/material";
import History from "../user/History";
import axios from "axios";
import { NETWORK_URL } from "../links";
import Address from "../user/Address";

const ViewCart = () => {
  const theme = useTheme();

  const cartGrid = {
    height: "15rem",
    boxShadow: theme.shadows[5],
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1%",
  };

  const [dataStatus, setDataStatus] = useState(false);

  const [dataList, setDataList] = useState({
    seller_id: null,
    addresses: [],
    uid: "",
    cart: [],
    is_seller: false,
    purchase_history: [],
  });

  const fetchData = useCallback(() => {
    setDataStatus(true);
    axios
      .post(`${NETWORK_URL}/auth/info`, {
        idToken: window.localStorage.getItem("idToken"),
      })
      .then((response) => response.data)
      .then((data) => {
        setDataList({ ...data });
        setDataStatus(false);
      })
      .catch((error) => {
        alert("something went wrong");
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // console.log(dataList);

  const [addressList,setAddressList] = useState(0)

  const onSelectChange = (event) => {
    const {name,value} = event.target
    setAddressList(value)
  }

  return (
    <Box sx={{ marginTop: "10rem" }}>
      <Grid
        container
        sx={{
          width: "80%",
          mx: "auto",
          my: { lg: "2%", md: "2%", sm: "4%", xs: "4%" },
        }}
        columnGap={2}
        rowGap={2}
      >
        <Grid item md={5} sm={12} xs={12} sx={cartGrid}>
          <NativeSelect name="address" defaultValue={0} onChange={onSelectChange}>
            {!dataList.addresses.length > 0 ? (
              <option value={0}>None</option>
            ) : (
              <>
                <option value={0} >Addrss 1</option>
                <option value={1} >Address 2</option>
              </>
            )}
          </NativeSelect>
          <Typography variant="h5">Price : 69999</Typography>
          <Typography variant="h5">Delivery Charges : 69.99</Typography>
          <Typography variant="h5">Total : 696969.666</Typography>
          <Button
            variant="outlined"
            sx={{
              display: "block",
              mx: "auto",
            }}
          >
            Place Order
          </Button>
        </Grid>
        <Grid item md={5} sm={12} xs={12} sx={cartGrid}>
          {!dataList.addresses.length > 0 ? (
            <Typography>None</Typography>
          ) : (
            <>
              <Typography>{dataList.addresses[addressList].line1}</Typography>
              <Typography>{dataList.addresses[addressList].line2}</Typography>
              <Typography>{dataList.addresses[addressList].city}</Typography>
              <Typography>{dataList.addresses[addressList].district}</Typography>
              <Typography>{dataList.addresses[addressList].state}</Typography>
              <Typography>{dataList.addresses[addressList].pin}</Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewCart;
