import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  IconButton,
  Avatar,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Sidenav from "./Sidenav";
import {
  appBarStyle,
  navbarDivStyle,
  searchFormGroup,
  searchForm,
  searchFormInput,
  avatarStyle,
  navbarStyle2,
  navbarDiveStyle2,
  typographyStyle2,
} from "../styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";
import AuthForm from "../authentication/AuthForm";
import AvatarMenu from "./AvatarMenu";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
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
  const medium = useMediaQuery(theme.breakpoints.down("md"));
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

  const searchFormComponent = (
    <Box sx={searchForm}>
      <TextField sx={searchFormInput} label="search ..." variant="standard" />
      <IconButton title="Search">
        <SearchOutlinedIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
    </Box>
  );

  const logoStyle = {
    color: "#9E9E9E",
    fontWeight: "bold",
    textShadow: "1px 1px 10px #90A4AE",
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDilogClose = () => {
    setDialogOpen(false);
  };

  const handleOpenDilog = () => {
    setDialogOpen(true);
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

            {/* {medium && !small ? searchFormComponent : null} */}

            <Box sx={searchFormGroup}>
              {/* {medium ? null : searchFormComponent} */}
              {userData !== null ? (
                <IconButton onClick={avatarClick}>
                  {/* <Avatar sx={avatarStyle}  alt="#" >
                    
                  </Avatar> */}
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
          // <Box
          //   sx={{
          //     width: "100%",
          //     display: "flex",
          //     justifyContent: "center",
          //     alignItems: "center",
          //     borderTop: "1px solid #CFD8DC",
          //     py: "2%",
          //   }}
          // >
          //   {searchFormComponent}
          // </Box>
          null
        )}
      </AppBar>
      <AuthForm handleDialogClose={handleDilogClose} dialogOpen={dialogOpen} />
      <Sidenav
        isSeller={props.isSeller}
        items={navList2}
        drawerStatus={drawerStatus}
        setDrawerStatus={setDrawerStatus}
        handleOpenDilog={handleOpenDilog}
      />
    </>
  );
};

export default Navbar;
