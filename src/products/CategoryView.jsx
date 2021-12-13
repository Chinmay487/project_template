import React from 'react';
import {useParams} from 'react-router-dom'


const CategoryView = (props) => {
    const {category,subCategory} = useParams()

    return (
        <>
            <h1>{category}</h1>
            <h1>{subCategory}</h1>
        </>

    )


}

export default CategoryView;
