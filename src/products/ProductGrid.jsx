import React, { useState, useEffect } from "react";
import {
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import ProductCard from "./ProductCard";

// const GridItemElement = (props) => {
//   return (
//     <Grid item >
//       <ProductCard item={props.item} />
//     </Grid>
//   );
// };

const ProductGrid = (props) => {
  const theme = useTheme();

  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const gridStyle2 = {
    alignItems: "center",
  };

  // const [productList,setProductList] = useState([])

  // useEffect(()=>{
  //   setProductList([])
  //   props.prodGrid.forEach((item,index)=>{
  //     if(!small && index===2){
  //       return
  //     }
  //     setProductList((oldListData)=>{
  //       return [ ...oldListData,item]
  //     })
  //   })
  // },[small,props.prodGrid])

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
