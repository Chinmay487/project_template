import React ,{useState,useEffect,useCallback} from 'react';
import {CssBaseline} from '@mui/material'
import Navbar from './navbar/Navbar'
import AppRoutes from './AppRoutes'
// import firebase from 'firebase/compat/app'
import { getUserData } from './user';



const App = () => {

    const isSeller=true;

    const [userData , setUserData] = useState(null);

    const fetchUserData = useCallback(()=>{
        getUserData()
        .then((data)=>{
            setUserData(data)
            console.log(data)
        })
        .catch((error)=>{
            console.log('something went wrong')
        })
    },[])

    useEffect(()=>{
        fetchUserData()
    },[fetchUserData])

    return (
        <>
            <CssBaseline/>
            <Navbar isSeller={isSeller}/>
            <AppRoutes isSeller={isSeller}/>
        </>
    )
}

export default App;
