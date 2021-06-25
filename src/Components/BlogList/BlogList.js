import React from 'react';
import { Link } from 'react-router-dom';
import './Bloglist.css'
const BlogList = (props) => {
    const { _id, title, img, description } = props.blog
    return (
    
        <div className="row">
       <Link to={`/blogDetails/${_id}`}>
       <div className="col-md-4 single-post">
            <div>
                <h5 className='text-white'>{title}</h5>
                <p className='text-dark'>{description}</p>
            </div>
            <img className="card-img-top post-image" src={img} alt="tamimImage" />
        </div>
       </Link>
     </div>
    );
};

export default BlogList;