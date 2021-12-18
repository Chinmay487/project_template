import React from 'react';
import { Box, Typography, Rating, Button, Grid ,TextField , TextareaAutosize } from '@mui/material';
import mob from '../images/mob.webp';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';


const DetailView = () => {

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
            sm: "row"
        },
        width: "100%",
        mx: {
            lg: "auto",
            md: "auto"
        }
    }

    return (
        <Grid container sx={{ height: "10rem" }}>
            <Grid item md={12}  >
                <Grid container >
                    <Grid item md={4.5}>
                        <Box component='img' src={mob} sx={{ maxWidth: '100%' }} />
                    </Grid>
                    <Grid item md={7.5} >
                        <Box component="div" sx={{ height:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }} >
                            <Box>
                                <Typography variant='h4'>Iphone 13 mini (128gb) Blue</Typography>
                                <Rating name="read-only" value={4} readOnly />
                                <Typography>Price : &#8377;69,900.00 </Typography>
                                <Typography>Model Name : Iphone</Typography>
                                <Typography>Brand : Apple</Typography>
                                <Typography>Storage : 128gb</Typography>
                                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae in libero accusamus quisquam nobis, obcaecati, animi magni asperiores, architecto cum fugiat voluptate. Repudiandae, molestiae.</Typography>
                            </Box>
                            <Box sx={gridBox2}  >
                                <Button variant='contained'><ShoppingBagOutlinedIcon /> Buy now </Button>
                                <Button variant='contained'><AddShoppingCartOutlinedIcon /> Add to Cart  </Button>
                                <Button variant='contained'><RedeemOutlinedIcon /> Add to Wish List </Button>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} sx={{ backgroundColor: "pink", height: "55rem" }} >

            <Grid container >
                <Grid item md={4}>
                    <form>
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <Rating name="read-only" value={4} />
                    <TextareaAutosize placeholder='Share your Experience'  minRows={5} />
                    <Button type='submit' variant='outlined' > Post Experience</Button>
                    </form>
                </Grid>
                <Grid item md={8}>

                </Grid>
            </Grid>

            </Grid>
        </Grid>
    )
}


export default DetailView;

