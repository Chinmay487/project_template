import React from 'react';
import { Box, Typography, Button, TextField, Slider, Grid, useTheme } from '@mui/material';


const AddProduct = () => {

    const theme = useTheme()

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
            lg : "80%",
            md : "80%",
            sm : "100%",
            xs : "100%"
        },
        mx: "auto",
        display: "flex",
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column"
        }
    }

    return (
        <>
            <Typography variant='h5' sx={{ textAlign: "center", my: "1rem" }} gutterBottom>
                Add New Product Form
            </Typography>
            <Box component='form' sx={addProductForm} encType="multipart/form-data"  >
                <TextField variant='standard' label='Enter the Product Name' />
                <TextField variant='outlined' label='Description' maxRows={7} minRows={3} multiline />


                <Grid container rowGap={3} >
                    <Grid item md={5} sm={12} xs={12}  >
                        <Typography>Price</Typography>
                        < TextField sx={{ width: {lg:"75%",md:"75%",sm:"100%",xs:"100%"} }} variant='standard' type="number" label='Price' />

                    </Grid>
                    <Grid item md={5} sm={12} xs={12} >
                        <Typography>Discount Price</Typography>
                        <TextField sx={{ width: {lg:"75%",md:"75%",sm:"100%",xs:"100%"} }} variant='standard' type="number" label='Discount Price' />
                    </Grid>

                </Grid>

                <Box component="div" sx={formBox2}>
                    <Typography variant='subtitle1' >
                        Quantity Available
                    </Typography>
                    <Slider aria-label="Quantity" valueLabelDisplay="auto"  min={10} max={50} sx={{ mx:{sm:"1%",xs:"1%"},width:{lg:'50%',md:'50%',sm:'100%',xs:'100%'}}} />
                </Box>

                <Box sx={formBox2}>
                    <Typography>
                        Thumbnail Image : <Box component="input" type="file" accept="image/png, image/jpeg" />
                    </Typography>
                    <Typography>
                        Detail Images : <Box component="input" type="file" multiple="multiple" accept="image/png, image/jpeg" />
                    </Typography>
                </Box>

                <Button variant="contained" sx={{ display: "block", width:{lg: "30%",md: "30%",sm:"50%",xs:"50%"}, mx: "auto" }} >Add Product</Button>
            </Box>
        </>
    )
}

export default AddProduct;