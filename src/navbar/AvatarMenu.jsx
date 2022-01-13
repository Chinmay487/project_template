import React,{useEffect} from 'react';
import { Menu, MenuItem } from '@mui/material';
import { NavMenuItem } from './utilClasses';
import { useNavigate } from 'react-router-dom';
import {menuItemStyle,menuStyle} from '../styles';
import firebase from 'firebase/compat/app';
import {getFirebaseKeys} from '../user';


const AvatarMenu = (props) => {


    const navigate = useNavigate()
    const avatarMenuItems = [
        new NavMenuItem('Username', '', 'aa'),
        new NavMenuItem('Profile', '/profile', 'bb'),
        new NavMenuItem('View Cart', '/viewcart', 'cc'),
        new NavMenuItem('Become Seller', '/new_seller', 'dd'),
        new NavMenuItem('Add Product', '/addproduct', 'ff')
    ]
    // new NavMenuItem('Logout', '/logout', 'ee'),
    const onClickHandler = (path) => {

        props.handleClose();
        navigate(path);
    }

    const logoutUser = () => {
        getFirebaseKeys()
        .then((keys)=>{
            // console.log("logging Out")
            const app = firebase.initializeApp(keys);
            window.localStorage.removeItem('idToken');
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('photoURL');
            firebase.auth().signOut()
            .then(()=>{
                navigate('/');
                window.location.reload();
            })
            .catch("firebase error");

        })
        .catch((error)=>{
            console.log("something went wrong");
        })
        
    }
    return (
        <>
            <Menu sx={menuStyle} anchorEl={props.anchorEl} open={props.openMenu} onClose={props.handleClose}>
                {
                    avatarMenuItems.map((item) => {
                        return <MenuItem key={item.subKey + 'x'} onClick={() => {
                            onClickHandler(item.path)
                        }} sx={menuItemStyle} divider >
                            {item.name}
                        </MenuItem>
                    })
                }
                <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
        </>
    )

}

export default AvatarMenu;