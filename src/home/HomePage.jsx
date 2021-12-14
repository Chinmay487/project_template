import React from 'react';
import {Typography,Box,Grid} from '@mui/material';
import ProductCard from '../products/ProductCard'


const HomePage = () => {
    return (
        <Box sx={{width : "90%", mt : "2rem" , mx : "auto" }}>
            <Typography variant="h5" > Fashion </Typography>
            <Grid sx={{border : "1px solid #9c9c9c",borderRadius : "10px" , padding : "1%"}}  rowSpacing={1} justifyContent="space-evenly" container>
                <Grid item>
                    <ProductCard/>
                </Grid>
                <Grid item>
                    <ProductCard/>
                </Grid>
                <Grid item>
                    <ProductCard/>
                </Grid>
                <Grid item>
                    <ProductCard/>
                </Grid>
                <Grid item>
                    <ProductCard/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage;