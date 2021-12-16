import React from 'react';
import {Box , Typography,Rating, Button} from '@mui/material';
import mob from '../images/mob.webp';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

const DetailView = () => {

    const detailImageStyle = {
        width :{
            md : '50%',
            sm : '60%',
            xs : '90%'
        },
        display : 'block',
        mx : {
            md : '10px',
            sm : 'auto'
        }
    }

    return(
        <>
            <Box>
                <Box component='img' src={mob} sx={detailImageStyle} />
                <Box component="div" >
                    <Typography variant='h4'>Iphone 13 mini (128gb) Blue</Typography>
                    <Rating name="read-only" value={4} readOnly />
                    <Typography>Price : &#8377;69,900.00</Typography>
                    <Typography>Model Name : Iphone</Typography>
                    <Typography>Brand : Apple</Typography>
                    <Typography>Storage : 128gb</Typography>
                    <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae in libero accusamus quisquam nobis, obcaecati, animi magni asperiores, architecto cum fugiat voluptate. Repudiandae, molestiae.</Typography>
                </Box>
                
                <Box>
                    <Box>
                        <Button variant='contained'>Buy Now <ShoppingBagOutlinedIcon/> </Button>
                        <Button variant='contained'> Add to Cart <AddShoppingCartOutlinedIcon/> </Button>
                        <Button variant='contained' > Add to Wish List <RedeemOutlinedIcon/> </Button>
                    </Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailView;

