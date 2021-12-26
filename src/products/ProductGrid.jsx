import React ,{useEffect}from 'react';
import {Grid,useTheme,useMediaQuery} from '@mui/material'
import ProductCard from './ProductCard';
import axios from 'axios';


const ProductGrid = () => {

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/client/fetch')
        .then((response)=>response.data)
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            alert("something went wrong")
        })
    },[])

    const theme = useTheme()

    const small = useMediaQuery(theme.breakpoints.down('sm'))

    const gridStyle2 = {
        alignItems:"center"
    }

    return (
        <Grid container justifyContent="space-evenly" sx={gridStyle2} rowGap={2}>
                    <Grid item>
                        <ProductCard/>
                    </Grid>
                    <Grid item>
                        <ProductCard/>
                    </Grid>
                    <Grid item>
                        <ProductCard/>
                    </Grid>
                    
                    {
                        !small ? <>
                        <Grid item>
                        <ProductCard/>
                    </Grid>
                    <Grid item>
                        <ProductCard/>
                    </Grid>
                    <Grid item>
                        <ProductCard/>
                    </Grid></> : null
                    }
                </Grid>
    );
}

export default ProductGrid;