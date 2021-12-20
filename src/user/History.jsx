import React from 'react';
import { Grid, Typography, Box,useTheme } from '@mui/material';
import jcb from '../images/jcb.jpg';


const History = () => {

    const theme = useTheme()


    const profileGridItem = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }

    const profileGridItemText = {
        mx: {
            lg: "0%",
            md: "0%",
            sm: "5%",
            xs: "5%"
        }
    }

    return (
        <Grid item sm={12} xs={12}>
            <Grid container sx={{ boxShadow: theme.shadows[5] }} >
                <Grid item md={4} sm={12} xs={12} >
                    <Box component="center">
                        <Box component="img" src={jcb} sx={{ maxWidth: { lg: "80%", md: "80%", sm: "80%", xs: "80%" } }} />
                    </Box>
                </Grid>
                <Grid item md={4} sm={12} xs={12} sx={profileGridItem} >
                    <Typography sx={profileGridItemText} variant="h6" > JCB 13 mini (128gb) yellow </Typography>
                    <Typography sx={profileGridItemText} variant="h6"> Price : 69,999 </Typography>
                </Grid>
                <Grid item md={4} sm={12} xs={12} sx={profileGridItem}>
                    <Typography sx={profileGridItemText} variant="h6">Date : 21-02-2021</Typography>
                    <Typography sx={profileGridItemText} variant="h6">Quantity : 5</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default History;