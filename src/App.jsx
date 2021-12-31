import React,{useEffect} from 'react';
import {CssBaseline} from '@mui/material'
import Navbar from './navbar/Navbar'
import AppRoutes from './AppRoutes'
import {getKeys} from './authentication/authConfig'

const App = () => {

    const isSeller=true;

    useEffect(()=>{
        getKeys()
    },[getKeys])

    return (
        <>
            <CssBaseline/>
            <Navbar isSeller={isSeller}/>
            <AppRoutes isSeller={isSeller}/>
        </>
    )
}

export default App;
