import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Slider, Grid, useTheme ,CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

const ProductForm = (props) => {

    const [spinnerState, setSpinnerState] = useState(false)

    const navigate = useNavigate();
    const theme = useTheme();
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: '',
        discount_price: '',
        quantity: ''
    })

    const [thumbnail, setThumbnail] = useState(null)
    const [productImages, setProductImages] = useState([])
    // [image]

    const addProductForm = {
        width: {
            lg: "50%",
            md: "50%",
            sm: "90%",
            xs: "90%"
        },
        height: "40rem",
        my: "1rem",
        mx: "auto",
        padding: "3%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        boxShadow: theme.shadows[7],
    }

    const formBox2 = {
        width: {
            lg: "80%",
            md: "80%",
            sm: "100%",
            xs: "100%"
        },
        mx: "auto",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column"
        }
    }

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setProductData((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }



    const onFormSubmit = (event) => {

        event.preventDefault();



        const url = 'http://127.0.0.1:8000/seller/addproduct';
        const data = new FormData();
        data.append('price', productData.price);
        data.append('discount_price', productData.discount_price);
        data.append('description', productData.description);
        data.append('title', productData.title);
        data.append('quantity', productData.quantity);
        data.append('thumbnail', thumbnail);
        productImages.forEach((file, index) => {
            let name = 'image' + index
            data.append(name, file)

        })
        axios.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(
                (response) => {
                    navigate('/panel');
                }
            )
            .catch((error) => {
                alert("something went Wrong\nPlease try again")
            })
    }

    return (
        <>
            {

                spinnerState ? <CircularProgress /> : <Form isUpdate = {props.isUpdate} />
                    
            }
        </>
    )
}

export default ProductForm;