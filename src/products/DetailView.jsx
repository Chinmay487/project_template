import React from 'react';
import { Box, Typography, Rating, Button, Grid, TextField, useTheme } from '@mui/material';
// import mob from '../images/mob.webp';
import jcb from '../images/jcb.jpg'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import Review from './Review';

const DetailView = () => {

    const theme = useTheme();

    const gridBox2 = {
        display: "flex",
        justifyContent: {
            lg: "space-evenly",
            md: "space-evenly",
            sm: "space-between",
            xs: "space-between"
        },
        flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column"
        },
        width: "100%",
        mx: {
            lg: "auto",
            md: "auto"
        },
        my: {
            sm: '2%',
            xs: '2%'
        }
    }

    const buttonGroupStyle1 = {
        width: {
            lg:'30%',
            md:'30%',
            sm: '70%',
            xs: '70%'
        },
        my: {
            sm: '1%',
            xs: '1%'
        },
        mx: {
            sm: 'auto',
            xs: 'auto'
        }
    }

    const formStyle1 = { 
        display: 'flex',
        width:'90%',
        mx: 'auto',
        height: '20rem', 
        padding: '1%', 
        backgroundColor: '#ECEFF1',
        boxShadow: theme.shadows[7],
        flexDirection: 'column',
        justifyContent: 'space-evenly' 
    }


return (
    <Grid container rowGap={4} >
        <Grid item md={12}  >
            <Grid container columnGap={3} >
                <Grid item md={4.5}  >
                    <Box component='img' src={jcb} sx={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item md={7} >
                    <Box component="div" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' , padding:'1%' }} >
                        <Box>
                            <Typography variant='h5'>JCB 13 mini (128gb) Yellow</Typography>
                            <Rating name="read-only" value={4} readOnly />
                            <Typography>Price : &#8377;69,900.00 </Typography>
                            <Typography>Model Name : JCB</Typography>
                            <Typography>Brand : U5eLe55</Typography>
                            <Typography>Storage : 128gb</Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae in libero accusamus quisquam nobis, obcaecati.</Typography>
                        </Box>
                        <Box sx={gridBox2}    >
                            <Button variant='contained' sx={buttonGroupStyle1} ><ShoppingBagOutlinedIcon /> &nbsp; Buy now </Button>
                            <Button variant='contained' sx={buttonGroupStyle1} ><AddShoppingCartOutlinedIcon /> &nbsp; Add to Cart  </Button>
                            <Button variant='contained' sx={buttonGroupStyle1} ><RedeemOutlinedIcon /> &nbsp; Add to Wish List </Button>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Grid>

        <Grid item md={12} sx={{ backgroundColor: "#F5F5F5" }} >

            <Grid container spacing={3} sx={{ my: '2%' }} >
                <Grid item md={5} sm={12} xs={12} >
                    <Box component='form' sx={formStyle1} >
                        <Typography variant="h6" > Share your Experience </Typography>
                        <TextField id="filled-basic" label="Filled" variant="standard" />
                        <TextField placeholder='Share your Experience' maxRows={7} minRows={3} variant='standard' multiline />

                        <Box component='div' sx={{ width: '100%', display: 'flex', alignItems: "base-line" }} >
                            <Typography variant="subtitle1"> Rate Us &nbsp;
                            </Typography>
                            <Rating name="read-only" value={4} />
                        </Box>
                        <Button variant='outlined' sx={{ display:'block' , width:'30%' }} > Post </Button>

                    </Box>
                </Grid>
                <Grid item md={7}>
                    <Review/>
                    <Review/>
                    <Button variant="outlined" sx={{display:'block', mx:'auto'}} > View More </Button>
                </Grid>
            </Grid>

        </Grid>
    </Grid>
)
}


export default DetailView;

