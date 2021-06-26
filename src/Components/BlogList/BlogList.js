import React from 'react';
import { Link } from 'react-router-dom';
import './Bloglist.css'
const BlogList = (props) => {
    const { _id, title, img, description } = props.blog
    return (

        <div className="col-md-4 ">
            <Link to={`/blogDetails/${_id}`}>
                <div className="single-post">
                    <div>
                        <h5 className=' text-dark '>{title}</h5>
                        <p className='text-dark description'>{description}</p>
                    </div>
                    <img className="card-img-top post-image" src={img} alt="blogImage" />
                </div>
            </Link>
        </div>
    );
};

export default BlogList;