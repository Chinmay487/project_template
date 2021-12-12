import React,{useState} from 'react';
import {AppBar,Toolbar, Typography,Box,TextField,IconButton,Avatar} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidenav from './Sidenav';
import NavMenu from './NavMenu'
import {appBarStyle,navbarDivStyle,searchFormGroup,searchForm,searchFormInput,avatarStyle,navbarStyle2,navbarDiveStyle2,typographyStyle2} from './styles';



const Navbar = () => {

    let id = 2000;
    const [avatarEl,setAvatarEl] = useState(null);

    const [fashionEl,setFashionEl] = useState(null);
    const [electronicsEl,setElectronicsEl] = useState(null)
    const [mobileEl,setMobileEl] = useState(null)
    const [grosseryEl,setGrosseryEl] = useState(null)
    const [stationaryEl,setStationaryEl] = useState(null)
    const [selfCareEl,setSelfCareEl] = useState(null)
    const [othersEl,setOthersEl] = useState(null)

    const avatarClick = (event) => {
        setAvatarEl(event.target)
    }

    const handleAvatarClose = () => {
        setAvatarEl(null)
    }

    const openAvatarMenu = Boolean(avatarEl)


    const avatarMenuItems = [
        'Username','Profile','Address','Whishlist','My Cart','Become Seller','Logout'
    ]

    const navList2 = [
        {
            title : 'Fashion',
            list : [
                'kids','Men','Women'
            ],
            openEl : fashionEl,
            onMenuClick : (event) => {setFashionEl(event.target)},
            onMenuClose : () => {setFashionEl(null)},
            onOpenMenu : Boolean(fashionEl)
        },
        {
            title : 'Electronics',
            list : [
                'TV','Computer','Laptop','Accessories','Camera','toys',
            ],
            openEl : electronicsEl,
            onMenuClick : (event) => {setElectronicsEl(event.target)},
            onMenuClose : () => {setElectronicsEl(null)},
            onOpenMenu : Boolean(electronicsEl)
        },
        {
            title : 'Mobile',
            list : [
                'Accessories','iOS','Android'
            ],
            openEl : mobileEl,
            onMenuClick : (event) => {setMobileEl(event.target)},
            onMenuClose : () => {setMobileEl(null)},
            onOpenMenu : Boolean(mobileEl)
        },
        {
            title : 'Grossery',
            list : [
                'Jam','Sauce','Spices','Papad','Pickle'
            ],
            openEl : grosseryEl,
            onMenuClick : (event) => {setGrosseryEl(event.target)},
            onMenuClose : () => {setGrosseryEl(null)},
            onOpenMenu : Boolean(grosseryEl)
        },
        {
            title : 'Stationary',
            list : [
                'Books','Note Books','Office stuff'
            ],
            openEl : stationaryEl,
            onMenuClick : (event) => {setStationaryEl(event.target)},
            onMenuClose : () => {setStationaryEl(null)},
            onOpenMenu : Boolean(stationaryEl)
        },
        {
            title : 'Self Care',
            list : [
                'kids','Adults','Women'
            ],
            openEl : selfCareEl,
            onMenuClick : (event) => {setSelfCareEl(event.target)},
            onMenuClose : () => {setSelfCareEl(null)},
            onOpenMenu : Boolean(selfCareEl)
        },
        {
            title : 'Others',
            list : [
                'Jewelary'
            ],
            openEl : othersEl,
            onMenuClick : (event) => {setOthersEl(event.target)},
            onMenuClose : () => {setOthersEl(null)},
            onOpenMenu : Boolean(othersEl)
        }
    ]




    return (
        <>
            <AppBar sx={appBarStyle} position="relative">
                <Toolbar>
                    <Box component="div" sx={navbarDivStyle}> 
                        <Typography color="black" variant="h4" >
                            ShopHeaven
                        </Typography>
                        {/* <Grid sx={navbarGrid}  container justifyContent="space-evenly"> */}
                        <Box sx={searchFormGroup}>
                            <Box sx={searchForm}>
                                <TextField sx={searchFormInput}  label="search ..." variant="standard" />
                                <IconButton>
                                    <SearchOutlinedIcon sx={{fontSize : "2rem"}}/>
                                </IconButton>
                            </Box>
                            <IconButton>
                                <Avatar onClick={avatarClick} sx={avatarStyle}>#</Avatar>
                            </IconButton>
                        </Box>
                        
                    </Box>
                <NavMenu anchorEl={avatarEl} handleClose={handleAvatarClose} openMenu={openAvatarMenu} NavMenuItemList={avatarMenuItems} />
                </Toolbar>
                    <Box component="div" sx={navbarStyle2}>
                        <Box component="div" sx={navbarDiveStyle2}>
                            {
                                navList2.map((item) => {
                                    return <>
                                        <Typography key={id++} sx={typographyStyle2} onClick={item.onMenuClick}  >{item.title}</Typography>
                                        <NavMenu anchorEl={item.openEl} handleClose={item.onMenuClose} openMenu={item.onOpenMenu} NavMenuItemList={item.list} />
                                    </>
                                })
                            }
                        </Box>
                    </Box> 
            

            </AppBar>
            <Sidenav/>
        </>
    );
}

export default Navbar;