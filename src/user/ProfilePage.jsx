import React, { useState, useCallback, useEffect } from "react";
import { Typography, Box, Button, CircularProgress } from "@mui/material";
import AddressInfo from "./AddressInfo";
import axios from "axios";
import { NETWORK_URL } from "../links";
import StatusInfo from "./StatusInfo";

const ProfilePage = () => {
  const [shippingStatus, setShippingStatus] = useState("pending");
  const [shippingData, setShippingData] = useState([]);
  const [dataStatus, setDataStatus] = useState(false);
  const [isData, setIsData] = useState(0);

  const fetchData = useCallback((isMounted, status) => {
    setDataStatus(true);
    if (isMounted) {
      axios
        .post(`${NETWORK_URL}/auth/payment/${status}`, {
          idToken: window.localStorage.getItem("idToken"),
        })
        .then((response) => {
          if (response.data.length > 0) {
            setShippingData([...response.data]);
          }
          setIsData(response.data.length);
          setDataStatus(false);
        })
        .catch((error) => {});
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    fetchData(isMounted, shippingStatus);

    return () => {
      isMounted = false;
      setShippingData([]);
    };
  }, []);

  return (
    <>
      <AddressInfo />

      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Shipping Status
      </Typography>

      <Box component="center">
        <Button
          onClick={() => {
            setShippingStatus("pending");
            setDataStatus(false);
            fetchData(true, "pending");
          }}
          variant="text"
          disabled={shippingStatus === "pending"}
        >
          Pending
        </Button>
        <Button
          onClick={() => {
            setShippingStatus("dispatched");
            setDataStatus(false);
            fetchData(true, "dispatched");
          }}
          disabled={shippingStatus === "dispatched"}
        >
          Dispatched
        </Button>
        <Button
          onClick={() => {
            setShippingStatus("delivered");
            setDataStatus(false);
            fetchData(true, "delivered");
          }}
          disabled={shippingStatus === "delivered"}
        >
          Delivered
        </Button>
      </Box>

      {dataStatus ? (
        <Box
          component="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: "1rem",
          }}
        >
          <Typography variant="h5"> Loading...</Typography> &nbsp;
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {isData > 0 ? (
            <>
              {shippingData.map((item, index) => {
                return (
                  <StatusInfo
                    item={item}
                    fetchData={fetchData}
                    key={`shipping_${shippingStatus}${index}0`}
                    status={shippingStatus}
                  />
                );
              })}
            </>
          ) : (
            <Box component="center" sx={{ my: "1rem" }}>
              <Typography variant="h4">Nothing Here</Typography>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default ProfilePage;
