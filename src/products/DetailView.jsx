import React,{useCallback, useEffect,useState} from 'react';
import { Box, Typography, Rating, Button, Grid, TextField, useTheme } from '@mui/material';
// import mob from '../images/mob.webp';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Review from './Review';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';


const DetailView = (props) => {

    const [index , setIndex] = useState(0)

    const theme = useTheme();
    const {key} = useParams();

    const [productData , setProductData] = useState({
        title:'',
        description:'',
        price : '',
        discountPrice : '',
        quantity:'',
        productImages:[]
    });

    setInterval(()=>{
        const l = productData.productImages.length
        if ( l > 0){
            setIndex((oldIndex)=>{
                return (oldIndex + 1) % l
            })    
        }
    },4000)

    const fetchData = useCallback(()=>{
        axios.get(`http://127.0.0.1:8000/client/detail/${key}`)
        .then((response)=>response.data)
        .then((data)=>{
            setProductData({
                title : data.title,
                description : data.description,
                price : data.price,
                discountPrice : data.discount_price,
                quantity : data.quantity,
                productImages : data.images
            })
        })
        .catch((error)=>{
            alert('something went wrong')
        })
    },[])

    useEffect(()=>{
        console.log("hello")
        fetchData()
    },[fetchData])

    console.log(productData)


    const gridBox2 = {
        display: "flex",
        justifyContent: {
            lg: "space-evenly",
            md: "space-evenly",
            sm: "space-between",
            xs: "space-between"
        },
        flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column"
        },
        width: "100%",
        mx: {
            lg: "auto",
            md: "auto"
        },
        my: {
            sm: '2%',
            xs: '2%'
        }
    }

    const buttonGroupStyle1 = {
        width: {
            lg: '30%',
            md: '30%',
            sm: '70%',
            xs: '70%'
        },
        my: {
            sm: '1%',
            xs: '1%'
        },
        mx: {
            sm: 'auto',
            xs: 'auto'
        }
    }

    const formStyle1 = {
        display: 'flex',
        width: '90%',
        mx: 'auto',
        height: '20rem',
        padding: '1%',
        backgroundColor: '#ECEFF1',
        boxShadow: theme.shadows[7],
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }


    const navigate = useNavigate();

    const gotoUpdate = () => {
        navigate('/update/3')
    }

    

    return (
        <Grid container rowGap={4} >
            <Grid item md={12}  >
                <Grid container columnGap={3} >
                    <Grid item md={4.5}  >
                        <Box component='img' src={`data:image;base64,${productData.productImages[index]}`} sx={{ maxWidth: '100%' , height:'27rem' }} />
                    </Grid>
                    <Grid item md={7} >
                        <Box component="div" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '1%' }} >
                            <Box>
                                <Typography variant='h5'>{productData.title}</Typography>
                                <Rating name="read-only" value={4} readOnly />
                                <Typography>Price : &#8377;{productData.price} </Typography>
                                <Typography>Discount price : &#8377; {productData.discountPrice}</Typography>
                                <Typography>Quantity : {productData.quantity}</Typography>
                                <Typography>{productData.description}</Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: { lg: "flex-start", md: "flex-start", sm: "center", xs: "center" }, alignItems: 'center' }}>
                                <Typography variant='h6'> Qty : &nbsp;</Typography>
                                <Box component="select" sx={{ fontSize: "1.3rem" }} >
                                    <Box component="option" value={1} selectteed>1</Box>
                                    <Box component="option" value={2} selectteed>2</Box>
                                    <Box component="option" value={3} selectteed>3</Box>
                                    <Box component="option" value={4} selectteed>4</Box>
                                    <Box component="option" value={5} selectteed>5</Box>
                                    <Box component="option" value={6} selectteed>6</Box>
                                    <Box component="option" value={7} selectteed>7</Box>
                                    <Box component="option" value={8} selectteed>8</Box>
                                    <Box component="option" value={9} selectteed>9</Box>
                                    <Box component="option" value={10} selectteed>10</Box>
                                </Box>
                            </Box>
                            <Box sx={gridBox2} >
                                <Button variant='contained' sx={buttonGroupStyle1}><ShoppingBagOutlinedIcon/> &nbsp; Buy now </Button>
                                <Button variant='contained' sx={buttonGroupStyle1} ><AddShoppingCartOutlinedIcon /> &nbsp; Add to Cart  </Button>
                                {props.isSeller ? <Button variant='contained' onClick={gotoUpdate} sx={buttonGroupStyle1} >Update</Button> : null}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={12} sx={{ backgroundColor: "#F5F5F5" }} >

                <Grid container spacing={3} sx={{ my: '2%' }} >
                    <Grid item md={5} sm={12} xs={12} >
                        <Box component='form' sx={formStyle1} >
                            <Typography variant="h6" > Share your Experience </Typography>
                            <TextField id="filled-basic" label="Filled" variant="standard" />
                            <TextField placeholder='Share your Experience' maxRows={7} minRows={3} variant='standard' multiline />

                            <Box component='div' sx={{ width: '100%', display: 'flex', alignItems: "base-line" }} >
                                <Typography variant="subtitle1"> Rate Us &nbsp;
                                </Typography>
                                <Rating name="read-only" value={4} />
                            </Box>
                            <Button variant='outlined' sx={{ display: 'block', width: '30%' }} > Post </Button>

                        </Box>
                    </Grid>
                    <Grid item md={7}>
                        <Review />
                        <Review />
                        <Button variant="outlined" sx={{ display: 'block', mx: 'auto' }} > View More </Button>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}


export default DetailView;

