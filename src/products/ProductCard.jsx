import React from 'react';
import {Box, Typography} from '@mui/material'
import lizard from '../images/lizard.jpg'
import jcb from '../images/jcb.jpg'
import {Link} from 'react-router-dom'




// {width: {xs:"100%",sm : "50%",md: "40%",xl : "20%"}}

const ProductCard = () => {

    const cardStyle1 = {
        // width: {
        //     xs:"100%",
        //     sm : "50%",
        //     md: "40%",
        //     xl : "20%"
        // },
        height : "20rem",
        margin : "auto 1%",
        backgroundColor : "#e6e4e3",
        borderRadius : "10px",
        // padding : "1%"
    }

    const cardDivStyle1 = {
        width : "100%",
        height : "10rem",

        // backgroundImage : `url(${lizard})`,
        // backgroundPosition : "center",
        // backgroundSize : "cover"
    }

    const cardDivStyle2 = {
        textAlign : "center"
    }

    return (
        <Box sx={cardStyle1} component="div" elevation={2}>
            <Box component="img" src={jcb}  sx={cardDivStyle1} />
            <Box component="div" sx={cardDivStyle2}>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit quisquam cum ab officia laboriosam?
                </Typography>
                <Typography variant="h5">
                    Price : 20000
                </Typography> 
            </Box>
        </Box>
    )
}


export default ProductCard;