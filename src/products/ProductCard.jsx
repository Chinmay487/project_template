import React from 'react';
import { Box, Typography} from '@mui/material';
import jcb from '../images/jcb.jpg';
import { Link } from 'react-router-dom';




const ProductCard = () => {

    const productBox1 = { 
        padding: "5px",
        height: {
            md : "12rem",
            sm : "10rem"
        },
        width:{
            xl : '10rem',
            lg : '10rem',
            sm : '100%'
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

<<<<<<< HEAD
    // const cardContent = {
    //     width : "100%" ,
    //     display:"flex",
    //     justifyContent:"flex-start",
    //     // backgroundColor:"cyan"
    // }

=======
    const cardContent = {
        width : "100%" ,
        display:"flex",
        justifyContent:"flex-start",
        // backgroundColor:"cyan"
    }
    // detail/:key
>>>>>>> a6700370af570d4779c0ff4dc594e0bbd7571410
    return (
        <Link to="/detail/3" className="link">
            <Box  sx={ productBox1 } >
                <Box component="img" src={jcb} sx={cardImageStyle} />
                <Box component="div" sx={{display:"flex",flexDirection:"column"}}>
                    <Typography variant="subtitle1" >
                        JCB
                    </Typography>
                    <Typography variant="subtitle2">
                        JCB ki khudai
                    </Typography>
                    <Typography variant="subtitle2">Inr 3000</Typography>
                    
                </Box>
            </Box>
        </Link>
    )
}



export default ProductCard;