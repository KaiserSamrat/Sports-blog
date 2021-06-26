import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleBlogData from '../SingleBlogData/SingleBlogData'

const AllBlogList = () => {
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/blogs`)
            .then(res => res.json())
            .then(data => setBlogData(data))
    }, [])
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Blog Title</th>
                        <th>Description</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        blogData.map(job => <SingleBlogData job={job}></SingleBlogData>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBlogList;