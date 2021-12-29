import React from 'react';
import { Grid, useTheme, useMediaQuery, Typography, CircularProgress, Box } from '@mui/material'
import ProductCard from './ProductCard';



const ProductGrid = (props) => {

    
    const theme = useTheme()

    const small = useMediaQuery(theme.breakpoints.down('sm'))

    const gridStyle2 = {
        alignItems: "center"
    }


    return (
        <>
            {
                props.prodGrid.length === 0 ? <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        my: "2rem"
                    }}>
                    <Typography variant="h6" >Fetching... &nbsp; </Typography>
                    <CircularProgress />
                </Box>
                    :
                    <Grid container justifyContent="space-evenly" sx={gridStyle2} rowGap={2}>
                        <Grid item>
                            <ProductCard item={props.prodGrid[0]} />
                        </Grid>
                        <Grid item >
                            <ProductCard item={props.prodGrid[1]} />
                        </Grid>
                        <Grid item>
                            <ProductCard item={props.prodGrid[2]} />
                        </Grid>

                        {
                            !small ? <>
                                <Grid item>
                                    <ProductCard item={props.prodGrid[3]} />
                                </Grid>
                                <Grid item>
                                    <ProductCard item={props.prodGrid[4]} />
                                </Grid>
                                <Grid item>
                                    <ProductCard item={props.prodGrid[5]} />
                                </Grid></> : null
                        }
                    </Grid>


            }

        </>
    );
}

export default ProductGrid;