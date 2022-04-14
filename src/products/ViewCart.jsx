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
    category: "",
  });

  const fetchData = useCallback(() => {
    setDataStatus(true);
    axios
      .post(`${NETWORK_URL}/auth/info`, {
        idToken: window.localStorage.getItem("idToken"),
      })
      .then((response) => response.data)
      .then((data) => {
        if (data) {
          setDataList({ ...data });
          setDataStatus(false);
        } else {
          window.location.reload();
        }
      })
      .catch((error) => {
        alert("something went wrong");
      });
  }, []);

  const fetchCart = (isMounted) => {
    if (isMounted) {
      axios
        .post(`${NETWORK_URL}/client/get_cart`, {
          idToken: window.localStorage.getItem("idToken"),
        })
        .then((response) => {
          if (response.data) {
            setDataList((existingData) => {
              return {
                ...existingData,
                cart: [...response.data],
              };
            });
          } else {
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log("error fetching cart");
        });
    }
  };

  const [amount, setAmount] = useState({
    subTotal: 0,
    total: 0,
    charges: 0,
  });

  const getAmount = (isMounted) => {
    if (isMounted) {
      axios
        .post(`${NETWORK_URL}/client/bill`, {
          idToken: window.localStorage.getItem("idToken"),
        })
        .then((response) => {
          if (response.data) {
            setAmount({ ...response.data });
          } else {
            window.location.reload();
          }
        })
        .catch((error) => {
          alert("Something went wrong");
        });
    }
  };

  const loadData = (isMounted) => {
    fetchData(isMounted);
    fetchCart(isMounted);
    getAmount(isMounted);
  };

  useEffect(() => {
    let isMounted = true;
    loadData(isMounted);
    return () => {
      isMounted = false;
      setAmount({
        subTotal: 0,
        total: 0,
        charges: 0,
      });
      setDataList({
        seller_id: null,
        addresses: [],
        uid: "",
        cart: [],
        is_seller: false,
        purchase_history: [],
        category: "",
      });
    };
  }, [fetchData]);

  const [addressList, setAddressList] = useState(0);

  const onSelectChange = (event) => {
    const { value } = event.target;
    setAddressList(value);
  };

  const onPaymentSubmit = (response) => {
    const paymentId = response.razorpay_payment_id;
    axios
      .post(`${NETWORK_URL}/payment/success`, {
        idToken: window.localStorage.getItem("idToken"),
        payment_id: paymentId,
        shipping_address: addressList,
      })
      .then((response) => {
        // navigate("/viewcart");
        loadData(true);
        window.location.reload();
      })
      .catch((error) => {
        console.log("something went wrong");
      });
  };

  const getRazorPayKeys = async () => {
    var response = null;
    try {
      const idToken = window.localStorage.getItem("idToken");
      response = await axios.post(`${NETWORK_URL}/payment/keys`, {
        idToken: idToken,
      });
      return response.data;
    } catch (error) {
      console.log("please try after some time");
      return null;
    }
  };

  const confirmPayment = async () => {
    var keys = await getRazorPayKeys();
    if (keys !== null) {
      var options = {
        key: keys.api_key,
        key_secrete: keys.api_secrete,
        amount: amount.total * 100,
        currency: "INR",
        name: "ShopHeaven",
        description: "Shopping With ShopHeaven",
        handler: (response) => {
          onPaymentSubmit(response);
        },
        prefill: {
          name: window.localStorage.getItem("userName"),
          email: window.localStorage.getItem("userEmail"),
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    } else {
      alert("Please try after some time");
    }
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
                {dataList.cart.length > 0 ? (
                  <>
                    <Typography variant="subtitle1">
                      Sub Total : &#8377; {amount.subTotal}
                    </Typography>
                    <Typography variant="subtitle1">
                      Delivery Charges : &#8377; {amount.charges}
                    </Typography>
                    <Typography variant="subtitle1">
                      Total : &#8377; {amount.total}
                    </Typography>
                  </>
                ) : (
                  <Typography>No Products Bought</Typography>
                )}

                {dataList.addresses.length > 0 && dataList.cart.length > 0 ? (
                  <>
                    <Button
                      variant="outlined"
                      sx={{
                        display: "block",
                        mx: "auto",
                      }}
                      onClick={() => {
                        if (
                          dataList.addresses.length > 0 &&
                          dataList.cart.length > 0
                        ) {
                          confirmPayment();
                        }
                      }}
                    >
                      Place Order
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      sx={{
                        display: "block",
                        mx: "auto",
                      }}
                      disabled
                    >
                      Place Order
                    </Button>
                  </>
                )}
              </Grid>
              <Grid item md={5} sm={12} xs={12} sx={cartGrid}>
                {!dataList.addresses.length > 0 ? (
                  <Typography>
                    Please add atleast one address to coplete your order
                  </Typography>
                ) : (
                  <>
                    <Typography>Shipping Address : </Typography>
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
                {!dataList.cart.length > 0 ? (
                  <>
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "center",
                        my: "4rem",
                      }}
                    >
                      No Products to your cart
                    </Typography>
                  </>
                ) : (
                  <>
                    {!dataList.cart.length > 0 ? (
                      <Box
                        sx={{
                          width: "50%",
                          display: "flex",
                          justifyContent: "center",
                          mx: "auto",
                          my: "10rem",
                          alignItems: "center",
                        }}
                      >
                        <Typography>Fetching Cart ...</Typography> &nbsp;
                        <CircularProgress />
                      </Box>
                    ) : (
                      <Grid container rowGap={2}>
                        <Grid
                          item
                          md={12}
                          sm={12}
                          xs={12}
                          sx={{ textAlign: "center" }}
                        >
                          <Typography variant="h6">Your Orders</Typography>
                        </Grid>
                        {dataList.cart.map((item, index) => {
                          return (
                            <History
                              is_cart={true}
                              isSeller={false}
                              item={item}
                              key={`cart${item.key}${index}`}
                              index={index}
                              qty={item.quantity}
                              getAmount={getAmount}
                              fetchCart={fetchCart}
                            />
                          );
                        })}
                      </Grid>
                    )}
                  </>
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
