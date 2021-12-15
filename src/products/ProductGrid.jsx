import React from 'react';
import {Grid,useTheme,useMediaQuery} from '@mui/material'
import ProductCard from './ProductCard';



const ProductGrid = () => {


    const theme = useTheme()
    console.log(theme.breakpoints)
    const extraSmall = useMediaQuery(theme.breakpoints.down('xs'))
    const small = useMediaQuery(theme.breakpoints.down('sm'))
    const medium = useMediaQuery(theme.breakpoints.down('md'))
    const large = useMediaQuery(theme.breakpoints.down('lg'))
    const extraLarge = useMediaQuery(theme.breakpoints.down('xl'))

    console.log('extra small',extraSmall);
    console.log('small',small);
    console.log('medium',medium);
    console.log('large',large);
    console.log('extra large',extraLarge);

    const gridStyle2 = {
        // backgroundColor : "#ffffbb",
        alignItems:"center"
    }

    return (
        <Grid container justifyContent="space-evenly" sx={gridStyle2} rowGap={2}>
                    <Grid item>
                        <ProductCard/>
                    </Grid>
                    <Grid item>
                        <ProductCard/>
                    </Grid>
                    <Grid item>
                        <ProductCard/>
                    </Grid>
                    
                    {
                        !small ? <>
                        <Grid item>
                        <ProductCard/>
                    </Grid>
                    <Grid item>
                        <ProductCard/>
                    </Grid>
                    <Grid item>
                        <ProductCard/>
                    </Grid></> : null
                    }
                </Grid>
    );
}

export default ProductGrid;