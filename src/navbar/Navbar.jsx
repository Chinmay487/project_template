import React,{useState} from 'react';
import {AppBar,Toolbar, Typography,Box,TextField,IconButton,Avatar} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidenav from './Sidenav';
import Avatarmenu from './Avatarmenu'

const Navbar = () => {

    const [anchorEl,setAnchorEl] = useState(null)

    const avatarClick = (event) => {
        setAnchorEl(event.target)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const openMenu = Boolean(anchorEl)


    const appBarStyle = {
        backgroundColor : "#faffff" 
    }

    const navbarDivStyle = {
        width : "100%",
        display : "flex",
        justifyContent : "space-between"
    }


    const searchFormGroup = {
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "base-line",
        width : "40%",
        padding : "0 1%",
    }

    const searchForm = {
        display : "flex",
        width : "60%",
    }

    const searchFormInput = {
        width : "90%"
    }

    const avatarStyle = {
        backGroundColor : "whitesmoke"
    }

    return (
        <>
            <AppBar sx={appBarStyle} position="relative">
                <Toolbar>
                    <Box component="div" sx={navbarDivStyle}> 
                        <Typography color="black" variant="h3" >
                            ShopHeaven
                        </Typography>
                        {/* <Grid sx={navbarGrid}  container justifyContent="space-evenly"> */}
                        <Box sx={searchFormGroup}>
                            <Box sx={searchForm}>
                                <TextField sx={searchFormInput}  label="search ..." variant="standard" />
                                <IconButton>
                                    <SearchOutlinedIcon/>
                                </IconButton>
                            </Box>
                            <IconButton>
                                <Avatar onClick={avatarClick} sx={avatarStyle}>#</Avatar>
                            </IconButton>
                        </Box>
                        
                    </Box>
                </Toolbar>
                <Avatarmenu anchorEl={anchorEl} handleClose={handleClose} openMenu={openMenu}  />
            </AppBar>
            <Sidenav/>
        </>
    );
}

export default Navbar;