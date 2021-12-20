import React from 'react';
import {Routes,Route} from 'react-router-dom';
import ErrorPage from './error/ErrorPage'
import HomePage from './home/HomePage'
import CategoryView from './products/CategoryView'
import DetailView from './products/DetailView';
import ViewCart from './products/ViewCart';
import AddProduct from './seller/AddProduct';
import Panel from './seller/Panel';
import UpdateProduct from './seller/UpdateProduct';
import Address from './user/Address';
import ProfilePage from './user/ProfilePage';
import NewSeller from './seller/NewSeller'


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact={true} path="/becomeseller" element={<NewSeller/>} />
            <Route exact={true} path="/address" element={<Address/>} />
            <Route exact={true} path="/profile" element={<ProfilePage/>} />
            <Route exact={true} path="/panel" element={<Panel/>} />
            <Route exact={true} path="/update/:key" element={<UpdateProduct/>}/>
            <Route exact={true} path="/addproduct" element={<AddProduct/>} />
            <Route exact={true} path="/viewcart" element={<ViewCart/>} />
            <Route exact={true} path="/detail/:key" element={<DetailView/>} />
            <Route exact={true} path="categories/:category/:subCategory" element={<CategoryView/>} />
            <Route exact={true} path="/" element={<HomePage/>} />
            <Route path='*' element={<ErrorPage/>} />
        </Routes>
    )
}

export default AppRoutes;
