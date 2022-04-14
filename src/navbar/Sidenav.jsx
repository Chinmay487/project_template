import React from "react";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useNavigate } from "react-router-dom";
import { drawerStyle } from "../styles";

const Sidenav = (props) => {
  const navigate = useNavigate();

  const onClickEvent = () => {
    props.setDrawerStatus(!props.drawerStatus);
  };

  const onLinkClickEvent = (url) => {
    navigate(url);
    onClickEvent();
  };

  return (
    <Drawer
      open={props.drawerStatus}
      onClose={onClickEvent}
      variant="temporary"
      anchor="left"
      sx={drawerStyle}
    >
      <List sx={{ marginTop: "3rem" }}>
        <ListItem
          divider
          button
          onClick={() => {
            onClickEvent();
          }}
          key="101"
        >
          <ListItemIcon key="1011" id="sidenav111">
            <MenuOpenOutlinedIcon key="10111" />
          </ListItemIcon>
        </ListItem>
        <ListItem
          divider
          button
          onClick={() => {
            onLinkClickEvent("/");
          }}
          sx={{ textAlign: "center" }}
          key="100"
        >
          <ListItemIcon key="1004">Homepage</ListItemIcon>
        </ListItem>

        {props.items.map((item, index) => {
          return (
              <ListItem
                key={`sidenav0${index}`}
                divider
                button
                sx={{ textAlign: "center" }}
                onClick={() => {
                  onLinkClickEvent(`categories/${item.path}`);
                }}
              >
                <ListItemIcon key={`sidenav2${index}`}>{item.title}</ListItemIcon>
              </ListItem>
          );
        })
      }
      </List>
    </Drawer>
  );
};

export default Sidenav;
