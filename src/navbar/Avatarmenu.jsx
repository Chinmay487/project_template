import React from 'react';
import {Menu,MenuItem} from '@mui/material'

const Avatarmenu = (props) => {

    const menuStyle = {
        marginTop : "1rem",
        width : "25rem",

    }

    const menuItemStyle = {
        height : "3rem",
        width : "8rem",
    }

    return (
        <Menu sx={menuStyle} anchorEl={props.anchorEl} open={props.openMenu} onClose={props.handleClose}>
            <MenuItem sx={menuItemStyle} divider>Username</MenuItem>
            <MenuItem sx={menuItemStyle} divider> Profile </MenuItem>
            <MenuItem sx={menuItemStyle} divider> Address </MenuItem>
            <MenuItem sx={menuItemStyle} divider> Whishlist </MenuItem>
            <MenuItem sx={menuItemStyle} divider> My Cart </MenuItem>
            <MenuItem sx={menuItemStyle} divider>Become Seller</MenuItem>
            <MenuItem sx={menuItemStyle} divider> Logout </MenuItem>
        </Menu>
    );
}

export default Avatarmenu;