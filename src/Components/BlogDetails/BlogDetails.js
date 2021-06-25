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
        .then(data => {  setBlogDetails(data);
            
        })
    },[])
    return (
        <div>
            <h1>{blogDetails.title}</h1>
        </div>
    );
};

export default BlogDetails;