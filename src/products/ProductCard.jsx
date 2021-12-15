import React from 'react';
import { Box, Typography} from '@mui/material'
// import lizard from '../images/lizard.jpg'
import jcb from '../images/jcb.jpg'
import { Link } from 'react-router-dom'


// const ProductCard = () => {
//     return (
//         // sx={{ maxWidth: 345 }}
//         <Card elevation={7} sx={{ width : "15rem"}}>
//             <Link className="link" to="/wishlist">
//             {/* <CardMedia
//                 component="img"
//                 height="200"
//                 image={jcb}
//                 alt="jcb"
//             /> */}
//             <Box component="img" src={jcb} alt="image" sx={{width : "100%" ,height : "15rem"}} />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 Lizards are a widespread group of squamate reptiles, with over 6,000
//                 species, ranging across all continents except Antarctica
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//             </CardActions>
//             </Link>
//         </Card>
//     );
// }

const ProductCard = () => {

    const productBox1 = { 
        padding: "5px",
        height: {
            md : "15rem",
            sm : "10rem"
        },
        border: "1px solid #e8ebe9",
        boxShadow : "2px 2px 2px 4px #f2f2f2",
        borderRadius: "10px",
        mx: "1rem",
        display : "flex",
        justifyContent : "space-around",
        alignItems : "center",
        flexDirection: {
            md : "column",
            sm : "row",
            xs : "row"
        }
    }

    const cardImageStyle = { 
        width: {
            md : "100%",
            sm : "50%",
            xs : "50%"
        }, 
        maxHeight: {
            md: "50%",
            sm : "100%",
            xs : "100%"
        } 
    }

    const cardContent = {
        width : "100%" ,
        display:"flex",
        justifyContent:"flex-start",
        // backgroundColor:"cyan"
    }

    return (
        <Link to="/wishlist" className="link">
            <Box  sx={ productBox1 } >
                <Box component="img" src={jcb} sx={cardImageStyle} />
                <Box component="div" sx={{display:"flex",flexDirection:"column"}}>
                    <Typography variant="h6" >
                        JCB
                    </Typography>
                    <Typography variant="p">
                        JCB ki khudai
                    </Typography>
                    <Typography variant="h5">Inr 3000</Typography>
                    <Box sx={cardContent}>
                        <Typography>From 999</Typography>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}



export default ProductCard;