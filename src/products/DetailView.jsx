import React from 'react';
import { Box, Typography, Rating, Button, Grid } from '@mui/material';
import mob from '../images/mob.webp';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

const DetailView = () => {

    const detailImageStyle = {
        width: {
            md: '50%',
            sm: '60%',
            xs: '90%'
        },
        display: 'block',
        mx : "auto"
    }

    const gridBox2 = {
        display:"flex",
        justifyContent:{
            lg : "space-evenly",
            md : "space-evenly",
            sm : "space-between",
            xs : "space-between"
        },
        flexDirection:{
            lg:"row",
            md:"row",
            sm:"row",
            // xs:"column"
        },
        width:"100%",
        mx:{
            lg:"auto",
            md:"auto"
        },
        border:"1px solid green",
        backgroundColor : "yellow"
    }

    const gridItem1 = {
        backgroundColor:"green",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly"
    }


    return (
        <Grid container sx={{height:"10rem"}}>
            <Grid item md={6} sx={gridItem1} >
                <Box component='img' src={mob} sx={detailImageStyle} />
                <Box component="div" >
                    <Typography variant='h4'>Iphone 13 mini (128gb) Blue</Typography>
                    <Rating name="read-only" value={4} readOnly />
                    <Typography>Price : &#8377;69,900.00 </Typography>
                    <Typography>Model Name : Iphone</Typography>
                    <Typography>Brand : Apple</Typography>
                    <Typography>Storage : 128gb</Typography>
                    <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae in libero accusamus quisquam nobis, obcaecati, animi magni asperiores, architecto cum fugiat voluptate. Repudiandae, molestiae.</Typography>
                </Box>

            </Grid>
            <Grid item md={6} sx={{backgroundColor:"pink",height :"55rem"}} >
                <Box sx={gridBox2}  >
                    <Button variant='contained'><ShoppingBagOutlinedIcon /> Buy now </Button>
                    <Button variant='contained'><AddShoppingCartOutlinedIcon /> Add to Cart  </Button>
                    <Button variant='contained' ><RedeemOutlinedIcon /> Add to Wish List </Button>
                </Box>
                <Box component="div">
                    <Typography variant="h6">
                        Customer Reviews
                    </Typography>
                    
                </Box>

            </Grid>
        </Grid>
    )
}


export default DetailView;

