import React from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import ProductCard from "./ProductCard";


const ProductGrid = (props) => {


  const gridStyle2 = {
    alignItems: "center",
  };

  return (
    <>
      {props.prodGrid.length === 0 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: "2rem",
          }}
        >
          <Typography variant="h6">Fetching... &nbsp; </Typography>
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          justifyContent="space-evenly"
          sx={gridStyle2}
          rowGap={2}
        >
          {props.prodGrid.map((element, index) => {
            return (
              <Grid item key={`prodGrid${index}`}>
                <ProductCard item={element} category={props.category} key={`prodGridElement${index}`} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default ProductGrid;
