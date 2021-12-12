import React from 'react';
import {CssBaseline,Typography} from '@mui/material'
import Navbar from './navbar/Navbar'


const App = () => {
    return (
        <>
            <CssBaseline/>
            <Navbar/>
            <Typography variant="h1">
                Welcome To ShopHeaven
            </Typography>
        </>
    )
}

export default App;
