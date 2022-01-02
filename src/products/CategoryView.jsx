import React from 'react';
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

const CategoryView = (props) => {
    const {category,subCategory} = useParams()

    return (
        <Box sx={{mt:"10rem"}}>
            <h1>{category}</h1>
            <h1>{subCategory}</h1>
        </Box>

    )


}

export default CategoryView;
