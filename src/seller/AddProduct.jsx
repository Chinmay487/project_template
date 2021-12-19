import React from 'react';
import { Box ,Typography ,Button ,TextField  } from '@mui/material';


const AddProduct = () => {
    return (
        <Box component='form'>
                <TextField id='standard-basic' variant='standard' label='Enter the Product Name' />
                <TextField  id='outlined-basic' variant='outlined' label='Description' />
                <Typography>
                < TextField id='filled-basic' variant='filled' label='Price'/>
                <TextField id='filled-basic' variant='filled' label='Discount Price'/>
                </Typography>
                <Typography variant='h6'>
                    How much quantity Available 
                </Typography>
        </Box>
    )
}

export default AddProduct;