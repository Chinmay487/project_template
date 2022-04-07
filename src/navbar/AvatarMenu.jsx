import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { NavMenuItem } from "./utilClasses";
import { useNavigate } from "react-router-dom";
import { menuItemStyle, menuStyle } from "../styles";
import { logoutUser } from "../user";

const AvatarMenu = (props) => {
  const navigate = useNavigate();
  const avatarMenuItems = [
    new NavMenuItem("Profile", "/profile", "bb"),
    new NavMenuItem("View Cart", "/viewcart", "cc")
  ];

  const onClickHandler = (path) => {
    props.handleClose();
    navigate(path);
  };

  const signoutUser = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <>
      <Menu
        sx={menuStyle}
        anchorEl={props.anchorEl}
        open={props.openMenu}
        onClose={props.handleClose}
      >
        {avatarMenuItems.map((item) => {
          return (
            <MenuItem
              key={item.subKey + "x"}
              onClick={() => {
                onClickHandler(item.path);
              }}
              sx={menuItemStyle}
              divider
            >
              {item.name}
            </MenuItem>
          );
        })}
        <MenuItem onClick={signoutUser}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default AvatarMenu;
