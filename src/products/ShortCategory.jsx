import React, { useState, useEffect, useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import ProductGrid from "./ProductGrid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NETWORK_URL } from "../links";

const ShortCategory = (props) => {
  const navigate = useNavigate();

  const productGridBox1 = {
    borderTop: "1px solid #9c9c9c",
    borderBottom: "1px solid #9c9c9c",
    width: {
      xl: "90%",
      lg: "90%",
      md: "95%",
      sm: "100%",
      xs: "100%",
    },
    my: "1rem",
    mx: "auto",
    backgroundColor: "#fcfcfc",
  };

  const buttonSyle1 = {
    display: "block",
    mx: "auto",
    my: "1rem",
  };

  const [prodGrid, setProdGrid] = useState([]);

  const fetchProducts = useCallback((isMounted) => {
    if(!isMounted){
      return
    }
    axios
      .get(`${NETWORK_URL}/client/fetch/${props.category}`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        if (data.length > 0 && isMounted) {
          setProdGrid([...data]);
        }
      })
      .catch((error) => {
        alert("something went wrong");
      });
  }, [props.category]);

  useEffect(() => {
    let isMounted = true;
    fetchProducts(isMounted);
    return () => {
      isMounted = false;
      setProdGrid([])
    };
  }, [fetchProducts]);

  return (
    <Box sx={productGridBox1} component="div">
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        {props.title}
      </Typography>

      <ProductGrid prodGrid={prodGrid} category={props.category} />
      {prodGrid.length > 0 ? (
        <Button
          sx={buttonSyle1}
          onClick={() => {
            navigate("/wishlist");
          }}
          variant="outlined"
        >
          View More
        </Button>
      ) : null}
    </Box>
  );
};

export default ShortCategory;
