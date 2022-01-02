import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Grid, Box, useTheme, TextField, Button, IconButton, CircularProgress } from '@mui/material';
import profile from '../images/profile.jpg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import History from './History';
import axios from 'axios';
import { NETWORK_URL } from '../links'



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
        px: "12%",
        pb: '3%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }

    const addressStyle = {
        width: "80%",
        mx: "auto",
        border: "1px solid #BDBDBD",
        boxShadow: theme.shadows[3],
        px: "2%"
    }

    const [dataList, setDataList] = useState([]);

    const [len, setLen] = useState(false)

    const fetchData = useCallback(() => {
        axios.get(`${NETWORK_URL}/seller/panel`)
            .then((response) => response.data)
            .then((data) => {
                if (data.length > 0) {
                    setDataList([...data])
                }
                setLen(data.length > 0);
            })
            .catch((error) => {
                alert('something went wrong');

            })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])


    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    my: "2rem",
                    textAlign: "center"
                }}
                gutterBottom>
                Hello User
            </Typography>
            <Grid container columnGap={3} rowGap={3} sx={profileGrid} >
                <Grid item md={3} sm={12} xs={12} sx={profile1} >
                    <Box
                        component="img"
                        src={profile}
                        sx={{
                            height: "15rem",
                            width: "70%",
                            mx: "auto"
                        }} />
                    <Typography sx={{ mx: "4%" }} variant="h6">Name : Username</Typography>
                    <Typography sx={{ mx: "4%" }} variant="h6">Contact : 9999999999</Typography>
                    <Typography sx={{ mx: "4%" }} variant="h6"> Email : abcd@email.com </Typography>
                    <Typography sx={{ mx: "4%" }} variant="h6">City : Mumbai</Typography>
                </Grid>
                <Grid item md={8} sm={12} xs={12} sx={profile2} >
                    <Box sx={{ width: "100%", height: "100%" }}>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>Address Info</Typography>
                        <Grid container>

                            <Grid
                                item
                                md={6}
                                sm={12}
                                xs={12}
                                sx={{
                                    display: "flex",
                                    height: "27rem",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly"
                                }}>
                                <Box component="div" sx={addressStyle}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}
                                    >
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
                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }} >
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
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            display: "block",
                                            width: "60%",
                                            mx: "auto",
                                            mt: "2%"
                                        }}>
                                        Add
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>


            <Typography variant="h4" sx={{ textAlign: "center" }}>
                Purchase History
            </Typography>

            {
                (!dataList.length > 0) ?
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Typography variant='h5'>
                            Fetching your products &nbsp;
                        </Typography>
                        <CircularProgress />
                    </Box> : <>
                        {
                            !len ?
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Typography variant='h5'>
                                        No products added
                                    </Typography>
                                </Box>
                                :

                                <Grid
                                    container
                                    sx={{
                                        width: '75%',
                                        mx: 'auto',
                                        my: '3%'
                                    }}
                                    rowGap={3}
                                >
                                    {
                                        dataList.map((item) => {
                                            return (
                                                <History
                                                    isCart={true}
                                                    isSeller={false}
                                                    item={item}
                                                    key={item.key}
                                                />
                                            )
                                        })
                                    }
                                </Grid>
                        }
                    </>
            }

        </>
    )
}


export default ProfilePage;
