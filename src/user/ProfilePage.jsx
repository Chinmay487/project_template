import React, { useState, useEffect, useCallback } from "react";
import {
  Typography,
  Grid,
  Box,
  useTheme,
  CircularProgress,
} from "@mui/material";
import History from "./History";
import axios from "axios";
import { NETWORK_URL } from "../links";
import Address from "./Address";
import AddressForm from "./AddressForm";

const ProfilePage = () => {
  const theme = useTheme();

  const profileGrid = {
    width: "80%",
    mx: "auto",
    marginTop: "10rem",
    marginBottom: "2rem",
  };

  // const profile1 = {
  //   border: "1px solid #B0BEC5",
  //   display: "flex",
  //   flexDirection: {
  //     xl: "row",
  //     lg: "row",
  //     md: "row",
  //     sm: "column",
  //     xs: "column",
  //   },
  //   justifyContent: "space-evenly",
  //   boxShadow: theme.shadows[5],
  //   backgroundColor: "#EEEEEE",
  // };

  const profile2 = {
    border: "1px solid #B0BEC5",
    display: "flex",
    boxShadow: theme.shadows[5],
    backgroundColor: "#EEEEEE",
  };

  const [dataStatus, setDataStatus] = useState(false);

  const [dataList, setDataList] = useState({
    seller_id: null,
    addresses: [],
    uid: "",
    cart: [],
    is_seller: false,
    purchase_history: [],
    name: "",
    email: "",
    contact: "",
  });

  const fetchData = useCallback(() => {
    setDataStatus(true);
    axios
      .post(`${NETWORK_URL}/auth/info`, {
        idToken: window.localStorage.getItem("idToken"),
      })
      .then((response) => response.data)
      .then((data) => {
        if (data) {
          setDataList({
            ...data,
            name: window.localStorage.getItem("name"),
            email: window.localStorage.getItem("email"),
            contact: window.localStorage.getItem("contact"),
          });
          setDataStatus(false);
        } else {
          window.location.reload();
        }
      })
      .catch((error) => {
        alert("something went wrong");
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      {dataStatus ? (
        <Box
          sx={{
            my: "10rem",
            mx: "auto",
            width: "50%",
            height: "4rem",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" color="initial" gutterBottom>
            Please wait...
          </Typography>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container columnGap={3} rowGap={3} sx={profileGrid}>
            <Grid item md={12} sm={12} xs={12} sx={profile2}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Address Info
                </Typography>
                <Grid container>
                  <Grid
                    item
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{
                      display: "flex",
                      height: "27rem",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {dataList.addresses.length > 0 ? (
                      <>
                        {dataList.addresses.map((address, index) => {
                          return (
                            <Address
                              address={address}
                              index={index}
                              key={`address${index}`}
                              fetchData={fetchData}
                            />
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <Typography variant="h5" textAlign="center">
                          Please add atleast one address
                        </Typography>
                      </>
                    )}
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <AddressForm
                      fetchData={fetchData}
                      length={dataList.addresses.length}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Purchase History
          </Typography>

          {!dataList.purchase_history.length > 0 ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">No products bought yet</Typography>
            </Box>
          ) : (
            <>
              <Grid
                container
                sx={{
                  width: "75%",
                  mx: "auto",
                  my: "3%",
                }}
                rowGap={3}
              >
                {dataList.purchase_history.map((item) => {
                  return (
                    <History
                      isCart={true}
                      isSeller={false}
                      item={item}
                      key={item.key}
                    />
                  );
                })}
              </Grid>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProfilePage;
