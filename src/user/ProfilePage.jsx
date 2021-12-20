import React from 'react';
import { Typography, Grid, Box, useTheme, TextField, Button, IconButton } from '@mui/material';
import profile from '../images/profile.jpg';
import jcb from '../images/jcb.jpg';
import lizard from '../images/lizard.jpg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ProfilePage = () => {
    const theme = useTheme()

    const profileGrid = {
        width: "80%",
        mx: "auto",
        my: '2%'
    }

    const profile1 = {
        height: "30rem",
        border: "1px solid #B0BEC5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        boxShadow: theme.shadows[5],
        backgroundColor: "#EEEEEE"
    }

    const profile2 = {
        border: "1px solid #B0BEC5",
        display: "flex",
        boxShadow: theme.shadows[5],
        backgroundColor: "#EEEEEE",

    }

    const addressForm = {
        height: "27rem",
        // padding : "5%",
        px: "12%",
        pb: '3%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        // backgroundColor : "white"

    }

    const addressStyle = {
        width: "80%",
        mx: "auto",
        border: "1px solid #BDBDBD",
        boxShadow: theme.shadows[3],
        px: "2%"
    }


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
        <>
            <Typography variant="h5" sx={{ my: "2rem", textAlign: "center" }} gutterBottom>Hello User</Typography>
            <Grid container columnGap={3} rowGap={3} sx={profileGrid} >
                <Grid item md={3} sm={12} xs={12} sx={profile1} >
                    <Box component="img" src={profile} sx={{ height: "15rem", width: "70%", mx: "auto" }} />
                    <Typography sx={{ mx: "4%" }} variant="h6">Name : Username</Typography>
                    <Typography sx={{ mx: "4%" }} variant="h6">Contact : 9999999999</Typography>
                    <Typography sx={{ mx: "4%" }} variant="h6"> Email : abcd@email.com </Typography>
                    <Typography sx={{ mx: "4%" }} variant="h6">City : Mumbai</Typography>
                </Grid>
                <Grid item md={8} sm={12} xs={12} sx={profile2} >
                    <Box sx={{ width: "100%", height: "100%" }}>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>Address Info</Typography>
                        <Grid container>

                            <Grid item md={6} sm={12} xs={12} sx={{ display: "flex", height: "27rem", flexDirection: "column", justifyContent: "space-evenly" }}>
                                <Box component="div" sx={addressStyle}>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                                        <Typography variant="h6" >Address 1</Typography>
                                        <IconButton >
                                            <DeleteForeverIcon sx={{ color: "red" }} />
                                        </IconButton>
                                    </Box>
                                    <Typography>Address Line 1</Typography>
                                    <Typography>Address Line 2</Typography>
                                    <Typography>City</Typography>
                                    <Typography>District</Typography>
                                    <Typography>State</Typography>
                                    <Typography>Pin code</Typography>
                                </Box>
                                <Box component="div" sx={addressStyle}>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                                        <Typography variant="h6" >Address 2</Typography>
                                        <IconButton >
                                            <DeleteForeverIcon sx={{ color: "red" }} />
                                        </IconButton>
                                    </Box>
                                    <Typography>Address Line 1</Typography>
                                    <Typography>Address Line 2</Typography>
                                    <Typography>City</Typography>
                                    <Typography>District</Typography>
                                    <Typography>State</Typography>
                                    <Typography>Pin code</Typography>
                                </Box>

                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <Box component="form" sx={addressForm}>
                                    <Typography>Address Form</Typography>
                                    <TextField variant='outlined' label='Address line 1' />
                                    <TextField variant='outlined' label='Address line 2' />
                                    <TextField variant='outlined' label='City' />
                                    <TextField variant='outlined' label='District' />
                                    <TextField variant='outlined' label='State' />
                                    <TextField variant='outlined' type="number" label='Pin code' />
                                    <Button variant="outlined" sx={{ display: "block", width: "60%", mx: "auto", mt: "2%" }}>Add</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                Purchase History
            </Typography>
            <Grid container columnGap={3} rowGap={3} sx={profileGrid}>
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
            </Grid>
        </>
    )
}


export default ProfilePage;
