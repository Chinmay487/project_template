import React,{useState} from 'react';
import { Box, Typography, Button, TextField, Slider, Grid, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Form = (props) =>{

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
        props.updateSpinnerState()
        axios.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(
                (response) => {
                    props.updateSpinnerState()
                    navigate('/panel');
                }
            )
            .catch((error) => {
                alert("something went Wrong\nPlease try again")
            })
    }

    return(
        <>
        <Typography variant='h5' sx={{ textAlign: "center", my: "1rem" }} gutterBottom>
                        {props.isUpdate ? "Update Details" : "Add New Product Form"}
                    </Typography>
            {
                props.isUpdate ?
                    <Typography
                        variant="h5"
                        color="error"
                        sx={{
                            textAlign:
                                "center",
                            my: "1rem",
                            mx: '3%'
                        }}
                    >NOTE : Fill only fields You want to change
                    </Typography>
                    :
                    null
            }
            <Box
                component='form'
                onSubmit={onFormSubmit}
                sx={addProductForm}
                contentType="multipart/form-data"
            >
                <TextField
                    name="title"
                    value={productData.title}
                    onChange={onInputChange}
                    variant='standard'
                    label='Enter the Product Name'
                    required={!props.isUpdate}
                />

                <TextField
                    variant='outlined'
                    name="description"
                    value={productData.description}
                    onChange={onInputChange}
                    label='Description'
                    maxRows={7}
                    minRows={3}
                    multiline
                    required={!props.isUpdate}
                />


                <Grid container rowGap={3} >
                    <Grid item md={5} sm={12} xs={12}  >
                        <Typography>Price</Typography>
                        < TextField
                            name="price"
                            value={productData.price}
                            onChange={onInputChange}
                            sx={{
                                width: {
                                    lg: "75%",
                                    md: "75%",
                                    sm: "100%",
                                    xs: "100%"
                                }
                            }}
                            variant='standard'
                            type="number"
                            label='Price'
                            required={!props.isUpdate}
                        />

                    </Grid>
                    <Grid item md={5} sm={12} xs={12} >
                        <Typography>Discount Price</Typography>
                        <TextField
                            name="discount_price"
                            value={productData.discount_price}
                            onChange={onInputChange}
                            sx={{
                                width: {
                                    lg: "75%",
                                    md: "75%",
                                    sm: "100%",
                                    xs: "100%"
                                }
                            }}
                            variant='standard'
                            type="number"
                            label='Discount Price'
                            required={!props.isUpdate}
                        />
                    </Grid>

                </Grid>

                <Box component="div" sx={formBox2}>
                    <Typography variant='subtitle1' >
                        Quantity Available
                    </Typography>
                    <Slider
                        aria-label="Quantity"
                        name="quantity"
                        value={productData.quantity}
                        onChange={onInputChange}
                        valueLabelDisplay="auto"
                        min={10}
                        max={50}
                        sx={{
                            mx: {
                                sm: "1%",
                                xs: "1%"
                            },
                            width: {
                                lg: '50%',
                                md: '50%',
                                sm: '80%',
                                xs: '80%'
                            }

                        }}
                        required={!props.isUpdate}
                    />
                </Box>

                <Box sx={formBox2}>
                    <Typography>
                        Thumbnail Image :
                        <Box
                            name="thumbnail"
                            onChange={(event) => { setThumbnail(event.target.files[0]) }}
                            component="input"
                            type="file"
                            accept="image/png, image/jpeg"
                            required={!props.isUpdate}
                        />
                    </Typography>
                    <Typography>
                        Detail Images :
                        <Box
                            name="productImages"
                            onChange={(event) => {
                                setProductImages((oldData) => {
                                    return [...oldData, ...event.target.files]
                                })
                            }}
                            component="input"
                            type="file"
                            multiple
                            accept="image/png, image/jpeg"
                            required={!props.isUpdate}
                        />
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        display: "block",
                        width: {
                            lg: "30%",
                            md: "30%",
                            sm: "50%",
                            xs: "50%"
                        },
                        mx: "auto"
                    }} >
                    {props.isUpdate ? "update product" : "Add Product"}
                </Button>
            </Box>
        </>
    )
}

export default Form;