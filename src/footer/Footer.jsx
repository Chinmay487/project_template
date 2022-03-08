import React from 'react';
import {Grid,Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Grid container spacing={5} justifyContent="space-evenly"  >
            <Grid item>
                <h1>Shop Non-Stop on ShopHeaven</h1>
                <Typography>
                    Trusted by more than 1 Crore Indians
                    Cash on Delivery | Free Delivery
                </Typography>
            </Grid>
            <Grid item >
            <Typography><a href="">Camera</a></Typography>
            <Typography><a href="">Laptop</a></Typography>
            <Typography><a href="">Watches</a></Typography>

            </Grid>
            <Grid item>
            <Typography><a href="">Iphone</a></Typography>
            <Typography><a href="">Clock</a></Typography>
            </Grid>
            <Grid item>
                <Typography>Social Links</Typography>
                <a href=""><InstagramIcon/></a>
                <a href=""><FacebookIcon/></a>
                <a href=""><YouTubeIcon/></a>
                <a href=""><TwitterIcon/></a>
            </Grid>

        </Grid>
    )
}

export default Footer;