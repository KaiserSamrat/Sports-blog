import React from 'react';
import './PostList.css'
import SideList from '../SideList/SideList'
import BlogList from '../BlogList/BlogList'
import { useState } from 'react';
import { useEffect } from 'react';

const Post = () => {
    const [blogList, setBlogList] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => res.json())
            .then(data => setBlogList(data))
    })
    return (
        <div>
            <div className="row mt-5 container">
                <div className="col-md-1">
                    <SideList />
                </div>
                <div className="col-md-10">
                    {
                        blogList.map(blog => <BlogList blog={blog}></BlogList>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Post;