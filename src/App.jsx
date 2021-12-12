import React from 'react';
import {CssBaseline} from '@mui/material'
import Navbar from './navbar/Navbar'
import AppRoutes from './AppRoutes'

const App = () => {
    return (
        <>
            <CssBaseline/>
            <Navbar/>
            <AppRoutes/>
        </>
    )
}

export default App;
