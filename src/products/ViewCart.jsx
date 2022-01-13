import React, { useState, useCallback, useEffect } from "react";
import {
  Typography,
  Grid,
  Button,
  useTheme,
  NativeSelect,
  Box,
} from "@mui/material";
import History from "../user/History";
import axios from "axios";
import { NETWORK_URL } from "../links";

const ViewCart = () => {
  const theme = useTheme();

  const [productList, setProductList] = useState([]);

  const fetchProduct = useCallback(() => {
    axios
      .get(`${NETWORK_URL}/seller/panel`)
      .then((response) => response.data)
      .then((data) => {
        if (data.length > 0) {
          setProductList([...data]);
        }
      })
      .catch((error) => {
        alert("something went wrong");
      });
  }, []);

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
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
          sx={{
            height: "15rem",
            boxShadow: theme.shadows[5],
            backgroundColor: "#F5F5F5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1%",
          }}
        >
          <NativeSelect defaultValue={0}>
            <option value={0}>Address 1</option>
            <option value={1}>Address 2</option>
          </NativeSelect>
          <Typography variant="h5">Price : 69000</Typography>
          <Typography variant="h5">Delivery Charges : 69.00</Typography>
          <Typography variant="h5">Total : 69069.00</Typography>
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
        <Grid item md={7} sm={12} xs={12}>
          <Grid container rowGap={2}>
            {productList.map((product) => {
              return <History isSeller={false} is_cart={true} item={product} />;
            })}
            {/* <History isSeller = {false} is_cart={true} />
                    <History isSeller = {false} is_cart={true} />
                    <History isSeller = {false} is_cart={true} />
                    <History isSeller = {false} is_cart={true} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewCart;
