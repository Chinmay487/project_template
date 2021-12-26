import React from 'react';

const Form = (props) =>{
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