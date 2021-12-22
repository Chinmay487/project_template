import React from 'react';
import { Grid, Typography } from '@mui/material'
import History from '../user/History';

const Panel = (props) => {
    return (
        <>
            <Typography variant="h4" align="center" sx={{ my: "2%" }}>
                Your Products
            </Typography>
            <Grid container rowGap={2} sx={{width:{lg:"80%",md:"80%",sm:"90%",xs:"90%"},mx:"auto"}} >
                <History isCart={false} isSeller={props.isSeller} />
            </Grid>
        </>
    )
}

export default Panel