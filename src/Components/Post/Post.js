import React from 'react';
import './PostList.css'
import SideList from '../SideList/SideList'
import BlogList from '../BlogList/BlogList'
import { useState } from 'react';
import { useEffect } from 'react';

const Post = () => {
    const [blogList, setBlogList] = useState([])
    useEffect(() => {
        fetch('https://sleepy-falls-46675.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogList(data))
    })
    return (
        <div>
            <div className="row mt-5 container">
                <div className="col-md-1">
                    <SideList />
                </div>
                </div>
                <div className="row container">
                    {
                        blogList.map(blog => <BlogList blog={blog}></BlogList>)
                    }

                </div>
            </div>
       
    );
};

export default Post;