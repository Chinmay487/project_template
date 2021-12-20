import React from 'react';
import {Typography , Box , Grid , Button , useTheme} from '@mui/material';


const ViewCart = () => {

    const theme = useTheme();

    return (
        <Grid container sx={{width:'80%',mx:'auto',my:'1%'}} >
            <Grid item md={4} sm={12} xs={12} sx={{height:'15rem',boxShadow:theme.shadows[5], backgroundColor:'#F5F5F5', display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'1%'}}>
                    <Typography variant='h5'>
                        Price : 69000
                    </Typography>
                    <Typography variant='h5'>
                        Delivery Charges : 69.00
                    </Typography>
                    <Typography variant='h5'>
                        Total : 69069.00
                    </Typography>
                    <Button variant='outlined' sx={{display:'block',mx:'auto'}}> Place Order </Button>
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
                <Box>
                    
                </Box>
            </Grid>
        </Grid>
    )
}

export default ViewCart;