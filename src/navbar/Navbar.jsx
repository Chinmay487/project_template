import React, { useState , useEffect , useCallback } from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, IconButton, Avatar, useTheme, useMediaQuery, Button } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidenav from './Sidenav';
import NavMenu from './NavMenu'
import { appBarStyle, navbarDivStyle, searchFormGroup, searchForm, searchFormInput, avatarStyle, navbarStyle2, navbarDiveStyle2, typographyStyle2 } from '../styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavLink } from 'react-router-dom';
import { ListClass, NavMenuItem } from './utilClasses';
import AuthForm from '../authentication/AuthForm';
import firebase from 'firebase/compat/app';


const Navbar = (props) => {

    

    // console.log(userData)

    const [avatarEl, setAvatarEl] = useState(null);


    const [fashionEl, setFashionEl] = useState({ el: null, status: false });
    const [electronicsEl, setElectronicsEl] = useState({ el: null, status: false });
    const [mobileEl, setMobileEl] = useState({ el: null, status: false });
    const [grosseryEl, setGrosseryEl] = useState({ el: null, status: false });
    const [stationaryEl, setStationaryEl] = useState({ el: null, status: false });
    const [selfCareEl, setSelfCareEl] = useState({ el: null, status: false });
    const [othersEl, setOthersEl] = useState({ el: null, status: false });

    const [drawerStatus, setDrawerStatus] = useState(false);

    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    const small = useMediaQuery(theme.breakpoints.down('sm'));


    const avatarClick = (event) => {
        setAvatarEl(event.target)
    }

    const handleAvatarClose = () => {
        setAvatarEl(null)
    }

    const openAvatarMenu = Boolean(avatarEl)


    const avatarMenuItems = [
        new NavMenuItem('Username', '','aa'),
        new NavMenuItem('Profile', '/profile','bb'),
        new NavMenuItem('View Cart', '/viewcart','cc'),
        new NavMenuItem('Become Seller', '/new_seller','dd'),
        new NavMenuItem('Logout', '/logout','ee'),
        new NavMenuItem('Add Product', '/addproduct','ff')
    ]

    const navList2 = [
        new ListClass(
            'Fashion',
            [
                new NavMenuItem('All', '/categories/fashion/all','a'),
                new NavMenuItem('kids', '/categories/fashion/kids','b'),
                new NavMenuItem('Men', '/categories/fashion/men','c'),
                new NavMenuItem('Women', '/categories/fashion/women','d')
            ],
            fashionEl,
            setFashionEl,
            'A'
        ),
        new ListClass(
            'Electronics',
            [
                new NavMenuItem('All','/categories/electronics/all','a'),
                new NavMenuItem('TV','/categories/electronics/tv','b'),
                new NavMenuItem('Computer','/categories/electronics/computer','c'),
                new NavMenuItem('Laptop','/categories/electronics/laptop','d'),
                new NavMenuItem('Accessories','/categories/electronics/accessories','e'),
                new NavMenuItem('Camera','/categories/electronics/camera','f'),
                new NavMenuItem('toys','/categories/electronics/toys','g')
            ],
            electronicsEl,
            setElectronicsEl,
            'B'
        ),
        new ListClass(
            'Mobile',
            [
                new NavMenuItem('All', '/categories/mobile/all','a'),
                new NavMenuItem('Accessories', '/categories/mobile/accessories','b'),
                new NavMenuItem('iOS', '/categories/mobile/ios','c'),
                new NavMenuItem('Android', '/categories/mobile/android','d')
            ],
            mobileEl,
            setMobileEl,
            'C'
        ),
        new ListClass(
            'Grossery',
            [
                new NavMenuItem('All','/categories/grossery/all','a'),
                new NavMenuItem('Jam','/categories/grossery/jam','b'),
                new NavMenuItem('Sauce','/categories/grossery/sauce','c'),
                new NavMenuItem('Spices','/categories/grossery/spices','d'),
                new NavMenuItem('Papad','/categories/grossery/papad','e'),
                new NavMenuItem('Pickle','/categories/grossery/pickle','f')
            ],
            grosseryEl,
            setGrosseryEl,
            'D'
        ),
        new ListClass(
            'Stationary',
            [
                new NavMenuItem('All','/categories/stationary/all','a'),
                new NavMenuItem('Books','/categories/stationary/books','b'),
                new NavMenuItem('Note Books','/categories/stationary/notebooks','c'),
                new NavMenuItem('Office stuff','/categories/stationary/office','d')
            ],
            stationaryEl,
            setStationaryEl,
            'E'
        ),
        new ListClass(
            'Self Care',
            [
                new NavMenuItem('All','/categories/selfcare/all','a'),
                new NavMenuItem('kids','/categories/selfcare/kids','b'),
                new NavMenuItem('Adults','/categories/selfcare/adults','c'),
                new NavMenuItem('Women','/categories/selfcare/women','d')
            ],
            selfCareEl,
            setSelfCareEl,
            'F'
        ),
        new ListClass(
            'Others',
            [
                new NavMenuItem('All', '/categories/others/all','a'),
                new NavMenuItem('Jewelary', '/categories/others/jewelary','b')
            ],
            othersEl,
            setOthersEl,
            'G'
        )
    ]


    const searchFormComponent =
        <Box sx={searchForm}>
            <TextField sx={searchFormInput} label="search ..." variant="standard" />
            <IconButton title="Search">
                <SearchOutlinedIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
        </Box>


    const logoStyle = {
        color: "#9E9E9E",
        fontWeight: "bold",
        textShadow: "1px 1px 10px #90A4AE"
    }

    const [dialogOpen, setDialogOpen] = useState(false)

    const handleDilogClose = () => {
        setDialogOpen(false);
    }

    const handleOpenDilog = () => {
        setDialogOpen(true);
    }

    return (
        <>
            <AppBar sx={appBarStyle} position="fixed">
                <Toolbar>
                    <Box component="div" sx={navbarDivStyle}>
                        {
                            small ? (<IconButton onClick={() => {
                                setDrawerStatus(!drawerStatus);
                            }} ><MenuRoundedIcon color='primary' sx={{ fontSize: '2.5rem' }} /></IconButton>)
                                :
                                (
                                    <Typography sx={logoStyle} variant="h4" >
                                        <NavLink to="/" className="link">ShopHeaven</NavLink>
                                    </Typography>
                                )
                        }

                        {small ? <Typography color="black" sx={logoStyle} variant="h5" >
                            <NavLink to="/" className="link">ShopHeaven</NavLink>
                        </Typography> : null}

                        {
                            (medium && !small) ? searchFormComponent : null
                        }

                        <Box sx={searchFormGroup}>
                            {medium ? null
                                : searchFormComponent}
                            {
                                1===2? 
                                <IconButton onClick={avatarClick}>
                                <Avatar sx={avatarStyle}> # </Avatar>
                                </IconButton> 
                                :
                                <Button variant="contained" sx={{fontSize:{sm:'0.8rem',xs:'0.8rem'},backgroundColor:'#CFD8DC',color:'black',"&:hover": {
                                    backgroundColor: "#ECEFF1"
                                }}} onClick={handleOpenDilog} > Login </Button>


                            }
                        </Box>

                    </Box>
                    <NavMenu
                        haveCategory={false}
                        anchorEl={avatarEl}
                        handleClose={handleAvatarClose}
                        openMenu={openAvatarMenu}
                        NavMenuItemList={avatarMenuItems}
                    />

                </Toolbar>
                {
                    !small ? (<Box component="div" sx={navbarStyle2}>
                        <Box component="div" sx={navbarDiveStyle2}>
                            {
                                props.isSeller ?
                                    <NavLink
                                        to="/panel"
                                        className="link">
                                        <Typography sx={typographyStyle2}>
                                            Panel
                                        </Typography>
                                    </NavLink>
                                    : null
                            }
                            {
                                navList2.map((item,index) => {
                                    return <>
                                        <Typography
                                            key={`${item.key}${index}`}
                                            sx={typographyStyle2}
                                            onClick={item.menuOpenFunction}
                                        >
                                            {item.title}
                                        </Typography>
                                        <NavMenu
                                            key={`${index}${item.key}${item.key}`}
                                            uid={item.key}
                                            haveCategory={true}
                                            parent={item.title}
                                            anchorEl={item.openEl}
                                            handleClose={item.menuCloseFunction}
                                            openMenu={item.onOpenMenu}
                                            NavMenuItemList={item.list}
                                        />
                                    </>
                                })
                            }
                        </Box>
                    </Box>) : <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTop: '1px solid #CFD8DC',
                        py: '2%'
                    }}>
                        {searchFormComponent
                        }
                    </Box>
                }

            </AppBar>
            <AuthForm handleDialogClose={handleDilogClose} dialogOpen={dialogOpen} />
            <Sidenav
                isSeller={props.isSeller}
                // uid={10000}
                items={navList2}
                drawerStatus={drawerStatus}
                setDrawerStatus={setDrawerStatus}
                handleOpenDilog={handleOpenDilog}
            />
        </>
    );
}

export default Navbar;