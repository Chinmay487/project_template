import React, { useState} from "react";
import {
  Grid,
  Typography,
  Box,
  useTheme,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import { NETWORK_URL } from "../links";

const History = (props) => {
  const theme = useTheme();

  const [deleteButtonState, setDeleteButtonState] = useState(false);

  const profileGridItem = {
    display: "flex",
    flexDirection: "column",
    justifyContent: {
      lg: "space-evenly",
      md: "space-evenly",
      sm: "center",
      xs: "center",
    },
    py: {
      lg: "0%",
      md: "0%",
      sm: "3%",
      xs: "3%",
    },
  };

  const profileGridItemText = {
    mx: {
      lg: "0%",
      md: "0%",
      sm: "5%",
      xs: "5%",
    },
  };

  const quantity = {
    px: {
      lg: "0",
      md: "0",
      sm: "5%",
      xs: "5%",
    },
    py: "2%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const cartButtons = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: {
      lg: `${props.isSeller ? "column" : null}`,
      md: `${props.isSeller ? "column" : null}`,
      sm: "column",
      xs: "column",
    },
    justifyContent: `${props.isSeller ? "space-evenly" : "center"}`,
    mx: "1%",
  };

  const deleteProduct = () => {
    setDeleteButtonState(true);
    const data = new FormData();
    data.append("id", props.item.key);
    data.append("category",props.item.category)
    axios
      .post(`${NETWORK_URL}/seller/deleteproduct`, data)
      .then((response) => {
        setDeleteButtonState(false);
        props.fetchCart(true)
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  const removeFromCart = () => {
    setDeleteButtonState(true);
    axios
      .post(`${NETWORK_URL}/client/update_cart`, {
        product_id: "",
        quantity: "",
        add: false,
        index: props.index,
        is_qty: false,
        idToken: window.localStorage.getItem("idToken"),
        price: props.item.price,
      })
      .then((response) => {
        setDeleteButtonState(false);
        props.fetchCart(true)
      })
      .catch((error) => {
        alert("something went wrong");
        window.location.reload();
        setDeleteButtonState(false);
      });
    
  };

  const callDeletefunction = () => {
    // setDeleteButtonState(true)
    if (props.is_cart) {
      removeFromCart();
    } else {
      deleteProduct();
    }
  };

  const onQuantityChange = (event) => {
    axios
      .post(`${NETWORK_URL}/client/update_cart`, {
        product_id: "",
        category:props.item.category,
        quantity: event.target.value,
        add: false,
        index: props.index,
        is_qty: true,
        idToken: window.localStorage.getItem("idToken"),
        price: props.item.discount_price,
      })
      .then((response) => {
        props.getAmount(true)
      })
      .catch((error) => {
        alert("something went wrong")
      });
  };


  return (
    <Grid item sm={12} xs={12}>
      <Grid
        container
        sx={{ boxShadow: theme.shadows[5], backgroundColor: "#F5F5F5" }}
      >
        <Grid item md={3} sm={12} xs={12}>
          <Box component="center">
            <Box
              component="img"
              src={props.item.thumbnail}
              sx={{
                maxWidth: { lg: "80%", md: "80%", sm: "80%", xs: "80%" },
                height: "10rem",
              }}
            />
          </Box>
        </Grid>
        <Grid item md={7} sm={12} xs={12} sx={profileGridItem}>
          <Link to={`/detail/${props.item.category}/${props.item.key}`} className="link">
            <Typography sx={profileGridItemText} variant="h6">
              {props.item.title}
            </Typography>
          </Link>
          <Typography sx={profileGridItemText} variant="h6">
            {" "}
            Price : {props.item.price}{" "}
          </Typography>
          {props.is_cart ? (
            <Box sx={quantity}>
              <Typography variant="h6"> Qty : &nbsp;</Typography>
              <Box
                component="select"
                onChange={onQuantityChange}
                sx={{
                  fontSize: "1.3rem",
                }}
                defaultValue={`${props.is_cart ? props.qty : 1}`}
              >
                <Box component="option" value={1}>
                  1
                </Box>
                <Box component="option" value={2}>
                  2
                </Box>
                <Box component="option" value={3}>
                  3
                </Box>
                <Box component="option" value={4}>
                  4
                </Box>
                <Box component="option" value={5}>
                  5
                </Box>
                <Box component="option" value={7}>
                  7
                </Box>
                <Box component="option" value={6}>
                  6
                </Box>
                <Box component="option" value={8}>
                  8
                </Box>
                <Box component="option" value={9}>
                  9
                </Box>
                <Box component="option" value={10}>
                  10
                </Box>
              </Box>
            </Box>
          ) : (
            <Typography sx={profileGridItemText} variant="h6">
              {" "}
              Qty : {props.item.quantity}{" "}
            </Typography>
          )}
        </Grid>
        <Grid item md={2} sm={12} xs={12} sx={profileGridItem}>
          {props.is_cart  ? (
            <Box sx={cartButtons}>
              {deleteButtonState ? (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: "1rem",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Button
                  variant="text"
                  onClick={callDeletefunction}
                  color="error"
                  sx={{
                    width: `${
                      props.is_cart ? "100%" : "30%"
                    }`,
                    height: `${
                      props.is_cart ? "auto" : "2rem"
                    }`,
                  }}
                >
                  <DeleteForeverIcon sx={{ color: "red" }} />
                </Button>
              )}
              
            </Box>
          ) : (
            <Typography sx={profileGridItemText} variant="h6">
              {" "}
              Date : 21-02-2021{" "}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default History;
