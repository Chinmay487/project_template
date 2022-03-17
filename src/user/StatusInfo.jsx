import React, { useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import StatusDetail from './StatusDetail';

const StatusInfo = (props) => {
  const theme = useTheme();

  const [statusdetailOpen, setStatusDetailOpen] = useState(false);

  const changeStatusDetailstatus = () => {
    setStatusDetailOpen(!statusdetailOpen);
  };

  return (
    <>
      <Box
        sx={{
          width: {
            lg: "50%",
            md: "50%",
            sm: "100%",
            xs: "100%",
          },
          border: "1px solid #CFD8DC",
          boxShadow: theme.shadows[5],
          margin: "0.5rem auto",
          padding: "0.5rem",
        }}
      >
        <Typography>
          {" "}
          Payment Date :{" "}
          {props.status === "pending"
            ? props.item.payment_date
            : props.item.user_info.payment_date}{" "}
        </Typography>
        {props.status === "dispatched" ? (
          <Typography>Delivery Date : {props.item.delivery_date}</Typography>
        ) : null}
        <Typography>
          {" "}
          Total : &#x20B9;
          {props.status === "pending"
            ? props.item.total
            : props.item.user_info.total}{" "}
        </Typography>
        <Typography>
          {" "}
          City :{" "}
          {props.status === "pending"
            ? props.item.shipping_address.city
            : props.item.user_info.shipping_address.city}{" "}
        </Typography>
        <Button onClick={changeStatusDetailstatus}>View</Button>
        <StatusDetail
          changeStatusDetailstatus={changeStatusDetailstatus}
          statusdetailOpen={statusdetailOpen}
          item={props.item}
          fetchData={props.fetchData}
          status={props.status}
        />
      </Box>
    </>
  );
};

export default StatusInfo;
