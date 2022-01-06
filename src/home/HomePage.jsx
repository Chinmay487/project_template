import React from 'react';
import ShortCategory from '../products/ShortCategory'
import {Box} from '@mui/material'


const HomePage = () => {

    return (
        <Box sx={{mt:"10rem" ,backgroundColor:'#F5F5F5'}}>
            <ShortCategory/>
            <ShortCategory/>
            <ShortCategory/>
        </Box>
    )
}

export default HomePage;