import React from "react";
import { Drawer, List, ListItem, ListItemIcon, Collapse } from "@mui/material";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { drawerStyle } from "../styles";
import { Link } from "react-router-dom";

const Sidenav = (props) => {
  // let uid = props.uid

  const navigate = useNavigate();

  const onClickEvent = (url) => {
    navigate(url);
    props.setDrawerStatus(!props.drawerStatus);
  };

  const closeUnused = (index) => {
    for (let i = 0; i < props.items.length; i++) {
      if (i !== index && props.items[i].status === true) {
        props.items[i].handleList();
      }
    }
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
          key="111"
          divider
          button
          onClick={() => {
            props.setDrawerStatus(!props.drawerStatus);
          }}
        >
          <ListItemIcon>
            <MenuOpenOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem
          key="113"
          divider
          button
          onClick={() => {
            navigate("/");
            props.setDrawerStatus(!props.drawerStatus);
          }}
          sx={{ textAlign: "center" }}
        >
          <ListItemIcon key="114">Homepage</ListItemIcon>
        </ListItem>
       
        {props.items.map((item, index) => {
          return (
            <>
              <ListItem
                onClick={() => {
                  item.handleList();
                  closeUnused(index);
                }}
                key={`${props.uid}${props.uid}${props.subKey}`}
                divider
                button
                sx={{ textAlign: "center" }}
              >
                <ListItemIcon key={`${item.key}${index}0`}>
                  {item.title} {!item.status ? <ExpandMore /> : <ExpandLess />}{" "}
                </ListItemIcon>
              </ListItem>
              <Collapse in={item.status} imeout="auto">
                <List>
                  {item.list.map((listItem, index) => {
                    return (
                      <ListItem
                        key={`${item.key}${listItem.subKey}${index}`}
                        button
                        onClick={() => {
                          item.handleList();
                          onClickEvent(listItem.path);
                        }}
                      >
                        <ListItemIcon
                          key={`${item.key}${listItem.subKey}${index}1`}
                        >
                          {listItem.name}
                        </ListItemIcon>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </>
          );
        })}
      </List>
    </Drawer>
  );
};

// /categories/${props.parent.toLowerCase().replace(/ /g, "")}/${item.toLowerCase().replace(/ /g, "")}
export default Sidenav;
