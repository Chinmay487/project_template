import React from "react";
import { Box, Typography,useTheme } from "@mui/material";
// import jcb from '../images/jcb.jpg';
import { Link } from "react-router-dom";

const ProductCard = (props) => {

  const theme = useTheme()

  const productBox1 = {
    padding: "5px",
    height: {
      md: "15rem",
      sm: "12rem",
    },
    width: {
      xl: "12rem",
      lg: "12rem",
      sm: "100%",
    },
    border: "1px solid #e8ebe9",
    boxShadow: theme.shadows[5],
    borderRadius: "7px",
    mx: "1rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: {
      md: "column",
      sm: "row",
      xs: "row",
    },
    transition:"all 0.5s ease",
    "&:hover": {
      boxShadow: theme.shadows[15]
    },
  };

  const cardImageStyle = {
    width: {
      md: "100%",
      sm: "50%",
      xs: "50%",
    },
    maxHeight: {
      md: "50%",
      sm: "100%",
      xs: "100%",
    },
  };

  return (
    <>
      <Link to={`/detail/${props.category}/${props.item.key}`} className="link">
        <Box sx={productBox1}>
          <Box component="img" src={props.item.thumbnail} sx={cardImageStyle} />
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="subtitle1">{props.item.title}</Typography>
            <Typography variant="subtitle2">
              Price : {props.item.price}
            </Typography>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default ProductCard;
