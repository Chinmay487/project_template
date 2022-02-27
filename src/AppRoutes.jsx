import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./error/ErrorPage";
import HomePage from "./home/HomePage";
import CategoryView from "./products/CategoryView";
import DetailView from "./products/DetailView";
import ViewCart from "./products/ViewCart";
import ProfilePage from "./user/ProfilePage";
import ReviewPage from "./products/ReviewPage";

const AppRoutes = (props) => {
  return (
    <Routes>
      {window.localStorage.getItem("idToken") ? (
        <>
          <Route exact={true} path="/viewcart" element={<ViewCart />} />
          <Route exact={true} path="/profile" element={<ProfilePage />} />
        </>
      ) : null}
      <Route
        exact={true}
        path="/detail/:category/:key"
        element={<DetailView isSeller={props.isSeller} />}
      />
      <Route
        exact={true}
        path="categories/:category"
        element={<CategoryView />}
      />
      <Route exact={true} path="/" element={<HomePage />} />
      <Route exact={true} path="/review/:category/:key" element={<ReviewPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
