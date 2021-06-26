import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const history = useHistory();
    const {id} = useParams();
    const [blogDetails,setBlogDetails] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:4000/singleBlog/${id}`)
        .then(res =>res.json())
        .then(data => {setBlogDetails(data); })
    },[])
    return (
        <div className="container">
            <h4 className='text-center m-4'>{blogDetails.title}</h4>
            <img className='rounded mx-auto d-block h-50 w-50 mt-3' src={blogDetails.img} alt='img-description'></img>
            <p className=' text-justify mt-5'>{blogDetails.description}</p>
        </div>
    );
};

export default BlogDetails;