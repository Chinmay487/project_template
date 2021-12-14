import React from 'react';
import {Typography,Box} from '@mui/material';
import ProductCard from '../products/ProductCard'



const HomePage = () => {

    const homeDiv1Style = {
        // margin : "1% 5%",
        // height : "20rem",
        padding : "auto 5%",
        backgroundColor : "#cfed9a",
        display :"grid",
        gridTemplateColumns : "repeat(4,20%)",
        columnGap : "0.6%",
        rowGap : "3%"
        // display : "flex",
        // justifyContent : "space-evenly"
    }

    return (
        <Box component="div" sx={homeDiv1Style} >
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Box>
    )
}

export default HomePage;