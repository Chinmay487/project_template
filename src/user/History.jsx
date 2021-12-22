import React from 'react';
import { Grid, Typography, Box, useTheme, Button } from '@mui/material';
import jcb from '../images/jcb.jpg';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useNavigate} from 'react-router-dom';


const History = (props) => {

    const theme = useTheme()

    const profileGridItem = {
        display: "flex",
        flexDirection: "column",
        justifyContent: {
            lg: 'space-evenly',
            md: 'space-evenly',
            sm: 'center',
            xs: 'center'
        },
        py:{
            lg:'0%',
            md:'0%',
            sm:'3%',
            xs:'3%'
        }
    }

    const profileGridItemText = {
        mx: {
            lg: '0%',
            md: '0%',
            sm: '5%',
            xs: '5%'
        }
    }

    const quantity = {
        px: {
            lg: "0",
            md: "0",
            sm: "5%",
            xs: "5%"
        },
        py: '2%',
        width: '100%',
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center'
    }

    const cartButtons = {
        width: '100%',
        height: "100%",
        display: 'flex',
        flexDirection: {
            lg : `${props.isSeller ? "column" : null}`,
            md : `${props.isSeller ? "column" : null}`,
            sm : "column",
            xs : "column"
        },
        justifyContent: `${props.isSeller ? "space-evenly" : "center"}`,
        mx : "1%"
    }

    const navigate = useNavigate()

    const gotoUpdate = () => {
        navigate('/update/3')
    }

    return (
        <Grid item sm={12} xs={12}>
            <Grid container sx={{ boxShadow: theme.shadows[5], backgroundColor: '#F5F5F5' }} >
                <Grid item md={3} sm={12} xs={12} >
                    <Box component="center">
                        <Box component="img" src={jcb} sx={{ maxWidth: { lg: "80%", md: "80%", sm: "80%", xs: "80%" } }} />
                    </Box>
                </Grid>
                <Grid item md={7} sm={12} xs={12} sx={profileGridItem} >
                    <Link to='/detail/3' className='link'>
                        <Typography sx={profileGridItemText} variant="h6" >
                            JCB 13 mini (128gb) yellow </Typography>
                    </Link>
                    <Typography sx={profileGridItemText} variant="h6"> Price : 69,999 </Typography>
                    {
                        props.is_cart ? <Box sx={quantity}>
                            <Typography variant='h6'> Qty : &nbsp;</Typography>
                            <Box component="select" sx={{ fontSize: "1.3rem" }} >
                                <Box component="option" value={1} selectteed>1</Box>
                                <Box component="option" value={2} selectteed>2</Box>
                                <Box component="option" value={3} selectteed>3</Box>
                                <Box component="option" value={4} selectteed>4</Box>
                                <Box component="option" value={5} selectteed>5</Box>
                                <Box component="option" value={6} selectteed>6</Box>
                                <Box component="option" value={7} selectteed>7</Box>
                                <Box component="option" value={8} selectteed>8</Box>
                                <Box component="option" value={9} selectteed>9</Box>
                                <Box component="option" value={10} selectteed>10</Box>
                            </Box>
                        </Box> : <Typography sx={profileGridItemText} variant="h6"> Qty : 12 </Typography>
                    }
                </Grid>
                <Grid item md={2} sm={12} xs={12} sx={profileGridItem}>
                    {
                        (props.is_cart || props.isSeller) ?
                            <Box sx={cartButtons}>
                                <Button variant='text' color='error' sx={{ width:`${props.isSeller ? '100%' : '30%'}`,height : `${props.isSeller ? "auto":"2rem"}` }}>
                                    <DeleteForeverIcon sx={{ color: "red" }} />
                                </Button>
                                {
                                    props.isSeller ? <Button variant="outlined" onClick={gotoUpdate} sx={{width:{lg:"50%",md:"50%",sm:"60%",xs:"60%"},mx:"auto"}}  >Update</Button> : null
                                }
                            </Box>
                            : <Typography sx={profileGridItemText} variant="h6"> Date : 21-02-2021 </Typography>
                    }
                </Grid>
            </Grid>

        </Grid>


    )
}


export default History;