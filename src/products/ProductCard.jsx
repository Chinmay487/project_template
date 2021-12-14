import React from 'react';
import {Box, Typography,Card,CardContent,CardActions,CardMedia,Button} from '@mui/material'
import lizard from '../images/lizard.jpg'
import jcb from '../images/jcb.jpg'
import {Link} from 'react-router-dom'


const ProductCard = () => {
    return (
        // sx={{ maxWidth: 345 }}
        <Card elevation={7} sx={{ maxWidth: 300 }}>
            <Link className="link" to="/wishlist">
            <CardMedia
                component="img"
                height="200"
                image={jcb}
                alt="jcb"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Link>
        </Card>
    );
}


export default ProductCard;