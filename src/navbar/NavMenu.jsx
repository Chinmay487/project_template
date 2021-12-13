import React from 'react';
import {Menu,MenuItem} from '@mui/material';
// import {Link} from 'react-router-dom'
import {menuItemStyle,menuStyle} from './styles'


const NavMenu = (props) => {

    let id = props.uid
    return (
        <Menu sx={menuStyle} anchorEl={props.anchorEl} open={props.openMenu} onClose={props.handleClose}>
            {
                props.NavMenuItemList.map((item)=>{
                    return <MenuItem onClick={props.handleClose} key={id++} sx={menuItemStyle} divider>{item}</MenuItem>
                })
            }
        </Menu>
    );
}

export default NavMenu


