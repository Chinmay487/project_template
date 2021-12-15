import React from 'react';
import {Typography,Box,Button} from '@mui/material';
import ProductGrid from './ProductGrid';
import {useNavigate} from 'react-router-dom'

const ShortCategory = () => {

    const navigate = useNavigate()

    const productGridBox1 = {
        borderTop:"1px solid #9c9c9c",
        borderBottom : "1px solid #9c9c9c",
        width : {
            xl : "90%",
            lg : "90%",
            md : "95%",
            sm : "100%",
            xs : "100%"
        },
        my: "1rem",
        mx : "auto",
        backgroundColor : "#fcfcfc",
    }
    
   
    const buttonSyle1 = {
        display:"block",
        mx : "auto",
        my:"1rem"
    }

    return (
        <Box sx={productGridBox1} component="div">
                <Typography variant="h3" sx={{textAlign:"center"}} >Fashion</Typography>
                <ProductGrid/>
                <Button sx={buttonSyle1} onClick={()=>{navigate('/wishlist')}} variant="outlined">View More</Button>
            </Box>
    )
}


export default ShortCategory;
