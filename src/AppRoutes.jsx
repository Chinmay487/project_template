import React from 'react';
import {Routes,Route} from 'react-router-dom';
import ErrorPage from './error/ErrorPage'
import HomePage from './home/HomePage'
import CategoryView from './products/CategoryView'


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact={true} path="/categories/:category" element={<CategoryView/>}/>
            <Route exact={true} path="/" element={<HomePage/>}/>
            <Route path='*'  element={<ErrorPage/>} />
        </Routes>
    )
}

export default AppRoutes;
