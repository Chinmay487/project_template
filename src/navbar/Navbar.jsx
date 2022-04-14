import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import Sidenav from "./Sidenav";
import {
  appBarStyle,
  navbarDivStyle,
  searchFormGroup,
  navbarStyle2,
  navbarDiveStyle2,
  typographyStyle2,
} from "../styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";
import AvatarMenu from "./AvatarMenu";
import {loginUserWithGoogle} from "../authentication/LoginWithGoogle";

const Navbar = (props) => {

  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const newData =
      window.localStorage.getItem("idToken") === undefined
        ? null
        : window.localStorage.getItem("idToken");
    setUserData(newData);
  }, []);

  const [avatarEl, setAvatarEl] = useState(null);


  const [drawerStatus, setDrawerStatus] = useState(false);

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const avatarClick = (event) => {
    setAvatarEl(event.target);
  };

  const handleAvatarClose = () => {
    setAvatarEl(null);
  };

  const openAvatarMenu = Boolean(avatarEl);


  const navList2 = [
    {
      title: "Camera",
      path: "camera",
    },
    {
      title: "Laptop",
      path: "laptop",
    },
    {
      title: "Watches",
      path: "watch",
    },
    {
      title: "Clock",
      path: "clock",
    },
    {
      title: "iPhone",
      path: "iphone",
    },
  ];


  const logoStyle = {
    color: "#9E9E9E",
    fontWeight: "bold",
    textShadow: "1px 1px 10px #90A4AE",
  };


  return (
    <>
      <AppBar sx={appBarStyle} position="fixed">
        <Toolbar>
          <Box component="div" sx={navbarDivStyle}>
            {small ? (
              <IconButton
                onClick={() => {
                  setDrawerStatus(!drawerStatus);
                }}
              >
                <MenuRoundedIcon color="primary" sx={{ fontSize: "2.5rem" }} />
              </IconButton>
            ) : (
              <Typography sx={logoStyle} variant="h4">
                <NavLink to="/" className="link">
                  ShopHeaven
                </NavLink>
              </Typography>
            )}

            {small ? (
              <Typography color="black" sx={logoStyle} variant="h5">
                <NavLink to="/" className="link">
                  ShopHeaven
                </NavLink>
              </Typography>
            ) : null}

            <Box sx={searchFormGroup}>
              {userData !== null ? (
                <IconButton onClick={avatarClick}>
                  <Avatar alt="O" src={window.localStorage.getItem("pic")} />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    fontSize: {
                      sm: "0.8rem",
                      xs: "0.8rem",
                    },
                    backgroundColor: "#CFD8DC",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#ECEFF1",
                    },
                  }}
    
                  onClick={loginUserWithGoogle}
                >
                  {" "}
                  Login{" "}
                </Button>
              )}
            </Box>
          </Box>
          <AvatarMenu
            anchorEl={avatarEl}
            handleClose={handleAvatarClose}
            openMenu={openAvatarMenu}
          />
        </Toolbar>
        {!small ? (
          <Box component="div" sx={navbarStyle2}>
            <Box component="div" sx={navbarDiveStyle2}>
              {navList2.map((item, index) => {
                return (
                  <NavLink
                  key={`navbarItem${index}`}
                  to={`categories/${item.path}`}
                  className="link"
                >
                  <Typography key={`item${index}`} sx={typographyStyle2}>
                    {item.title}
                  </Typography>
                </NavLink>
                );
              })}
            </Box>
          </Box>
        ) : (
          null
        )}
      </AppBar>
      <Sidenav
        isSeller={props.isSeller}
        items={navList2}
        drawerStatus={drawerStatus}
        setDrawerStatus={setDrawerStatus}
      />
    </>
  );
};

export default Navbar;
