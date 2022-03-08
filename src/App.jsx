import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./navbar/Navbar";
import AppRoutes from "./AppRoutes";
import { setCurrentAuthState } from "./user";
import Footer from './footer/Footer';

const App = () => {
  const isSeller = true;

  if (window.localStorage.getItem("idToken")) {
    setCurrentAuthState();
  }

  return (
    <>
      <CssBaseline />
      <Navbar isSeller={isSeller} />
      <AppRoutes isSeller={isSeller} />
      <Footer/>
    </>
  );
};

export default App;
