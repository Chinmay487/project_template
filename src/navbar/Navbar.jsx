import React,{useState} from 'react';
import {AppBar,Toolbar, Typography,Box,TextField,IconButton,Avatar, useTheme , useMediaQuery} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidenav from './Sidenav';
import NavMenu from './NavMenu'
import {appBarStyle,navbarDivStyle,searchFormGroup,searchForm,searchFormInput,avatarStyle,navbarStyle2,navbarDiveStyle2,typographyStyle2} from './styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {NavLink} from 'react-router-dom'

const Navbar = () => {

    let id1 = 2000;
    let id2 = 3000;
    let id3 = 4000;

    const [avatarEl,setAvatarEl] = useState(null);

    const [fashionEl,setFashionEl] = useState(null);
    const [electronicsEl,setElectronicsEl] = useState(null);
    const [mobileEl,setMobileEl] = useState(null);
    const [grosseryEl,setGrosseryEl] = useState(null);
    const [stationaryEl,setStationaryEl] = useState(null);
    const [selfCareEl,setSelfCareEl] = useState(null);
    const [othersEl,setOthersEl] = useState(null);

    const [drawerStatus , setDrawerStatus]=useState(false);

    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    // const large = useMediaQuery(theme.breakpoints.down('xl'))

    // console.log(theme.breakpoints);


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


    const searchFormComponent = <Box sx={searchForm}>
                <TextField sx={searchFormInput}  label="search ..." variant="standard" />
                <IconButton>
                    <SearchOutlinedIcon sx={{fontSize : "2rem"}}/>
                </IconButton>
            </Box>

    return (
        <>
            <AppBar sx={appBarStyle} position="relative">
                <Toolbar>
                    <Box component="div" sx={navbarDivStyle}> 
                        {
                            small ? (<IconButton onClick={()=>{
                                setDrawerStatus(!drawerStatus);
                            }} ><MenuRoundedIcon color='primary' sx={{fontSize:'2.5rem'}} /></IconButton>)
                            :
                            (
                                <Typography color="black" variant="h4" >
                                   <NavLink to="/" className="link">ShopHeaven</NavLink>
                                </Typography>
                            )
                        }

                        {medium ? searchFormComponent : null}

                        <Box  sx={searchFormGroup}>
                            {!medium ? searchFormComponent : null}
                            <IconButton onClick={avatarClick} >
                                <Avatar sx={avatarStyle}>#</Avatar>
                            </IconButton>
                        </Box>
                        
                    </Box>
                <NavMenu uid={3000} anchorEl={avatarEl} handleClose={handleAvatarClose} openMenu={openAvatarMenu} NavMenuItemList={avatarMenuItems} />
                </Toolbar>
                    {
                        !small ? (<Box component="div" sx={navbarStyle2}>
                        <Box component="div" sx={navbarDiveStyle2}>
                            {
                                navList2.map((item) => {
                                    return <>
                                        <Typography key={id1++} sx={typographyStyle2} onClick={item.onMenuClick} >{item.title}</Typography>
                                        <NavMenu key={id2++} uid={id3} anchorEl={item.openEl} handleClose={item.onMenuClose} openMenu={item.onOpenMenu} NavMenuItemList={item.list} />
                                    </>
                                })
                            }
                        </Box>
                    </Box> ):null
                    }
            
            </AppBar>
            <Sidenav uid={10000} items={navList2} drawerStatus={drawerStatus} setDrawerStatus={setDrawerStatus} />
        </>
    );
}

export default Navbar;