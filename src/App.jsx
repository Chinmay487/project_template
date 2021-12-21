import React from 'react';
import {CssBaseline} from '@mui/material'
import Navbar from './navbar/Navbar'
import AppRoutes from './AppRoutes'

const App = () => {

    const isSeller=true;

    return (
        <>
            <CssBaseline/>
            <Navbar isSeller={isSeller}/>
            <AppRoutes isSeller={isSeller}/>
        </>
    )
}

export default App;
