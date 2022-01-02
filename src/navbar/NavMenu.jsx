import React from 'react';
import {Menu,MenuItem} from '@mui/material';
import {menuItemStyle,menuStyle} from '../styles'
import {useNavigate} from 'react-router-dom';


const NavMenu = (props) => {

    const navigate = useNavigate();

    const onClickHandler = (path) => {

        props.handleClose();
        navigate(path);
    }

    return (
        <Menu sx={menuStyle} anchorEl={props.anchorEl} open={props.openMenu} onClose={props.handleClose}>
            {
                props.NavMenuItemList.map((item,index)=>{
                    return <MenuItem key={`${props.uid}${item.subKey}${index}`} onClick={()=>{
                        onClickHandler(item.path)
                    }} sx={menuItemStyle} divider>{item.name}</MenuItem>
                })
            }
        </Menu>
    );
}

export default NavMenu


