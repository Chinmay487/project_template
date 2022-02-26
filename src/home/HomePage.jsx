import React from 'react';
import ShortCategory from '../products/ShortCategory'
import {Box} from '@mui/material'


const HomePage = () => {

    return (
        <Box sx={{mt:"10rem" ,backgroundColor:'#F5F5F5'}}>
            <ShortCategory category="laptop" title="Laptop" />
            <ShortCategory category="camera" title="Camera" />
            <ShortCategory category="iphone" title="iPhone" />
            <ShortCategory category="clock" title="Clock" />
            <ShortCategory category="watch" title="Watch" />
        </Box>
    )
}

export default HomePage;