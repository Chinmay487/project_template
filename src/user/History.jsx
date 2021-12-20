import React from 'react';
import { Grid, Typography, Box, useTheme, IconButton, Slider } from '@mui/material';
import jcb from '../images/jcb.jpg';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const History = (props) => {

    const theme = useTheme()


    const profileGridItem = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }

    const profileGridItemText = {
        mx: {
            lg: '0%',
            md: '0%',
            sm: '5%',
            xs: '5%'
        }
    }

    return (
        <Grid item sm={12} xs={12}>
            <Grid container sx={{ boxShadow: theme.shadows[5] }} >
                <Grid item md={3} sm={12} xs={12} >
                    <Box component="center">
                        <Box component="img" src={jcb} sx={{ maxWidth: { lg: "80%", md: "80%", sm: "80%", xs: "80%" } }} />
                    </Box>
                </Grid>
                <Grid item md={5} sm={12} xs={12} sx={profileGridItem} >
                    <Link to='/detail/3' className='link'>
                        <Typography sx={profileGridItemText} variant="h6" >
                            JCB 13 mini (128gb) yellow </Typography>
                    </Link>
                    <Typography sx={profileGridItemText} variant="h6"> Price : 69,999 </Typography>
                    {
                        props.is_cart ?  <Box sx={{width:'100%' , display:'flex', justifyContent:{lg:'space-evenly',md:'space-evenly',sm:'center',xs:'center'}, alignItems:'center'}}>
                            <Typography> Qty : &nbsp;
                            </Typography>
                            <Slider aria-label="Quantity" size='small' valueLabelDisplay="auto"  min={1} max={10} sx={{ mx:{sm:"1%",xs:"1%"},width:{lg:'50%',md:'50%',sm:'50%',xs:'50%'}}} />
                        </Box> : <Typography sx={profileGridItemText} variant="h6"> Qty : 12 </Typography> 
                    }
                </Grid>
                <Grid item md={4} sm={12} xs={12} sx={profileGridItem}>
                    {
                        props.is_cart ?
                            <IconButton  >
                                <DeleteForeverIcon sx={{ color: "red" }} />
                            </IconButton>
                            : <Typography sx={profileGridItemText} variant="h6"> Date : 21-02-2021 </Typography>
                    }
                </Grid>
                {/* <Grid item>

                </Grid> */}
            </Grid>

        </Grid>


    )
}


export default History;