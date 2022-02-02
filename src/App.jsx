import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./navbar/Navbar";
import AppRoutes from "./AppRoutes";
import { setCurrentAuthState } from "./user";

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
    </>
  );
};

export default App;
