import React from 'react';
import {Menu,MenuItem} from '@mui/material';
import {menuItemStyle,menuStyle} from '../styles'
import {useNavigate} from 'react-router-dom';


const NavMenu = (props) => {

    let id = props.uid;
    const navigate = useNavigate();

    const onClickHandler = (item) => {

        const url1 = `/categories/${props.parent.toLowerCase().replace(/ /g, "")}/${item.toLowerCase().replace(/ /g, "")}`
        const url2 = `/${item.toLowerCase().replace(/ /g, "")}`
        const url = props.haveCategory ? url1 : url2 ;

        props.handleClose();
        navigate(url);
    }

    return (
        <Menu sx={menuStyle} anchorEl={props.anchorEl} open={props.openMenu} onClose={props.handleClose}>
            {
                props.NavMenuItemList.map((item)=>{
                    return <MenuItem onClick={()=>{
                        onClickHandler(item)
                    }} key={id++} sx={menuItemStyle} divider>{item}</MenuItem>
                })
            }
        </Menu>
    );
}

export default NavMenu


