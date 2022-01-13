import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Address = (props) => {
  const theme = useTheme();

  const addressStyle = {
    width: "80%",
    mx: "auto",
    border: "1px solid #BDBDBD",
    boxShadow: theme.shadows[3],
    px: "2%",
  };

  return (
    <Box component="div" sx={addressStyle}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Address : {props.index + 1}</Typography>
        <IconButton>
          <DeleteForeverIcon sx={{ color: "red" }} />
        </IconButton>
      </Box>
      <Typography>{props.address.line1}</Typography>
      <Typography>{props.address.line2}</Typography>
      <Typography>{props.address.city}</Typography>
      <Typography>{props.address.district}</Typography>
      <Typography>{props.address.state}</Typography>
      <Typography>{props.address.pin}</Typography>
    </Box>
  );
};

export default Address;
