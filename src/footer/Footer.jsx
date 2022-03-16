import React from "react";
import { Grid, Typography } from "@mui/material";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      sx={{
        my: "1rem",
        height: {
            lg : "12rem",
            md : "12rem",
            xs : "auto",
            sm : "auto"
        },
        alignItems: "center",
        padding: "0 10%",
        backgroundColor: "#ECEFF1",
      }}
    >
      <Grid item sx={{ alignItems: "center" }} md={6}>
        <Typography variant="h4" gutterBottom>
          Shop Non-Stop on ShopHeaven
        </Typography>
        <Typography>
          Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery
        </Typography>
      </Grid>
      <Grid item sx={{ alignItems: "center" }} md={2}>
        <Typography variant="h6">
          <b>Products</b>
        </Typography>
        <Typography>
          <Link className="link" to="">
            Camera
          </Link>
        </Typography>
        <Typography>
          <Link className="link" to="">
            Laptop
          </Link>
        </Typography>
        <Typography>
          <Link className="link" to="">
            Watches
          </Link>
        </Typography>
        <Typography>
          <Link className="link" to="">
            Iphone
          </Link>
        </Typography>
        <Typography>
          <Link className="link" to="">
            Clock
          </Link>
        </Typography>
      </Grid>

      <Grid item sx={{ alignItems: "center" }} md={2}>
        <Typography variant="h6"><b>Contributers</b></Typography>
        <Typography>
          <Link className="link" to="">
            Rushikesh Ahire
          </Link>
        </Typography>
        <Typography>
          <Link className="link" to="">
            Krishna Maurya
          </Link>
        </Typography>
        <Typography>
          <Link className="link" to="">
            Chinmay Patil
          </Link>
        </Typography>
        <Typography>
          <Link className="link" to="">
            Aman Shukla
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
