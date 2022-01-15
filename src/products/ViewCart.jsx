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

  const [cartList,setCartList] = useState([])

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

  const fetchCart = () => {
    axios.post(`${NETWORK_URL}/client/get_cart`,{
      idToken : window.localStorage.getItem("idToken")
    })
    .then((response)=>{
      console.log(response.data)
      setCartList([...response.data])
    })
    .catch((error)=>{
      console.log("error fetching cart")
    })
  }

  useEffect(() => {
    fetchData();
    fetchCart();
  }, [fetchData]);
  // console.log(dataList);

  const [addressList, setAddressList] = useState(0);

  const onSelectChange = (event) => {
    const { value } = event.target;
    setAddressList(value);
  };

  return (
    <>
      {dataStatus ? (
        <Box
          sx={{
            width: "50%",
            mx: "auto",
            my: "10rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" color="initial">
            Please wait ... &nbsp;
            <CircularProgress />
          </Typography>
        </Box>
      ) : (
        <>
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
                <NativeSelect
                  name="address"
                  defaultValue={0}
                  onChange={onSelectChange}
                >
                  {!dataList.addresses.length > 0 ? (
                    <option value={0}>None</option>
                  ) : (
                    <>
                      <option value={0}>Address 1</option>
                      {dataList.addresses.length === 2 ? (
                        <option value={1}>Address 2</option>
                      ) : null}
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
                  <Typography>Please add atleast one address</Typography>
                ) : (
                  <>
                    <Typography>
                      {dataList.addresses[addressList].line1}
                    </Typography>
                    <Typography>
                      {dataList.addresses[addressList].line2}
                    </Typography>
                    <Typography>
                      {dataList.addresses[addressList].city}
                    </Typography>
                    <Typography>
                      {dataList.addresses[addressList].district}
                    </Typography>
                    <Typography>
                      {dataList.addresses[addressList].state}
                    </Typography>
                    <Typography>
                      {dataList.addresses[addressList].pin}
                    </Typography>
                  </>
                )}
              </Grid>
              <Grid md={12} sm={12} xs={12} item>
                {!cartList.length > 0 ? (
                  <>
                    <Typography>No Products to your cart</Typography>
                  </>
                ) : (
                  <Grid container rowGap={2}>
                    {cartList.map((item, index) => {
                      return (
                        <History
                          is_cart={true}
                          isSeller={false}
                          item={item}
                          key={`cart${item.key}${index}`}
                          index = {index}
                        />
                      );
                    })}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default ViewCart;
