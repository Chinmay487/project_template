import React from 'react';
import {useParams} from 'react-router-dom';

const DetailView = () => {
    const {key} = useParams()
    return (
        <>
            <h1>{key}</h1>
            <h1>Detail View Page</h1>
        </>
    )
}

export default DetailView;

// 25 *60 per minut
//  25 * 3600
