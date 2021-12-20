import React,{useState} from 'react';
import {AppBar,Toolbar, Typography,Box,TextField,IconButton,Avatar, useTheme , useMediaQuery} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidenav from './Sidenav';
import NavMenu from './NavMenu'
import {appBarStyle,navbarDivStyle,searchFormGroup,searchForm,searchFormInput,avatarStyle,navbarStyle2,navbarDiveStyle2,typographyStyle2} from '../styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {NavLink} from 'react-router-dom';
import ListClass from './ListClass'

const Navbar = () => {

    let id1 = 2000;
    let id2 = 3000;
    let id3 = 4000;

    const [avatarEl,setAvatarEl] = useState(null);

    const [fashionEl,setFashionEl] = useState({el:null, status:false});
    const [electronicsEl,setElectronicsEl] = useState({el:null, status:false});
    const [mobileEl,setMobileEl] = useState({el:null, status:false});
    const [grosseryEl,setGrosseryEl] = useState({el:null, status:false});
    const [stationaryEl,setStationaryEl] = useState({el:null, status:false});
    const [selfCareEl,setSelfCareEl] = useState({el:null, status:false});
    const [othersEl,setOthersEl] = useState({el:null, status:false});

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
        'Username','Profile','Address','View Cart','Become Seller','Logout','Add Product'
    ]

    const navList2 = [
        new ListClass('Fashion',['All','kids','Men','Women'],fashionEl,setFashionEl),
        new ListClass('Electronics',['All','TV','Computer','Laptop','Accessories','Camera','toys',],electronicsEl,setElectronicsEl),
        new ListClass('Mobile',['All','Accessories','iOS','Android'],mobileEl,setMobileEl),
        new ListClass('Grossery',['All','Jam','Sauce','Spices','Papad','Pickle'],grosseryEl,setGrosseryEl),
        new ListClass('Stationary',['All','Books','Note Books','Office stuff'],stationaryEl,setStationaryEl),
        new ListClass('Self Care',['All','kids','Adults','Women'],selfCareEl,setSelfCareEl),
        new ListClass('Others',['All','Jewelary'],othersEl,setOthersEl)
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
                <NavMenu 
                    uid={3000} 
                    haveCategory = {false}
                    parent=""
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
                                navList2.map((item) => {
                                    return <>
                                        <Typography 
                                            key={id1++} 
                                            sx={typographyStyle2} 
                                            onClick={item.menuOpenFunction} 
                                        >
                                                {item.title}
                                        </Typography>
                                        <NavMenu 
                                            key={id2++} 
                                            uid={id3} 
                                            haveCategory = {true}
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
                    </Box> ):null
                    }
            
            </AppBar>
            <Sidenav 
                uid={10000} 
                items={navList2} 
                drawerStatus={drawerStatus} 
                setDrawerStatus={setDrawerStatus} 
            />
        </>
    );
}

export default Navbar;