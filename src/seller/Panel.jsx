import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material'
import History from '../user/History';
import axios from 'axios';
import { Box } from '@mui/system';



const Panel = (props) => {

    const [dataList, setDataList] = useState([]);

    const [len, setLen] = useState(false)

    const fetchData = useCallback(() => {
        axios.get('http://192.168.43.65:8000/seller/panel')
            .then((response) => response.data)
            .then((data) => {
                if (data.length > 0){
                    setDataList([...data])
                    
                }
                else{
                    setLen(data.length > 0);
                    
                }
                
            })
            .catch((error) => {
                alert('something went wrong')
            })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])



    return (
        <>
            <Typography variant="h4" align="center" sx={{ my: "2%" }}>
                Your Products
            </Typography>

            {
                (!dataList.length > 0 ) ? <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='h5'>
                        Fetching your products
                    </Typography>
                    <CircularProgress />
                </Box> :

                    <>
                        {

                            !len ?
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h5'>
                                        No products added
                                    </Typography>

                                </Box>
                                :
                                <Grid container rowGap={3} sx={{ width: { lg: "70%", md: "70%", sm: "90%", xs: "90%" }, mx: "auto" }} >
                                    {
                                        dataList.map((item) => {
                                            return (
                                                <History isCart={false} isSeller={props.isSeller} item={item} key={item.key} />
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

export default Panel